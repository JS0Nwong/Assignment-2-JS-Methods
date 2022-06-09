// MAP //
/*
Takes an array of elements and executes a callback function on each element.
If there are no elements in the array, it returns false.
*/
Array.prototype.myMap = function (callbackFn, args) {
  if (this.length === 0) {
    return false;
  }
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callbackFn(this[i], args));
  }
  return newArray;
};

// FILTER //
/*
Takes an array of elements and executes a callback function on each element.
If the element in the array exist it get added to a new array.
*/
Array.prototype.myFilter = function (callbackFn, args) {
  if (this.length === 0) {
    return false;
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
/*
Takes an array of elements and executes a callback function on each element.
If there exist at least one element in the array that returns true, the function returns true, else it returns false.
*/
Array.prototype.mySome = function (callbackFn) {
  if (this.length === 0) {
    return false;;
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
Array.prototype.myReduce = function (callbackFn, initialValue = this.at(0)) {
  let startIndex = 0;
  if (initialValue === this.at(0)) {
    startIndex = 1;
  }

  let currentValue = initialValue;

  for (let i = startIndex; i < this.length; i++) {
    currentValue = callbackFn(currentValue, this.at(i));
  }

  return currentValue;
};

// INCLUDES //
Array.prototype.myIncludes = function (searchElement) {
  for (let i = 0; i < this.length; i++) {
    if (searchElement === this.at(i)) {
      return true;
    }
  }

  return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function (searchElement, startIndex) {
    if (this.length === 0) {
        return false;
    }
    if (startIndex === undefined) {
        startIndex = 0;
    }
    for(let i = startIndex; i < this.length; i++) {
        if(searchElement === this.at(i)) {
            return i;
        }
    }
    return false;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function (searchElement) {

};

// KEYS //
Object.myKeys = function (object) {

};

// VALUES //
Object.myValues = function (object) {

};

//TEST CODE//
