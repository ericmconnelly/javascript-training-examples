/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var count = 0;
  var storageLimit = 1000;

  result.insert = function( key, value ){
    var idx = getIndexBelowMaxForKey( key, storageLimit );
    storage[idx] = [key, value];
    var bucket = storage[idx];
    var tuple;
    var replaced = false;

    for (var i = 0; i < bucket.length; i++) {
      tuple = bucket[i];
      if( tuple[0] === key ){
        tuple[1] = value;
        replaced = true;
      }
    }

    if(!replaced){
      bucket.push( [key, value] );
      count++;
    }
  };

  result.retrieve = function( key ){
    var idx = getIndexBelowMaxForKey( key, storageLimit );
    var bucket = storage[idx];

    if( !bucket ){
      return;
    }
    
    var tuple;
    
    for (var i = 0; i < bucket.length; i++) {
      tuple = bucket[i]
      if( tuple[0] === key ){
        return tuple[1];
      }
    }

    return 'Not found';
  };

  result.remove = function( key ){
    var idx = getIndexBelowMaxForKey( key, storageLimit );
    var bucket = storage[idx];

    if( !bucket ){
      return;
    }

    var tuple;

    for (var i = 0; i < bucket.length; i++) {
      tuple = bucket[i];
      if( tuple[0] === key ){
        var temp = tuple[1];
        delete tuple;

        return temp;
      }
    }

    return 'Not found';
  };

  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for(var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
