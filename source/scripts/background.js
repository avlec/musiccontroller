var MusicController = {
  discovered_tabs: [],
  selected_tab_id: -1,

  discoverTabs: function() {

  },

  changeSelectedTab: function(selected_tab_id) {
    for(tab_id in this.discovered_tabs) {
      if(tab_id === selected_tab_id) {
        chrome.tabs.query({ url: "https://play.google.com/music/listen*" }, function(result) {
          if(result.length === 0) {
            alert("No open music tabs.");
            return;
          }
          alert("Tab selection being made from " + result.length + " tab(s).");
          if(result.length !== 0) {
            // Some display here prompting which window
            selected_tab_id = result[0].id;
          } else {
            selected_tab_id = result[0].id;
          }
          alert(selected_tab_name + " id: " + selected_tab_id);
        });
      }
    }
  },

  executeCommandInTab: function(command) {
      chrome.tabs.executeScript(selected_tab_id, {
        code: 'var button_type = "' + command + '"'
      }, function() {
        chrome.tabs.executeScript(selected_tab_id, { file: "source/scripts/simulate_click.js" });
      });
  }
}

let musicController = MusicController();

var selected_tab_id;
var selected_tab_name = "Google Play Music";

/* this script selects the play music tab */


chrome.commands.onCommand.addListener(executeCommandInTab);
chrome.commands.onCommand.removeListener(executeCommandInTab);
