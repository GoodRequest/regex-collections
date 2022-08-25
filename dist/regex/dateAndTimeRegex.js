"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeRegex = exports.dateRegex = exports.yearAndMonthRegex = exports.yearRegex = void 0;
// validate YYYY year
exports.yearRegex = /^(\d{4})$/;
// validate YYYY-MM date format
exports.yearAndMonthRegex = /^(\d{4})[-]((0[1-9])|(1[012]))/;
// validate YYYY-MM-DD date format
exports.dateRegex = /^(\d{4})[-]((0[1-9])|(1[012]))[-]((0[1-9])|([12][0-9])|(3[01]))$/;
// validate HH:mm time format
exports.timeRegex = /^(?:[01]\d|2[0-3]):(?:[0-5]\d)$/;
//# sourceMappingURL=dateAndTimeRegex.js.map