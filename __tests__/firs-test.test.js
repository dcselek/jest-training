/* ****UNIT TESTING**** */

// const add = require('../add')
// const substract = require('../substract')


// test("adds two numbers", () => {
//     expect(add(2,2)).toBe(4);
// });
// test("sub two numbers", () => {
//     expect(substract(5,3)).toBe(2)
// })

/* INTEGRATION TESTING */
const func = require('../forgotPassword')

describe('forgot password', () => {
    test("should do something before the forgotPassword function gets called", () => {
        expect(func.doSomethingBefore()).toBeFalsy();
    });

    //Then

    test("forgotPassword should return true", () => {
        expect(func.forgotPassword()).toBeTruthy();
    })
})
