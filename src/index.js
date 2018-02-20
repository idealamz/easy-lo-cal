import template from 'lodash.template'

const dictionary = {}

export default (dictionary = {}) => (key, variables = {}) => {
    switch (typeof dictionary[key]) {
        case 'string':
            return template(dictionary[key])(variables).trim()
        default:
            console.warn(`${key} doesn't exist`)
            return `!_MISSING_TRANSLATION_${key}_!`
    }
}