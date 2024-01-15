'use strict';

function randBool() {
  function randBoolMath() {
    return Math.random() < 0.5;
  }
  return randBoolMath();
}

module.exports = randBool;