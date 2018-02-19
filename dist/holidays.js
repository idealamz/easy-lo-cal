'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _hebrewDate = require('hebrew-date');

var _hebrewDate2 = _interopRequireDefault(_hebrewDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const isMonthLeapt = (year, month) => {
    return (0, _hebrewDate.jewishMonthDaysCount)(year, 10) > 29;
};

const holidays = {
    1: /* nisan */{
        13: 'orLe14',
        14: 'erevPesach',
        15: 'pesach',
        16: (date, diaspora) => diaspora ? 'yomTov2galooyot' : 'holHamoedPesach',
        // TODO: it's not clear which yomTov2, you need to distinguish between all the holidays.
        // TODO: no spacial mention for the yom tov day number, use something like א' חוה"מ פסח
        17: 'holHamoedPesach',
        18: () => holidays[1][17],
        19: () => holidays[1][17],
        20: ['holHamoedPesach', 'erevPesachHagSehni'],
        21: ['pesachHagSehni'],
        21: (date, diaspora) => diaspora ? 'yomTov2galooyot' : ['isruChag', 'meymouna'],
        26: date => date.getDay() === 4 ? 'yomHashoaa' : undefined,
        // TODO: brought forward, add dedicated event key for this.
        27: date => date.getDay() != 5 && date.getDay() != 0 ? 'yomHashoaa' : undefined,
        28: date => date.getDay() === 1 ? 'yomHashoaa' : undefined
        // TODO: postponed, add dedicated event key for this.
    },
    2: /* Iyaar */{
        2: date => date.getDay() === 3 ? 'yomHazikaron' : undefined,
        // TODO: brought forward, add dedicated event key for this.
        3: date => {
            switch (date.getDay()) {
                case 3:
                    return 'yomHazikaron'; // TODO: brought forward
                case 4:
                    return 'yomHaatzmaoot'; // TODO: brought forward
            }
            return undefined;
        },
        4: date => {
            switch (date.getDay()) {
                case 4:
                    return 'yomHaatzmaoot'; // TODO: brought forward
                case 1:case 2:case 3:case 6:
                    return 'yomHazikaron';
            }
        },
        5: date => {
            switch (date.getDay()) {
                case 1:
                    return 'yomHazikaron'; // TODO: postponed
                case 0:case 2:case 3:case 4:
                    return 'yomHaatzmaoot';
            }
            return undefined;
        },
        6: date => date.getDay() === 2 ? 'yomHaatzmaoot' : undefined, // TODO: postponed
        13: 'erevPesachSheniIyar', // TODO: maybe we want to automate all the "erev"
        14: 'pesachSheniIyar',
        17: 'erevLagBaomer',
        18: 'lagBaomer',
        27: date => date.getDay() === 4 ? 'yomYeroshalaimEventsOnly' : undefined, // TODO: check the names. brought forward
        28: date => {
            switch (date.getDay()) {
                case 5:case 0:
                    return 'yomYeroshalaimHalelDay'; // TODO: check the names
            }
            return 'yomYeroshalaim';
        },
        29: date => date.getDay() === 0 ? 'yomYeroshalaimEventsOnly' : undefined
    },
    3: /* Sivan */{
        6: 'shavout'
    },
    4: /* Tamuz */{
        17: 'tamuz17'
    },
    5: /* Av */{
        9: 'av9', // the name was "av7" from some reason.
        15: 'av15'
    },
    6: /* Elol */{
        29: 'erevRoshHashana'
    },
    7: /* Tishrey */{
        1: 'roshHashana1',
        2: 'roshHashana2',
        3: date => date.getDay() !== 6 ? 'gedaliaFast' : undefined,
        4: date => date.getDay() === 0 ? 'gedaliaFast' : undefined, // TODO: postponed
        9: 'erevKipur',
        10: 'kipur',
        14: 'erevSucot',
        15: 'sucot',
        16: (date, diaspora) => diaspora ? 'yomTov2galooyot' : () => holidays[7][17], // TODO: yomTov2galooyot - should we make it automatically?
        17: 'holHamoedSucot',
        18: () => holidays[7][17],
        19: () => holidays[7][17],
        20: () => holidays[7][17],
        21: 'hoshanaRaba',
        22: 'shminiAtzeret',
        23: (date, diaspora) => diaspora ? 'yomTov2galooyot' : 'isruChag' // TODO: yomTov2galooyot
    },
    9: /* Kislev */{
        24: 'erevHanuka',
        25: 'hanokaCandle1',
        26: 'hanokaCandle2',
        27: 'hanokaCandle3',
        28: 'hanokaCandle4',
        29: 'hanokaCandle5',
        30: 'hanokaCandle6' // in some cases Kislev is only 29 days so we will need to handle hanokaCandle6 in the next month
    },
    10: /* Tevet */{
        1: date => isMonthLeapt(date.jewishToJSON().year, 9) ? 'hanokaCandle7' : 'hanokaCandle6',
        2: date => isMonthLeapt(date.jewishToJSON().year, 9) ? 'hanokaCandle8' : 'hanokaCandle7',
        3: date => isMonthLeapt(date.jewishToJSON().year, 9) ? undefined : 'hanokaCandle8',
        10: 'tevet10'
    },
    11: /* Shvat */{
        14: 'erevShvat15',
        15: 'shvat15'
    },
    12: /* Adar / Adar 1 */{
        11: date => (0, _hebrewDate.jewishIsLeapt)(date.jewishToJSON().year) ? undefined : () => holidays[13][11], // TODO: brought forward
        13: date => (0, _hebrewDate.jewishIsLeapt)(date.jewishToJSON().year) ? 'erevPurimKatan' : () => holidays[13][13],
        14: date => (0, _hebrewDate.jewishIsLeapt)(date.jewishToJSON().year) ? 'purimKatan' : () => holidays[13][14],
        15: date => (0, _hebrewDate.jewishIsLeapt)(date.jewishToJSON().year) ? 'shushanPurimKatan' : () => holidays[13][15]
    },
    13: /* Adar 2 */{
        11: date => date.getDay() === 4 ? 'esterFast' : undefined, // brought forward
        13: date => {
            if (date.getDay() != 6) {
                return ['esterFast', 'erevPurim'];
            }
            return 'erevPurim';
        },
        14: 'purim',
        15: date => date.getDay() != 6 ? 'shushanPurim' : 'shushanPurimMeshulash', // TODO: shushanPurimMeshulash is a new key
        16: date => date.getDay() === 0 ? 'sundayAfterShushanPurimMeshulash' : undefined // TODO: how should we call it?
    }
};

exports.default = (date, diaspora) => {
    // TODO: check for the next day and previous day holidays, sometimes that information is relevant.
    // TODO: add the Parasha of the week
    // TODO: add the Haftara
    // TODO: add sefirat Haaomer
    // TODO: add 
    const dateAsJSON = date.jewishToJSON();
    let h = holidays[dateAsJSON.month][dateAsJSON.day];
    while (typeof h === 'function') {
        h = h(date, diaspora);
    }
    return h;
};