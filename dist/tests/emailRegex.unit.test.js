"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const emailRegex_1 = require("../regex/emailRegex");
describe('testing our email regex', () => {
    it('valid email mysite@ourearth.com', () => {
        const result = emailRegex_1.emailRegex.test('mysite@ourearth.com');
        expect(result).toBe(true);
    });
    it('valid email my.ownsite@ourearth.org', () => {
        const result = emailRegex_1.emailRegex.test('my.ownsite@ourearth.org');
        expect(result).toBe(true);
    });
    it('valid email mysite@you.me.net', () => {
        const result = emailRegex_1.emailRegex.test('mysite@you.me.net');
        expect(result).toBe(true);
    });
    it('valid email firstname-lastname@example.com', () => {
        const result = emailRegex_1.emailRegex.test('mysite@you.me.net');
        expect(result).toBe(true);
    });
    it('valid email 1234567890@example.com', () => {
        const result = emailRegex_1.emailRegex.test('1234567890@example.com');
        expect(result).toBe(true);
    });
    it('invalid email mysite@.com.my, top level domain can no start with dot "."', () => {
        const result = emailRegex_1.emailRegex.test('mysite@.com.my');
        expect(result).toBe(false);
    });
    it('invalid email @you.me.net, no character before @', () => {
        const result = emailRegex_1.emailRegex.test('@you.me.net');
        expect(result).toBe(false);
    });
    it('invalid email mysite123@gmail.b, tld can not be one character', () => {
        const result = emailRegex_1.emailRegex.test('mysite123@gmail.b');
        expect(result).toBe(false);
    });
    it('invalid email .mysite@mysite.org, an email should no be started with dot "."', () => {
        const result = emailRegex_1.emailRegex.test('.mysite@mysite.org');
        expect(result).toBe(false);
    });
    it('invalid email mysite()*@gmail.com, an email should contain only characters, digits, underscore or dash', () => {
        const result = emailRegex_1.emailRegex.test('mysite()*@gmail.com');
        expect(result).toBe(false);
    });
    it('invalid email mysite..1234@yahoo.com, double dots are not allowed', () => {
        const result = emailRegex_1.emailRegex.test('mysite..1234@yahoo.com');
        expect(result).toBe(false);
    });
    it('invalid email email@[123.123.123.123], top level domain is invalid', () => {
        const result = emailRegex_1.emailRegex.test('email@[123.123.123.123]');
        expect(result).toBe(false);
    });
});
//# sourceMappingURL=emailRegex.unit.test.js.map