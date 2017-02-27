function hola(idioma){
  switch(idioma){
    case "de": return "Hallo Welt!";
    case "en": return "Hello World!";
    case "es": return "¡Hola Mundo!";
    default: return "Parámetro no válido";
  }
}

if(typeof exports !== 'undefined') {
    exports.hola = hola;
}
