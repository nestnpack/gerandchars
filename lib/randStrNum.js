function randStrNum(length, size = 'normal') {
  const strnum = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  size = size.toLowerCase();
  
  if (typeof length === 'undefined') {
    return new Error('Enter the length of the string and number to be generated');
  }
  
  if (length <= 0) {
    return new Error('Invalid character length (0)');
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * strnum.length);
    result += strnum.charAt(randomIndex);
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

module.exports = randStrNum;