import JTimes from 'jewish-times' // TODO: create it!


/* 
JTimes usage:

const offset = {
    base: JTimes.CONS.SOLAR_SUNRISE,
    solarMinutes: -40,
    minutes: 20,
    solarHours: 7,
    hours: 10
}
const date = new HDate(5778, 1, 14)
const coordinates = {lat: 31.87005, long: 34.904858}
const t = JTimes(offset, date, coordinates)
*/
const TIMES = {
    MIDDAY: 'MIDDAY',
    SOLAR_MIDDAY: 'SOLAR_MIDDAY',
    SUNSET: 'SUNSET',
    SUNRISE: 'SUNRISE',
    MIDNIGHT: 'MIDNIGHT',
    SOLAR_MIDNIGHT: 'SOLAR_MIDNIGHT'
}

// const HADLAKAT_NEROT = {
//     key: 'HADLAKAT_NEROT',
//     time: {
//         base: TIMES.SOLAR_SUNSET,
//         solarMinutes: -20
//     }
// }

// const END_OF_THE_HOLIDAY = {
//     key: 'END_OF_THE_HOLIDAY',
//     time: {
//         base: TIMES.SOLAR_SUNSET,
//         solarMinutes: 20      
//     }
// }

const EVENTS = {
    BDIKAT_CHAMETZH: () => {
        
        return {
            key: 'BDIKAT_CHAMETZH',
            text: ``,
            start: { base: TIMES.MIDNIGHT }
        }
    },
    SOF_ZMAN_ACHILAT_CHAMETZH: () => ({
        key: 'SOF_ZMAN_ACHILAT_CHAMETZH',
        time: {
            base: TIMES.SOLAR_MIDDAY,
            solarHours: -2
        }
    }),
    ZMAN_BEOUR_CHAMETZH: () => ({
        key: 'ZMAN_BEOUR_CHAMETZH',
        time: {
            base: TIMES.SOLAR_MIDDAY,
            solarHours: -1
        }
    }),
    EREV_PESACH_1: () => [],
    PESACH_1: () => [],
    PEASACH_1_YT2_GALOUYOT: () => [],
    CHOL_HAMOED_PESACH: () => [],
    EREV_PESACH_2: () => [],
    PESACH_7: () => [],
    PEASACH_7_YT2_GALOUYOT: () => [],
    DAY_AFTER_PESACH_7: () => [
        {
            key: 'ISRU_HAG'
        }, {
            key: 'MEYMOONA'
        }
    ]
}

export default EVENTS