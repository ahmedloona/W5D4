Array.prototype.uniq = function() {
  console.log(this);

  const hash = {};
  const result = [];
  for (i = 0; i < this.length; i++) {
    if (!hash[this[i]]) {
      result.push(this[i]);
    }
    hash[this[i]] = true;
  } 
  return result;
}

Array.prototype.twoSum = function () {
  // console.log(this);

  const hash = {};
  const result = [];
  for (i = 0; i < this.length; i++) {
    const inverse = hash[-this[i]];
    if (inverse) {
      result.push([inverse, i]);
    }
    else{
      hash[this[i]] = i;
    }
  }
  return result;
}

Array.prototype.transpose = function (){
  const ret = [];
  for (i=0; i < this[0].length; i++){
    ret.push([])
  }
  for (i=0;i<this.length;i++){
    for(j=0;j<this[0].length;j++){
      ret[j][i] = this[i][j];
    }
  }
  return ret;
}



