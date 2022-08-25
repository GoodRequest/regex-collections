/**
 * Validate password with rues
 * - min length is 8 characters: (?=.{8,})
 *	- contains at least one lowercase letter: (?=.*[a-z]+)
 *	- contains at least one uppercase letter: (?=.*[A-Z]+)
 *	- contains at least one number: (?=.*\d+)
 */
export const passwordRegex: RegExp;
/**
 * Validate password with rues
 * - min length is 8 characters: (?=.{8,})
 *	- contains at least one lowercase letter: (?=.*[a-z]+)
 *	- contains at least one uppercase letter: (?=.*[A-Z]+)
 *	- contains at least one number: (?=.*\d+)
 *  - contains at least one special characted: (?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])
 */
export const passwordWithSpecialCharRegex: RegExp;
export const passwordLengthRegex: RegExp;
export const passwordHasUpperCaseRegex: RegExp;
export const passwordHasLowerCaseRegex: RegExp;
export const passwordHasNumberRegex: RegExp;
export const passwordHasSpecialCharRegex: RegExp;
