
/**
 * Validate password with rues
 * - min length is 8 characters: (?=.{8,})
 *	- contains at least one lowercase letter: (?=.*[a-z]+)
 *	- contains at least one uppercase letter: (?=.*[A-Z]+)
 *	- contains at least one number: (?=.*\d+)
 */
export const passwordRegex = /(?=.{8,})^(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*\d+)/
/**
 * Validate password with rues
 * - min length is 8 characters: (?=.{8,})
 *	- contains at least one lowercase letter: (?=.*[a-z]+)
 *	- contains at least one uppercase letter: (?=.*[A-Z]+)
 *	- contains at least one number: (?=.*\d+)
 *  - contains at least one special characted: (?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])
 */
export const passwordWithSpecialCharRegex = /(?=.{8,})^(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*\d+)(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])/
export const passwordLengthRegex = /(?=.{8,})/
export const passwordHasUpperCaseRegex = /(?=.*[A-Z]+)/
export const passwordHasLowerCaseRegex = /(?=.*[a-z]+)/
export const passwordHasNumberRegex = /(?=.*\d+)/
export const passwordHasSpecialCharRegex = /(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])/