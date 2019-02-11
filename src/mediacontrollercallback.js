/* Handles different prev/next/play/pause for different services */

var media_source

chrome.storage.sync.get([ 'media_source' ], function(result){
    media_source = (Array.isArray() ? result[0] : result)
    console.log(media_source)
})