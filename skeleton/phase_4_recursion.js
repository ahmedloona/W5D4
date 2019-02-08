function range(start, end) {
  if (start >= end) {
    return [];
  }
  return [start].concat(range(start + 1, end));
}

function sumRec(arr) {
  if (arr.length === 0){
    return 0;
  }
  return arr[0] + sumRec(arr.slice(1));
}

function exp1(base, exp){
  if(exp === 0){
    return 1;
  }
  return base * exp1(base, exp - 1)
}

function exp2(base, exp){
  if (exp === 0){
    return 1;
  }
  if(exp % 2 == 0){
    return exp2(base, exp/2) * exp2(base, exp/2);
  }
  else{
    return base * (exp2(base, (exp - 1) / 2) * exp2(base, (exp - 1) / 2));
  }
}

function fibonacci(n){
  if(n === 1){
    return [1];
  }
  else if(n === 2){
    return [1, 1]
  }
  else{
    fibs = fibonacci(n - 1)
    fibs.push(fibs[fibs.length-1] + fibs[fibs.length-2])
    return fibs
  }
}

function deepDup(arr){
  // debugger
  const ret = [];
  for(i=0;i < arr.length;i++){
    if(Array.isArray(arr[i])){
      let res = deepDup(arr[i]);
      ret.push(res);
    }
    else{
      ret.push(arr[i]);
    }
  }
  return ret;
}