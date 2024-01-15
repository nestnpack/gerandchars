'use strict';

function randStr(length, size = 'normal') {
  const string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';
  size = size.toLowerCase();
  
  if (typeof length === 'undefined') {
    return Error('Enter the length of the string to be generated');
  }
  
  if (length <= 0) {
    return Error('Invalid character length (0)');
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * string.length);
    result += string.charAt(randomIndex);
  }

  switch (size) {
    case 'high':
      result = result.toUpperCase();
      break;
    
    case 'low':
      result = result.toLowerCase();
      break;
    
    default:
      result;
  }

  return result;
}

module.exports = randStr;