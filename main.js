// MAP //
Array.prototype.myMap = function(callbackFn, args) {
    if(this.length === 0) {
        return "Array is empty";
    }
    let newArray = [];
    for(let i = 0; i < this.length; i++) {
        newArray.push(callbackFn(this[i], args));
    }
    return newArray;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn, args) {
};

// SOME //
Array.prototype.mySome = function(callbackFn) {

};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {

};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {

};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {

};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {

};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {

};

// KEYS //
Object.myKeys = function(object) {

};

// VALUES //
Object.myValues = function(object) {

};

//TEST CODE//