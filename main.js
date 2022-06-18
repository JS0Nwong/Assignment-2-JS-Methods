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
    return false;
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
Array.prototype.myReduce = function (callbackFn, initialValue) {
  let previousValue = this.at(0);
  let currentValue = this.at(1);
  let currentIndex = 1;

  if (initialValue !== undefined) {
    previousValue = initialValue;
    currentValue = this.at(0);
    currentIndex = 0;
  }

  for (currentIndex; currentIndex < this.length; currentIndex++) {
    previousValue = callbackFn(previousValue, currentValue, currentIndex);
    currentValue = this.at(currentIndex + 1);
  }

  return previousValue;
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
    return -1;
  }
  if (startIndex === undefined) {
    startIndex = 0;
  }
  for (let i = startIndex; i < this.length; i++) {
    if (searchElement === this.at(i)) {
      return i;
    }
  }
  return -1;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function (searchElement, fromIndex) {
  if (this.length === 0) {
    return -1;
  }
  if (fromIndex === undefined || fromIndex === -1) {
    fromIndex = this.length;
  } else if (fromIndex < -1 && fromIndex + this.length >= 0) {
    fromIndex = fromIndex + this.length;
  }
  for (let i = fromIndex; i >= 0; i--) {
    if (searchElement === this.at(i)) {
      return i;
    }
  }
  return -1;
};

// KEYS //
Object.myKeys = function (object) {
  let newArray = [];
  let j = 0;
  if (object.length != undefined) {
    for (const i in object) {
      if (j < object.length) {
        newArray[j] = i;
        j = j + 1;
      }
    }
    return newArray;
  }
  for (const i in object) {
    newArray[j] = i;
    j = j + 1;
  }
  return newArray;
};

// VALUES //
Object.myValues = function (object) {
  let newArray = [];
  let j = 0;
  if (object.length != undefined) {
    for (const i in object) {
      if (j < object.length) {
        newArray[j] = object[i];
        j = j + 1;
      }
    }
    return newArray;
  }
  for (const i in object) {
    newArray[j] = object[i];
    j = j + 1;
  }
  return newArray;
};

//TEST CODE//
