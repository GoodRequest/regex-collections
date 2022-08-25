"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socialLinkIGRegex_1 = require("../regex/socialLinkIGRegex");
describe('testing socialLinkIG regex', () => {
    it('invalid ig social link', () => {
        const result = socialLinkIGRegex_1.socialLinkIGRegex.test('httSSps://www.instagram.com/kiwi__ii/');
        expect(result).toBe(false);
    });
    it('invalid ig social link', () => {
        const result = socialLinkIGRegex_1.socialLinkIGRegex.test('www.instagram.com');
        expect(result).toBe(false);
    });
    it('valid ig social link', () => {
        const result = socialLinkIGRegex_1.socialLinkIGRegex.test('www.instagram.com/kiwi__ii/');
        expect(result).toBe(true);
    });
    it('valid ig social link', () => {
        const result = socialLinkIGRegex_1.socialLinkIGRegex.test('https://www.instagram.com/kiwi__ii/');
        expect(result).toBe(true);
    });
});
//# sourceMappingURL=socialLinkIGRegex.unit.test.js.map