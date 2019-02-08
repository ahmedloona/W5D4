
Array.prototype.bubbleSort = function() {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (i=0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]){
        let temp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = temp;
        sorted = false
      }
    }
  }
  return this;
}

String.prototype.substrings = function() {
  const result = [];
  for ( i=0 ; i < this.length; i++) {
    for (j=i + 1; j < this.length; j++) {
      result.push(this.slice(i, j))
    }
  }
  return result;
}
