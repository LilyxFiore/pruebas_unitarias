function toCelsius(array){
  if (array == undefined){
    return "Error";
  }
  return array.map(function(e){
    return parseInt((e-32)*(5/9));
  })
}

if(typeof exports !== 'undefined') {
    exports.toCelsius = toCelsius;
}
