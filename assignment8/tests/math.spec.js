const { sum } = require("../math");

describe("Math Module", () => {
    it('Should sum up numbers', () => {
        expect(sum(1, 2, 3, 4, 5)).toEqual(15);
    });
});