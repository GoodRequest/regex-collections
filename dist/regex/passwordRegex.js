"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordHasSpecialCharRegex = exports.passwordHasNumberRegex = exports.passwordHasLowerCaseRegex = exports.passwordHasUpperCaseRegex = exports.passwordLengthRegex = exports.passwordWithSpecialCharRegex = exports.passwordRegex = void 0;
/**
 * Validate password with rues
 * - min length is 8 characters: (?=.{8,})
 *	- contains at least one lowercase letter: (?=.*[a-z]+)
 *	- contains at least one uppercase letter: (?=.*[A-Z]+)
 *	- contains at least one number: (?=.*\d+)
 */
exports.passwordRegex = /(?=.{8,})^(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*\d+)/;
/**
 * Validate password with rues
 * - min length is 8 characters: (?=.{8,})
 *	- contains at least one lowercase letter: (?=.*[a-z]+)
 *	- contains at least one uppercase letter: (?=.*[A-Z]+)
 *	- contains at least one number: (?=.*\d+)
 *  - contains at least one special characted: (?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])
 */
exports.passwordWithSpecialCharRegex = /(?=.{8,})^(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*\d+)(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])/;
exports.passwordLengthRegex = /(?=.{8,})/;
exports.passwordHasUpperCaseRegex = /(?=.*[A-Z]+)/;
exports.passwordHasLowerCaseRegex = /(?=.*[a-z]+)/;
exports.passwordHasNumberRegex = /(?=.*\d+)/;
exports.passwordHasSpecialCharRegex = /(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])/;
//# sourceMappingURL=passwordRegex.js.map