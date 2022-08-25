"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilityRegex_1 = require("../regex/utilityRegex");
describe('testing zipCodeSK regex', () => {
    it('valid sk zip code', () => {
        const result = utilityRegex_1.zipCodeSKRegex.test('010 08');
        expect(result).toBe(true);
    });
    it('valid sk zip code', () => {
        const result = utilityRegex_1.zipCodeSKRegex.test('12345');
        expect(result).toBe(true);
    });
    it('invalid zip code, has too many characters', () => {
        const result = utilityRegex_1.zipCodeSKRegex.test('011 011');
        expect(result).toBe(false);
    });
    it('invalid sk zip code', () => {
        const result = utilityRegex_1.zipCodeSKRegex.test('05s 0s');
        expect(result).toBe(false);
    });
});
describe('testing wholeNumber regex', () => {
    it('valid whole number', () => {
        const result = utilityRegex_1.isWholeNumberRegex.test('351635561561561');
        expect(result).toBe(true);
    });
    it('invalid whole number, cant have special characters', () => {
        const result = utilityRegex_1.isWholeNumberRegex.test('54654645,54654');
        expect(result).toBe(false);
    });
    it('invalid whole number, cant have letters', () => {
        const result = utilityRegex_1.isWholeNumberRegex.test('265465as51651');
        expect(result).toBe(false);
    });
});
describe('testing decimalnumber regex', () => {
    it('valid decimal number', () => {
        const result = utilityRegex_1.isDecimalNumberRegex.test('154.12');
        expect(result).toBe(true);
    });
    it('invalid decimal number, number is whole', () => {
        const result = utilityRegex_1.isDecimalNumberRegex.test('154');
        expect(result).toBe(false);
    });
    it('invalid decimal number, other special characters except dot "." cannot be used', () => {
        const result = utilityRegex_1.isDecimalNumberRegex.test('154,14');
        expect(result).toBe(false);
    });
    it('invalid decimal number, letters are not allowed', () => {
        const result = utilityRegex_1.isDecimalNumberRegex.test('154s.14');
        expect(result).toBe(false);
    });
});
//# sourceMappingURL=utilityRegex.unit.test.js.map