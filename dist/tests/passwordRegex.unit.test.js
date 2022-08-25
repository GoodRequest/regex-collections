"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passwordRegex_1 = require("../regex/passwordRegex");
describe('testing passwordHasLoweCase regex', () => {
    it('does not include lower case letter', () => {
        const result = passwordRegex_1.passwordHasLowerCaseRegex.test('ASDASD@#');
        expect(result).toBe(false);
    });
    it('does not include lower case letter', () => {
        const result = passwordRegex_1.passwordHasLowerCaseRegex.test('123123');
        expect(result).toBe(false);
    });
    it('does include lower case letter', () => {
        const result = passwordRegex_1.passwordHasLowerCaseRegex.test('123s123FD');
        expect(result).toBe(true);
    });
});
describe('testing passwordHasUpperCase regex', () => {
    it('does not include upper case letter', () => {
        const result = passwordRegex_1.passwordHasUpperCaseRegex.test('asdasd@#');
        expect(result).toBe(false);
    });
    it('does not include upper case letter', () => {
        const result = passwordRegex_1.passwordHasUpperCaseRegex.test('123123');
        expect(result).toBe(false);
    });
    it('does include upper case letter', () => {
        const result = passwordRegex_1.passwordHasUpperCaseRegex.test('123s123FD');
        expect(result).toBe(true);
    });
});
describe('testing passwordLength regex', () => {
    it('is shorter than 8 characters', () => {
        const result = passwordRegex_1.passwordLengthRegex.test('asdas@#');
        expect(result).toBe(false);
    });
    it('password is long enough', () => {
        const result = passwordRegex_1.passwordLengthRegex.test('12312ASzz#$3');
        expect(result).toBe(true);
    });
});
describe('testing passwordHasNumber regex', () => {
    it('does not include number', () => {
        const result = passwordRegex_1.passwordHasNumberRegex.test('jSj@da');
        expect(result).toBe(false);
    });
    it('does include number', () => {
        const result = passwordRegex_1.passwordHasNumberRegex.test('SDk2MMs.');
        expect(result).toBe(true);
    });
});
describe('testing passwordHasSpecialChar regex', () => {
    it('does not include special character', () => {
        const result = passwordRegex_1.passwordHasSpecialCharRegex.test('jnasd');
        expect(result).toBe(false);
    });
    it('does include special character', () => {
        const result = passwordRegex_1.passwordHasSpecialCharRegex.test('njj.asd');
        expect(result).toBe(true);
    });
});
describe('testing passwordRegex regex', () => {
    it('password must contain at least 8 characters', () => {
        const result = passwordRegex_1.passwordRegex.test('Lopa123');
        expect(result).toBe(false);
    });
    it('password must contain at least one upperCase', () => {
        const result = passwordRegex_1.passwordRegex.test('lopaty123');
        expect(result).toBe(false);
    });
    it('password must contain at least one lowerCase', () => {
        const result = passwordRegex_1.passwordRegex.test('LOPATY123');
        expect(result).toBe(false);
    });
    it('password must contain at least one number', () => {
        const result = passwordRegex_1.passwordRegex.test('LopatyAA');
        expect(result).toBe(false);
    });
    it('valid password', () => {
        const result = passwordRegex_1.passwordRegex.test('Lopaty123');
        expect(result).toBe(true);
    });
    it('valid password', () => {
        const result = passwordRegex_1.passwordRegex.test('Lo.paty123.');
        expect(result).toBe(true);
    });
});
describe('testing passwordWithSpecialChar regex', () => {
    it('password must contain at least 8 characters', () => {
        const result = passwordRegex_1.passwordWithSpecialCharRegex.test('Lopa123');
        expect(result).toBe(false);
    });
    it('password must contain at least one upperCase', () => {
        const result = passwordRegex_1.passwordWithSpecialCharRegex.test('lopaty123');
        expect(result).toBe(false);
    });
    it('password must contain at least one lowerCase', () => {
        const result = passwordRegex_1.passwordWithSpecialCharRegex.test('LOPATY123');
        expect(result).toBe(false);
    });
    it('password must contain at least one number', () => {
        const result = passwordRegex_1.passwordWithSpecialCharRegex.test('LopatyAA');
        expect(result).toBe(false);
    });
    it('password must contain at least one special character', () => {
        const result = passwordRegex_1.passwordWithSpecialCharRegex.test('Lopaty123');
        expect(result).toBe(false);
    });
    it('valid password', () => {
        const result = passwordRegex_1.passwordWithSpecialCharRegex.test('L.opaty123');
        expect(result).toBe(true);
    });
});
//# sourceMappingURL=passwordRegex.unit.test.js.map