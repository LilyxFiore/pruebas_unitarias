var assert = require('assert');
var id = require('../ejercicio3.js')

describe('toCelsius', function(){
    it('should return the sum of 2 array', function(){
      assert.deepEqual(id.toCelsius([70,85,90]),[21,29,32])
    })
    it('should return error if one parameter is missing', function(){
      assert.deepEqual(id.toCelsius(),"Error")
    })
})
