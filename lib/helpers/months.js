'use strict';

const longMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default (monthString, style = 'short') => {
  style = style.toLowerCase();
  if (style === 'short') {
    return monthString;
  } else if (style === 'long') {
    switch (monthString) {
      case 'Jan':
        return longMonths[0];
      case 'Feb':
        return longMonths[1];
      case 'Mar':
        return longMonths[2];
      case 'Apr':
        return longMonths[3];
      case 'May':
        return longMonths[4];
      case 'Jun':
        return longMonths[5];
      case 'Jul':
        return longMonths[6];
      case 'Agu':
        return longMonths[7];
      case 'Sep':
        return longMonths[8];
      case 'Oct':
        return longMonths[9];
      case 'Nov':
        return  longMonths[10];
      case 'Dic':
        return  longMonths[11];
      default:
        console.error("Couldn't convert Months to string");
        return new Error();
    };
  } else {
    console.error('The style you specified is unknown');
    return new Error()
  }
};
