function randNum(length) {
  const number = '0123456789';
  let result = '';

  if (length <= 0) {
    throw new Error('Invalid character length (0)');
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * number.length);
    result += number.charAt(randomIndex);
  }

  return result;
}

module.exports = randNum;