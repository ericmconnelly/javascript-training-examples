/*
 * Make an eventing system mix-in that adds .trigger() and .on() to any input
 * object.
 *
 * Example usage:
 * var obj = mixEvents({ name: 'Alice', age: 30 });
 * obj.on('ageChange', function(){ // On takes an event name and a callback function
 *    console.log('Age changed');
 * });
 * obj.age++;
 * obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.
 *
 * Caveats:
 * - mixEvents should return the original object it was passed after extending it.
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function as well. That is to say, we can have multiple
 *   listeners for an event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

var mixEvents = function(obj) {

  var events = {};

  obj.on = function(event, cb){
    // if no event, set event as an empty array
    events[event] = events[event] || [];
    // push the callback in array
    events[event].push(cb);
  };

  obj.trigger = function(event){
    // if event is in events obj
    if( events[event] ){
      var args = Array.prototype.slice.call(1, arguments);
      // apply cb to object with all arguments
      events[event].forEach(function(cb){
        cb.apply(obj, args);
      });
    }
  }

  return obj;
};
