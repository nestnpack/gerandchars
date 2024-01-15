'use strict';

function randNum(length) {
  const number = '0123456789';
  let result = '';
  
  if (typeof length === 'undefined') {
    return Error('Enter the length of the number to be generated');
  }
  
  if (length <= 0) {
    return Error('Invalid character length (0)');
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * number.length);
    result += number.charAt(randomIndex);
  }

  return result;
}

module.exports = randNum;