## Installation

```bash
$ npm install easy-lo-cal
```

## Usage

### Basic
```js
const dictionary = {'key': 'value'}
const t = babylonJS(dictionary)
// t('key') === 'value'
```

### Using variables
```js
const dictionary = {'birth-date': 'I was born at: <%= date %>'}
const t = babylonJS(dictionary)
// t('birth-date', {'date': 1985}) === 'I was born at: 1985'
```

### Using variables and conditions
```js
const dictionary = {'bugs-counter': `
        <% if (counter == 0) {
            %>There are no bugs!<% 
        } else if (counter == 1) { 
            %>There is only 1 bug<% 
        } else { 
            %>There are <%= counter %> bugs<% 
        } %>                
    `}
const t = babylonJS(dictionary)

// t('bugs-counter', {counter: 0}) === 'There are no bugs!'
// t('bugs-counter', {counter: 1}) === 'There is only 1 bug'
// t('bugs-counter', {counter: 100}) === 'There are 100 bugs''
```