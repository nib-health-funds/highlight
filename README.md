# highlight

Highlight a string inside another string. Surround the matched string with more strings.
    
## Example

    var highlight = require('highlight');
    highlight('Honeysuckle', '22 Honeysuckle Drive, Newcastle, New South Wales');
    
Returns:
    
    22 <b>Honeysuckle</b> Drive, Newcastle, New South Wales

## Methods

### highlight(query, subject[, options])

- `query` - The string to search for in the other string
- `subject` - The string to search in for the other string
- options
    - `prefix` - A prefix to surround the string found in the other string. Defaults to `<b>`.
    - `suffix` - A suffix to surround the string found in the other string. Defaults to `</b>`.
    - `ignore_case` - Whether to ignore case when searching for the string in the other string. Defaults to `true`.
    

## Test

1. Run `component build --dev`
2. Run `component test phantom`