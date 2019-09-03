import template from 'lodash.template'

const dictionary = {}

export default (dictionary = {}, whenMissing = (key) => (key)) => (key, variables = {}) => {
    switch (typeof dictionary[key]) {
        case 'string':
            return template(dictionary[key])(variables).trim()
        case 'function':
            // TODO: evaluate function and recursively call the translate again with the returned value
            break
        default:
            console.warn(`${key} doesn't exist`)
            return whenMissing(key)
    }
}