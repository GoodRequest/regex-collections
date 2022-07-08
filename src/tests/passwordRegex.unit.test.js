import { passwordHasLowercase, passwordHasUppercase, passwordRegex, passwordLength, passwordHasNumber, passwordRegexWithSpecialChar, passwordHasSpecialChar } from '../regex/passwordRegex'

describe('testing passwordHasLowecase regex', () => {
    it('does not include lower case letter', () => {
        const result = passwordHasLowercase.test('ASDASD@#')
        expect(result).toBe(false)
    })
    it ('does not include lower case letter', () => {
        const result = passwordHasLowercase.test('123123')
        expect(result).toBe(false)
    })
    it ('does include lower case letter', () => {
        const result = passwordHasLowercase.test('123s123FD')
        expect(result).toBe(true)
    })
})

describe('testing passwordHasUppercase regex', () => {
    it('does not include upper case letter', () => {
        const result = passwordHasUppercase.test('asdasd@#')
        expect(result).toBe(false)
    })
    it ('does not include upper case letter', () => {
        const result = passwordHasUppercase.test('123123')
        expect(result).toBe(false)
    })
    it ('does include upper case letter', () => {
        const result = passwordHasUppercase.test('123s123FD')
        expect(result).toBe(true)
    })
})

describe('testing passwordLength regex', () => {
    it('is shorter than 8 characters', () => {
        const result = passwordLength.test('asdas@#')
        expect(result).toBe(false)
    })
    it ('password is long enough', () => {
        const result = passwordLength.test('12312ASzz#$3')
        expect(result).toBe(true)
    })
})

describe('testing passwordHasNumber regex', () => {
    it('does not include number', () => {
        const result = passwordHasNumber.test('jSj@da')
        expect(result).toBe(false)
    })
    it('does include number', () => {
        const result = passwordHasNumber.test('SDk2MMs.')
        expect(result).toBe(true)
    })
})

describe('testing passwordHasSpecialChar regex', () => {
    it('does not include special character', () => {
        const result = passwordHasSpecialChar.test('jnasd')
        expect(result).toBe(false)
    })
    it('does include special character', () => {
        const result = passwordHasSpecialChar.test('njj.asd')
        expect(result).toBe(true)
    })
})

describe('testing passwordRegex regex', () => {
    it('password must contain at least 8 characters', () => {
        const result = passwordRegex.test('Lopa123')
        expect(result).toBe(false)
    })
    it('password must contain at least one upperCase', () => {
        const result = passwordRegex.test('lopaty123')
        expect(result).toBe(false)
    })
    it('password must contain at least one lowerCase', () => {
        const result = passwordRegex.test('LOPATY123')
        expect(result).toBe(false)
    })
    it('password must contain at least one number', () => {
        const result = passwordRegex.test('LopatyAA')
        expect(result).toBe(false)
    })
    it('valid password', () => {
        const result = passwordRegex.test('Lopaty123')
        expect(result).toBe(true)
    })
    it('valid password', () => {
        const result = passwordRegex.test('Lo.paty123.')
        expect(result).toBe(true)
    })
})

describe('testing passwordRegexWithSpecialChar regex', () => {
    it('password must contain at least 8 characters', () => {
        const result = passwordRegexWithSpecialChar.test('Lopa123')
        expect(result).toBe(false)
    })
    it('password must contain at least one upperCase', () => {
        const result = passwordRegexWithSpecialChar.test('lopaty123')
        expect(result).toBe(false)
    })
    it('password must contain at least one lowerCase', () => {
        const result = passwordRegexWithSpecialChar.test('LOPATY123')
        expect(result).toBe(false)
    })
    it('password must contain at least one number', () => {
        const result = passwordRegexWithSpecialChar.test('LopatyAA')
        expect(result).toBe(false)
    })
    it('password must contain at least one special character', () => {
        const result = passwordRegexWithSpecialChar.test('Lopaty123')
        expect(result).toBe(false)
    })
    it('valid password', () => {
        const result = passwordRegexWithSpecialChar.test('L.opaty123')
        expect(result).toBe(true)
    })
})

