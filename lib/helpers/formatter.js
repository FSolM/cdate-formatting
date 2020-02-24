'use strict';

import getMonths from './months';

export default (d, format, compact) => {
  switch (format) {
    case 'mm/dd/yy':
      return `${compact ? d[1] : getMonths(d[1])} ${d[2]} ${d[3]}`;
    case 'dd/mm/yy':
      return `${d[2]} ${compact ? d[1] : getMonths(d[1])} ${d[3]}`;
    case 'yy/mm/dd':
      return `${d[3]} ${d[2]} ${compact ? d[1] : getMonths(d[1])}`;
    case 'yy/dd/mm':
      return `${d[3]} ${compact ? d[1] : getMonths(d[1])} ${d[2]}`;
    default:
      console.error('Seems like the date format is wrong');
      return undefined;
  }
}
