import babylonJS from './index'

describe('translate', () => {
    test('key doesn\'t exist', () => {
        const t = babylonJS({})
        const key = 'Alians'

        // TODO: how should I spy on native functions?
        // jest.spyOn(global.console, 'warn')
        // expect(global.console.warn).toBeCalled()
        expect(t(key)).toBe(`!_MISSING_TRANSLATION_${key}_!`)
    })

    test('simple translation', () => {
        const t = babylonJS({'key': 'value'})
        expect(t('key')).toBe('value')
    })

    test('translation with variables', () => {
        const t = babylonJS({'birth-date': 'born at: <%= date %>, still alive'})
        expect(t('birth-date', {'date': 1985})).toBe('born at: 1985, still alive')
    })

    test('complicated calculations', () => {
        const t = babylonJS({'bugs-counter': `
            <% if (counter == 0) {
                %>There are no bugs!<% 
            } else if (counter == 1) { 
                %>There is only 1 bug<% 
            } else { 
                %>There are <%= counter %> bugs<% 
            } %>                
        `})

        expect(t('bugs-counter', {counter: 0})).toBe('There are no bugs!')
        expect(t('bugs-counter', {counter: 1})).toBe('There is only 1 bug')
        expect(t('bugs-counter', {counter: 100})).toBe('There are 100 bugs')        
    })
})