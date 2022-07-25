import { socialLinkIGRegex } from '../regex/socialLinkIGRegex'

describe('testing socialLinkIG regex', () => {
    it('invalid ig social link', () => {
        const result = socialLinkIGRegex.test('httSSps://www.instagram.com/kiwi__ii/')
        expect(result).toBe(false)
    })
    it('invalid ig social link', () => {
        const result = socialLinkIGRegex.test('www.instagram.com')
        expect(result).toBe(false)
    })
    it('valid ig social link', () => {
        const result = socialLinkIGRegex.test('www.instagram.com/kiwi__ii/')
        expect(result).toBe(true)
    })
    it('valid ig social link', () => {
        const result = socialLinkIGRegex.test('https://www.instagram.com/kiwi__ii/')
        expect(result).toBe(true)
    })
}) 