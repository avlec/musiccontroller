var chosen_source = {
    tab: null,
    jseventhandle: '',
    playing: false
}

chrome.storage.sync.set({ 'media_source' :  { 'id': chosen_source.tab.id, 'jseventhandle': chosen_source.jseventhandle, 'playing': chosen_source.state}}, function() {
        ('Changing media source to: ' String({ 'media_source' :  { 'id': chosen_source.tab.id, 'jseventhandle': chosen_source.jseventhandle, 'playing': chosen_source.state}})
})