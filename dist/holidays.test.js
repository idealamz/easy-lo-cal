'use strict';

var _holidays = require('./holidays');

var _holidays2 = _interopRequireDefault(_holidays);

var _hebrewDate = require('hebrew-date');

var _hebrewDate2 = _interopRequireDefault(_hebrewDate);

var _libhdate = require('libhdate');

var _libhdate2 = _interopRequireDefault(_libhdate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DAY_MS = 1000 * 60 * 60 * 24;
describe('holidays', () => {
    const nowTS = new Date().getTime();

    for (let i = 0; i < 5; i++) {
        test('holiday', () => {
            const hDate = new _hebrewDate2.default(new Date(nowTS + i * DAY_MS));
            console.log(hDate.jewishToJSON());
            // expect(holidays(hDate)).toBe(undefined)
        });
    }
});