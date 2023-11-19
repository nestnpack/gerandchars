function randStr(length, size = 'normal') {
  const string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';

   if (length <= 0) {
    throw new Error('Invalid character length (0)');
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