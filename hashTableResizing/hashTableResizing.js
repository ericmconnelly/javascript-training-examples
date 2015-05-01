/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

var makeHashTable = function(){
  var result = {};
  var storage = {};
  var storageLimit = 1000;
  var count = 0;

  result.insert = function(key, value){
    var idx = getIndexBelowMaxForKey( key, storageLimit );
    var replaced = false;

    var bucket = storage[idx];

    if( !bucket ){
      storage[idx] = [];
    }

    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];

      if( tuple[0] === key ){
        tuple[1] = value;
        replaced = true;
        return;
      }

    }

    if( !replaced ){
      bucket.push( [key, value] );
      count++;
    }

    // If size >= .75 * storageLimit
      // run resize( storageLimit * 2 )
  };
  
  result.retrieve = function(){
    
  };

  result.remove = function(){
    

    // If size >= .25 * storageLimit
      // run resize( storageLimit / 2 )
  };

  var resize = function( newSize ){
    
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
    console.log( hash << 5 );
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
