/* Handles different prev/next/play/pause for different services */

var media_source

// Fetch state.
chrome.storage.sync.get([ 'media_source' ], function(result){
    media_source = (Array.isArray() ? result[0] : result)
    console.log(media_source)
})

// Execute appropriate script ( media_source.jseventhandle )
chrome.tabs.executeScript(media_source.tab.id, {
    code:   'var eventinfo = ' + String({ 'command': command, playing: media_state.playing}),
    file:   '/src/' + media_source.jseventhandle
})
