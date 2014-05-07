require(['dom/events', 'dom/keyboard.js'], function (events, keyboard) {
  var elem = document.getElementById('target');
  events.click(elem, function (ev) {
    alert('clicked');
    console.dir(ev);
  });
  events.keypress(document.body, function (evt) {
      console.dir(evt.keycode);
  });
  keyboard.keyReturn(document.getElementsByTagName());
});
