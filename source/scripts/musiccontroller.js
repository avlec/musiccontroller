var MusicController = {
    discovered_tabs: [],
    selected_tab_id: -1,



    changeSelectedTab: function() {
        // Remove Old Listener
        chrome.commands.onCommand.removeListener(executeCommandInTab);
        // Add new listener
        chrome.commands.onCommand.addListener(executeCommandInTab);
    },
    
    executeCommandInTab: function(command) {
        chrome.tabs.executeScript(selected_tab_id, {
          code: 'var button_type = "' + command + '"'
        }, function() {
          chrome.tabs.executeScript(selected_tab_id, { file: "source/scripts/simulate_click.js" });
        });
    }
}