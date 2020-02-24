'use strict';

import formatter from './helpers/formatter';
import getDays from './helpers/days';

export default (format = 'mm/dd/yy', options = { compact: false, fullDate: false }) => {
  if (typeof options.compact !== 'boolean' || typeof options.fullDate !== 'boolean') {
    console.error('You can only pass booleans in the options object');
    return new Error();
  }
  format.toLowerCase();
  const d = new Date().toString().split(' ');
  try {
    let date = formatter(d, format, options.compact);
    if (options.fullDate) {
      return `${options.compact ? d[0] : getDays(d[0])}, ${date}`;
    } else {
      return date;
    }
  } catch {
    return new Error();
  }
}
