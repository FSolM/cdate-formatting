'use strict';

import formatter from './helpers/formatter';
import getDays from './helpers/days';

export default (format = 'mm/dd/yy', options = { compact: true, fullDate: false }) => {
  if (typeof options.compact !== 'boolean' || typeof options.fullDate !== 'boolean') {
    console.error('You can only pass booleans in the options object');
    return undefined;
  }
  format.toLowerCase();
  const d = new Date().toString().split(' ');
  let date = formatter(d, format, options);
  if (options.fullDate) {
    return `${options.compact ? d[0] : getDays(d[0], true)}, ${date}`;
  } else {
    return date;
  }
}
