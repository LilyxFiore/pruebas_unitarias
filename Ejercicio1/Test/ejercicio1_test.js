var assert = require('assert');
var id = require('../ejercicio1.js')

describe('hola', function(){
    it('should return in spanish', function(){
      assert.equal(id.hola("es"),"¡Hola Mundo!")
    })

    it('should return in deutsche', function(){
      assert.equal(id.hola("de"),"Hallo Welt!")
    })

    it('should return in english', function(){
      assert.equal(id.hola("en"),"Hello World!")
    })
    it('should return error if parameter invalid', function(){
      assert.equal(id.hola("uk"),"Parámetro no válido")
    })
})
