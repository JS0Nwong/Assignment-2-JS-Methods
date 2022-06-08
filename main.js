// MAP //
/*
Takes an array of elements and executes a callback function on each element.
If there are no elemeents in the array, it returns a string.
*/
Array.prototype.myMap = function (callbackFn, args) {
  if (this.length === 0) {
    return "Array is empty";
  }
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callbackFn(this[i], args));
  }
  return newArray;
};

// FILTER //
Array.prototype.myFilter = function (callbackFn, args) {
  if (this.length === 0) {
    return "Array is empty";
  }
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], args)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

// SOME //
Array.prototype.mySome = function (callbackFn) {
  if (this.length === 0) {
    return "Array is empty";
  }
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i])) {
      return true;
    }
  }
  return false;
};

// EVERY //
Array.prototype.myEvery = function (callbackFn) {
  if (this.length === 0) {
    return false;
  }

  for (let i = 0; i < this.length; i++) {
    if (!callbackFn(this.at(i))) {
      return false;
    }
  }

  return true;
};

// REDUCE //
Array.prototype.myReduce = function (callbackFn) {};

// INCLUDES //
Array.prototype.myIncludes = function (searchElement) {};

// INDEXOF //
Array.prototype.myIndexOf = function (searchElement) {};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function (searchElement) {};

// KEYS //
Object.myKeys = function (object) {};

// VALUES //
Object.myValues = function (object) {};

//TEST CODE//
