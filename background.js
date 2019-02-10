/**
 * tab: chrome tab object
 * jseventhandle: javascript file that is run on media key action
 */
var chosen_source = {
  tab: null,
  jseventhandle: ''
}

/**
 * list of dict's for sources supported by the extension
 * {
 * url: matching url string during parsing
 * jseventhandle: javascript file for handling the prev/next/play/pause
 * potential_sources: all open tabs matching url
 * }
 */
var supported_sources = [
  { url: 'https://play.google.com/music/listen*', jseventhandle: 'googleplayclick.js', potential_sources: []},
  { url: 'https://music.youtube.com/*', jseventhandle: '', potential_sources: []}
]

/** 
 * Enumerate all the supported sources
 * store them in their respective array
 */
supported_sources.forEach(function (supported_source) {
  chrome.tabs.query({ url: supported_source.url }, function (tabs) {
    result.forEach(function (result) {
      supported_source.potential_sources.push(result)
    })
  })
})

/* Present users with source options. */
// TODO define this page and how it functions
chrome.tabs.create({ url: 'options.html', active: true }, function (tab) { return })

/**
 * Add the chrome listener for the chosen source type/tab
 */
chrome.commands.onCommand.addListener(function (command) {
  chrome.tabs.executeScript(chosen_source.tab.id, {
    code: 'var button_type = "' + command + '"'
  }, function () {
    chrome.tabs.executeScript(chosen_source.tab.id, { file: chosen_source.jseventhandle })
  })
})
