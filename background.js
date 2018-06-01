
var selected_tab_id;
var selected_tab_name = "Google Play Music";


/* this script selects the play music tab */
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

chrome.commands.onCommand.addListener(function (command) {
  chrome.tabs.executeScript(selected_tab_id, {
    code: 'var button_type = "' + command + '"'
  }, function() {
    chrome.tabs.executeScript(selected_tab_id, { file: "simulate_click.js" });
  });
});
