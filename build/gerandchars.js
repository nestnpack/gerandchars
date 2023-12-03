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
  
  function randColor(type, opacity) {
    let color;
    let alpha;
    
    if (opacity === undefined) {
      opacity = 0.1 + Math.random() * 1;
    }
    
    if (opacity == 'normal') {
      opacity = 1;
    }
    
    type = type.toLowerCase();
    opacity = Math.min(1, Math.max(0, opacity));
    
    if(type == 'hex') {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      
      function toHex(decimalValue) {
        const hex = decimalValue.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      }
      
      if (opacity < 1) {
        alpha = Math.round(opacity * 255);
        opacity = alpha;
      } else {
        opacity = 255;
      }
      
      color = `#${toHex(red)}${toHex(green)}${toHex(blue)}${toHex(opacity)}`;
    }
    
    if(type == 'rgb') {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      
      if(opacity < 1) {
        alpha = Math.round(opacity * 999);
        opacity = `0.${alpha}`;
      }
      
      color = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
    }
    
    if(type == 'hsl') {
      const hue = Math.floor(Math.random() * 360);
      const saturation = Math.floor(Math.random() * 101);
      const lightness = Math.floor(Math.random() * 101);
      
      if(opacity < 1) {
        alpha = Math.round(opacity * 999);
        opacity = `0.${alpha}`;
      }
      
      color = `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`;
    }
    
    return color;
  }
  
  const generate = {
    randStr,
    randNum,
    randStrNum,
    randPasswd,
    randBool,
    randColor
  }
  
  return generate;
})();