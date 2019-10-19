var assert = require('assert');

var app = require('../js/guild');

// describe('Boolean', function() {
//   describe('#test1', function() {
//     it('check if data is inside database', function() {
//         let query = {keys:["1","2","3"]}
//         let key = app.validation(query,"cmsc123");
//         assert.equal(key, false);
//     });
//   });
// });


let guild_ref = [{id:"cmsc123",name:"cmsc 123"}];
let promise = new Promise((resolve,reject)=>{
    resolve(guild_ref);    //returns the array of values
});

describe('Boolean', function() {
  describe('#Adding Subjects', function() {
    it('check if data is inside database', async function() {
        let p = await app.addSubject_test(promise,"cmsc123"); //calls the addSubject func
        assert.equal(p, false);  //compares the result, and done
        // assert.equal(p, true); //CMSC11  == TRUE 
    });
  });
});