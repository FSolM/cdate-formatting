# cDate Formatting
### Classic Date Formatting for JavaScript

This `npm` module focuses on the date formatting of the `new Date()` JS object. It parses the result to a legible `string` state for both data manipulation and display.

## Usage & Installation

To use this module install it with either `npm`

```
$ npm i cdate-formatting
```

Or `yarn`

```
$ yarn add cdate-formatting
```

To use `cdate`, import it to your project

```javascript
import cdate from 'cdate-formatting';

const date = cdate();
// returns 'Feb 24 2020' as a string 
```

By default, `cdate` will return the current date in format *mm/dd/yy*, you can pass the function a string specifying the date order; it supports:

- mm/dd/yy
- dd/mm/yy
- yy/mm/dd
- yy/dd/mm

You can also specify if you want a compact date and the full date passing an object with the attributes `compact` & `fullDate` as booleans.

```javascript
const nonCompactDate = cdate('mm/dd/yy', { compact: false, fullDate: false });
// February 24 2020

const compactFullDate = cdate('mm/dd/yy', { compact: true, fullDate: true });
// Mon, Feb 24 2020

const nonCompactFullDate = cdate('mm/dd/yy', { compact: false, fullDate: true });
// Monday, February 24 2020
```

Additionally, you can specify a custom date to parse with the same format passing a `instanceof` Date; the default parameter of this option will parse the current date:

```javascript
const dateUnspecified = cdate('mm/dd/yy', { compact: true, fullDate: false });
// Feb 24 2020

const dateSpecified = cdate('mm/dd/yy', { compact: true, fullDate: false }, new Date (2019, 10, 15));
// Nov 15 2019

```

If either the `format` of the date, the `options` are wrong in some way, or the `date` variable is not a valid instance of Date or an invalid date, `cdate` will return `undefined`.

#### Created by:

Carlos Sol: [@FSolM](https://github.com/FSolM)
