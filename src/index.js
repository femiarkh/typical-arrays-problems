
exports.min = function min (array) {
  'use strict';
  if (!array || array.length === 0) {
      return 0;
  }
  return Math.min(...array);
}

exports.max = function max (array) {
 'use strict';
 if (!array || array.length === 0) {
    return 0;
 }
 return Math.max(...array);
}

exports.avg = function avg (array) {
  'use strict';
  if (!array || array.length === 0) {
    return 0;
  }
  return array.reduce((a, b) => a + b) / array.length;
}
