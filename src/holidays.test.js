import holidays from './holidays'
import HDate from 'hebrew-date'
import libhdate from 'libhdate'

describe('tests placeholder', () => {
    test('nothing for now')
    // TODO: build an appropriate tested data and compare against it.
})

// const DAY_MS = 1000 * 60 * 60 * 24

// const getHolidayName = (LHD, holiday) => {
//     return LHD.getHolydayName(holiday) === 'none' ? undefined : LHD.getHolydayName(holiday)
// }

// describe('holidays', () => {
//     const nowTS = (new Date()).getTime()

//     for (let i = 0; i < 365; i ++) {
//         test('holiday', ()=>{
//             const baseDate = new Date(nowTS + i * DAY_MS)
//             const hDate = new HDate(baseDate)
//             const HD = new libhdate()
//             HD.setGdate(baseDate.getDate(), baseDate.getMonth() + 1, baseDate.getFullYear())
//             const holiday = HD.getHolyday(HD)
//             // console.log(HD.getHolydayName(holiday))
//             // expect(hDate.jewishToJSON())
//             expect(holidays(hDate)).toBe(getHolidayName(HD, holiday))
//         })
//     }
// })