var event = new MouseEvent('click', {
  view: window,
  bubbles: true,
  calcelable: true
});

var matching_elements = document.getElementsByClassName("style-scope paper-icon-button x-scope iron-icon-1");

var button_index = matching_elements.length;

switch(button_type) {
  case "play_pause_playback":
    button_index -= 12;
    break;
  case "stop_playback":
      /*  This currently just play/pauses,
          need states to determine playing/pausing state */
    button_index -= 12;
    break;
  case "next_track":
    button_index -= 11;
    break;
  case "prev_track":
    button_index -= 13;
    break;
}

matching_elements[button_index].dispatchEvent(event);
