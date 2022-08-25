"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dateAndTimeRegex_1 = require("../regex/dateAndTimeRegex");
describe('testing date regex', () => {
    it('valid date (YYYY-DD-MM format)', () => {
        const result = dateAndTimeRegex_1.dateRegex.test('2020-12-14');
        expect(result).toBe(true);
    });
    it('invalid date (letters are not allowed)', () => {
        const result = dateAndTimeRegex_1.dateRegex.test('fafa-fa-fa');
        expect(result).toBe(false);
    });
    it('day in date cannot be greater than 31', () => {
        const result = dateAndTimeRegex_1.dateRegex.test('2020-12-32');
        expect(result).toBe(false);
    });
    it('month in date cannot be greater than 12', () => {
        const result = dateAndTimeRegex_1.dateRegex.test('2020-13-01');
        expect(result).toBe(false);
    });
});
describe('testing time regex', () => {
    it('valid time (HH:mm)', () => {
        const result = dateAndTimeRegex_1.timeRegex.test('10:15');
        expect(result).toBe(true);
    });
    it('invalid time (letters are not allowed)', () => {
        const result = dateAndTimeRegex_1.timeRegex.test('fa:fa');
        expect(result).toBe(false);
    });
    it('minutes in time cannot be greater 59', () => {
        const result = dateAndTimeRegex_1.timeRegex.test('10-60');
        expect(result).toBe(false);
    });
    it('hours in time cannot be greater than 23', () => {
        const result = dateAndTimeRegex_1.timeRegex.test('24-15');
        expect(result).toBe(false);
    });
});
describe('testing year regex', () => {
    it('valid year YYYY', () => {
        const result = dateAndTimeRegex_1.yearRegex.test('2005');
        expect(result).toBe(true);
    });
    it('invalid year, letters are not allowed', () => {
        const result = dateAndTimeRegex_1.yearRegex.test('2S15');
        expect(result).toBe(false);
    });
    it('invalid year, cannot be longer than 4 numbers', () => {
        const result = dateAndTimeRegex_1.yearRegex.test('20004');
        expect(result).toBe(false);
    });
});
describe('testing date and year regex', () => {
    it('valid year month YYYY-MM', () => {
        const result = dateAndTimeRegex_1.yearAndMonthRegex.test('2015-12');
        expect(result).toBe(true);
    });
    it('invalid year and month, letters are not allowed', () => {
        const result = dateAndTimeRegex_1.yearAndMonthRegex.test('20s5-23');
        expect(result).toBe(false);
    });
    it('invalid year and month, month cant be greater then 12', () => {
        const result = dateAndTimeRegex_1.yearAndMonthRegex.test('20s5-23');
        expect(result).toBe(false);
    });
    it('invalid year and month, its incomplete', () => {
        const result = dateAndTimeRegex_1.yearAndMonthRegex.test('201-11');
        expect(result).toBe(false);
    });
});
//# sourceMappingURL=dateAndTimeRegex.unit.test.js.map