import template from 'lodash.template'

const dictionary = {}

export default (dictionary = {}) => (key, variables = {}) => {
    switch (typeof dictionary[key]) {
        case 'string':
            return template(dictionary[key])(variables).trim()
        case 'function':
            // TODO: evaluate function and recursively call the translate again with the returned value
            break
        default:
            console.warn(`${key} doesn't exist`)
            return `!_MISSING_TRANSLATION_${key}_!`
    }
}