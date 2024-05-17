const countDown = require('./index.js');

test ('countDown from some number that bigger than 0 to 1', () => {
    const result = countDown(0)
    expect(result).toBe(undefined);
});

describe("tests for countdown function", () => {
    it("should operate correctly with number that bigger than 0", () => {
        expect(countDown(3)).toBe(console.log(`0`))
    }),
    it("should operate correctly with invalid number", () => {
        expect(countDown(0)).toBe(console.log(`Число 0 меньше 1`))
    }),
    it("should operate correctly with a blank", () => {
        expect(countDown('')).toBe(console.log(`Введите число`))
    })
})
