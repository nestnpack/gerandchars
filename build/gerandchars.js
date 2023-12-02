/*
     MIT License
 * Copyright (c) 2023 Haidar Ahmad Faiq * 
 ---------- GeRandChars ---------- 
*/

const generate = (function() {
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
  
  function randStrNum(length, size = 'normal') {
    const strnum = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
  
    if (length <= 0) {
      throw new Error('Invalid character length (0)');
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
  
  function randPasswd(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyz'+
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ'+
      '0123456789'+
      '0123456789'+
      '!@#$%^&*()-_=+'+
      '!@#$%^&*()-_=+'
    let result = '';
  
    if (length <= 0) {
      throw new Error('Invalid character length (0)');
    }
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset.charAt(randomIndex);
    }
  
    return result;
  }
  
  function randBool() {
    function randBoolMath() {
      return Math.random() < 0.5;
    }
    return randBoolMath();
  }
  
  const generate = {
    randStr,
    randNum,
    randStrNum,
    randPasswd,
    randBool
  }
  
  return generate;
})();