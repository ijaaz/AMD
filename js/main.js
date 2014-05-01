require(['dom/events'], function (events) {
  var elem = document.getElementById('target');
  events.addEvent(elem, 'click', function () {
    alert('clicked');
  });
});
