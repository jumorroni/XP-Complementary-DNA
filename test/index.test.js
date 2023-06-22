const { complementDna } = require("../src/index.js");

describe('', () => {

    test("Should return 'T' when the function receives 'A'", () => {
        expect(complementDna()).toBe('T');
    });

});

