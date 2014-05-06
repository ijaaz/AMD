/*global alert*/
require(['dom/events'], function (events) {
  var elem = document.getElementById('target');
  events.click(elem, function () {
    alert('clicked');
  });
});
