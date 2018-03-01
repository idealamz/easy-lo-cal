## Installation

```bash
$ npm install easy-lo-cal
```

## Usage

### Basic
```js
import local from 'easy-lo-cal'

const dictionary = {'key': 'value'}
const t = local(dictionary)
// t('key') === 'value'
```

### Using variables
```js
import local from 'easy-lo-cal'

const dictionary = {'birth-date': 'I was born at: <%= date %>'}
const t = local(dictionary)
// t('birth-date', {'date': 1985}) === 'I was born at: 1985'
```

### Using variables and conditions
```js
import local from 'easy-lo-cal'

const dictionary = {'bugs-counter': `
        <% if (counter == 0) {
            %>There are no bugs!<% 
        } else if (counter == 1) { 
            %>There is only 1 bug<% 
        } else { 
            %>There are <%= counter %> bugs<% 
        } %>                
    `}
const t = local(dictionary)

// t('bugs-counter', {counter: 0}) === 'There are no bugs!'
// t('bugs-counter', {counter: 1}) === 'There is only 1 bug'
// t('bugs-counter', {counter: 100}) === 'There are 100 bugs''
```