'use strict';

import formatter from './helpers/formatter';
import getDays from './helpers/days';

export default (format = 'mm/dd/yy', options = { compact: true, fullDate: false }, date = new Date()) => {
  if (typeof options.compact !== 'boolean' || typeof options.fullDate !== 'boolean') {
    console.error('You can only pass booleans in the options object');
    return undefined;
  }
  if (!(date instanceof Date) || date === 'Invalid Date') {
    console.error('The date attribute must be a Date type');
    return undefined;
  }
  format.toLowerCase();
  const d = date.toString().split(' ');
  let date = formatter(d, format, options);
  if (options.fullDate) {
    return `${options.compact ? d[0] : getDays(d[0], true)}, ${date}`;
  } else {
    return date;
  }
}
