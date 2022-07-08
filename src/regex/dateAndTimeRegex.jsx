// validate YYYY year
export const yearRegex = /^(\d{4})/
// validate YYYY-MM date format
export const yearAndMonthRegex = /^(\d{4})[-]((0[1-9])|(1[012]))/
// validate YYYY-MM-DD date format
export const dateRegex = /^(\d{4})[-]((0[1-9])|(1[012]))[-]((0[1-9])|([12][0-9])|(3[01]))$/
// validate HH:mm time format
export const timeRegex = /^(?:[01]\d|2[0-3]):(?:[0-5]\d)$/