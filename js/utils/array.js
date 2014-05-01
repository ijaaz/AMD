define(function () {
  var nativeForEach = function (list, callback, thisArg) {
    [].forEach.call(list, callback, thisArg);
  },
  customForEach = function (list, callback, thisArg) {
    var T, k = 0, O, len, kValue;

    if ( list == null ) {
      throw new TypeError( " this is null or not defined" );
  }
