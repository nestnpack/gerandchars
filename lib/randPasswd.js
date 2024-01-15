'use strict';

function randPasswd(length) {
  const charset = 'abcdefghijklmnopqrstuvwxyz'+
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'+
    '0123456789'+
    '0123456789'+
    '!@#$%^&*()-_=+'+
    '!@#$%^&*()-_=+';
  let result = '';
  
  if (typeof length === 'undefined') {
    return Error('Enter the length of the password to be generated');
  }
  
  if (length <= 0) {
    return Error('Invalid character length (0)');
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    result += charset.charAt(randomIndex);
  }

  return result;
}

module.exports = randPasswd;