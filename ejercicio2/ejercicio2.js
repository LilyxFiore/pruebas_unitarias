function suma(array1,array2){
  if(array1==undefined || array2==undefined){
    return "Error";
  }
  return array1.map(function(e,i){
    return e + array2[i];
  });
}

if(typeof exports !== 'undefined') {
    exports.suma = suma;
}
