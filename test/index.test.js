const { complementDna } = require("../src/index.js");

describe('', () => {

    test("Should return 'T' when the function receives 'A'", () => {
        expect(complementDna('A')).toBe('T');
    });

    test("Should return 'G' when the function receives 'C'", () => {
        expect(complementDna('C')).toBe('G');
    });

});

