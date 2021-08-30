const add = require('../add')
const substract = require('../substract')


test("adds two numbers", () => {
    expect(add(2,2)).toBe(4);
});
test("sub two numbers", () => {
    expect(substract(5,3)).toBe(2)
})
