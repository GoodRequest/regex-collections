import { dateRegex, timeRegex, yearRegex, yearAndMonthRegex } from '../regex/dateAndTimeRegex'

describe('testing date regex', () => {
	it('valid date (YYYY-DD-MM format)', () => {
		const result = dateRegex.test('2020-12-14')
		expect(result).toBe(true)
	})

	it('invalid date (letters are not allowed)', () => {
		const result = dateRegex.test('fafa-fa-fa')
		expect(result).toBe(false)
	})

	it('day in date cannot be greater than 31', () => {
		const result = dateRegex.test('2020-12-32')
		expect(result).toBe(false)
	})

	it('month in date cannot be greater than 12', () => {
		const result = dateRegex.test('2020-13-01')
		expect(result).toBe(false)
	})
})

describe('testing time regex', () => {
	it('valid time (HH:mm)', () => {
		const result = timeRegex.test('10:15')
		expect(result).toBe(true)
	})

	it('invalid time (letters are not allowed)', () => {
		const result = timeRegex.test('fa:fa')
		expect(result).toBe(false)
	})

	it('minutes in time cannot be greater 59', () => {
		const result = timeRegex.test('10-60')
		expect(result).toBe(false)
	})

	it('hours in time cannot be greater than 23', () => {
		const result = timeRegex.test('24-15')
		expect(result).toBe(false)
	})
})

describe('testing year regex', () => {
    it('valid year YYYY', () => {
        const result = yearRegex.test('2005')
        expect(result).toBe(true)
    })
    it('invalid year, letters are not allowed', () => {
        const result = yearRegex.test('2S15')
        expect(result).toBe(false)
    })
    it('invalid year, cannot be longer than 4 numbers', () => {
        const result = yearRegex.test('20004')
        expect(result).toBe(false)
    })
})

describe('testing date and year regex', () => {
    it('valid year month YYYY-MM', () => {
        const result = yearAndMonthRegex.test('2015-12')
        expect(result).toBe(true)
    })
    it('invalid year and month, letters are not allowed', () => {
        const result = yearAndMonthRegex.test('20s5-23')
        expect(result).toBe(false)
    })
    it('invalid year and month, month cant be greater then 12', () => {
        const result = yearAndMonthRegex.test('20s5-23')
        expect(result).toBe(false)
    })
    it('invalid year and month, its incomplete', () => {
        const result = yearAndMonthRegex.test('201-11')
        expect(result).toBe(false)
    })
})