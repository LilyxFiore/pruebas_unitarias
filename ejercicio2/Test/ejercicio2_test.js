var assert = require('assert');
var id = require('../ejercicio2.js')

describe('suma', function(){
    it('should return the sum of 2 array', function(){
      assert.deepEqual(id.suma([1,2,3], [2,3,4]),[3,5,7])
    })
    it('should return error if one of 2 parameter is missing', function(){
      assert.deepEqual(id.suma([2,3,4]),"Error")
    })
})
