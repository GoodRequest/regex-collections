import { socialLinkFBRegex, socialLinkFBRegex2 } from '../regex/socialLinkFBRegex'

describe('testing socialLinkFB regex', () => {
    it('invalid fb social link', () => {
        const result = socialLinkFBRegex.test('https://www.facebook.com//profile.php?id=100020272173406')
        expect(result).toBe(false)
    })
    it('invalid fb social link', () => {
        const result = socialLinkFBRegex.test('http://www.facebook.com/sfxsss')
        expect(result).toBe(false)
    })
    it('invalid fb social link', () => {
        const result = socialLinkFBRegex.test('https://www.facebook.com')
        expect(result).toBe(false)
    })
    it('valid fb social link', () => {
        const result = socialLinkFBRegex.test('https://www.facebook.com/profile.php?id=100020272173406')
        expect(result).toBe(true)
    })
})

describe('testing socialLinkFB regex2', () => {
    it('invalid fb social link', () => {
        const result = socialLinkFBRegex2.test('https://www.facebook.com//profile.php?id=100020272173406')
        expect(result).toBe(false)
    })
    it('invalid fb social link', () => {
        const result = socialLinkFBRegex2.test('http://www.facebook.com/sfxsss')
        expect(result).toBe(false)
    })
    it('invalid fb social link', () => {
        const result = socialLinkFBRegex2.test('https://www.facebook.com')
        expect(result).toBe(false)
    })
    it('valid fb social link', () => {
        const result = socialLinkFBRegex2.test('https://www.facebook.com/profile.php?id=100020272173406')
        expect(result).toBe(true)
    })
})