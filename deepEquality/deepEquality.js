/**
 * Write a function that, given two objects, returns whether or not the two
 * are deeply equivalent--meaning the structure of the two objects is the
 * same, and so is the structure of each of their corresponding descendants.
 *
 * Examples:
 *
 * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
 * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
 *
 * don't worry about handling cyclical object structures.
 *
 */

var deepEquals = function(obj1, obj2, result) {
  result = result || false;

  for(key in obj1){
    // if value is object, recurse
    if( typeof obj1[key] === 'object' && typeof obj2[key] === 'object' ){
      return deepEquals( obj1[key], obj2[key] );
    }

    // if obj1's value isn't equal to obj2's value
    // set result as false, else set to true
    obj1[key] !== obj2[key] ? result = false : result = true;
  }

  return result;
};

/*
 * Time complexity: O(n)
 */