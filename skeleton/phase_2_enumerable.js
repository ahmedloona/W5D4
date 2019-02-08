Array.prototype.myEach = function (callback) {
  for (i = 0; i < this.length; i++) {
    callback(this[i]);
  }
}

Array.prototype.myMap = function (callback) {
  const result = [];
  this.myEach((el) => {
    result.push(callback(el))
  });
  return result;
}

Array.prototype.myReduce = function (callback, initialValue = this[0]) {
  let start;
  let acc;
  if (initialValue) {
    acc = initialValue;
    start = 0;
  }
  else {
    acc = this[0];
    start = 1;
  }
  this.slice(start).myEach((el) => {
    acc = callback(acc, el);
  });
  return acc;
}