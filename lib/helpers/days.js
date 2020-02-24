'use strict';

const longDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default (monthString) => {
  switch (monthString) {
    case 'Mon':
      return longDays[0];
    case 'Tue':
      return longDays[1];
    case 'Wed':
      return longDays[2];
    case 'Thu':
      return longDays[3];
    case 'Fri':
      return longDays[4];
    case 'Sat':
      return longDays[5];
    case 'Sun':
      return longDays[6];
    default:
      console.error("Couldn't convert Days to string");
      return undefined;
  };
};
