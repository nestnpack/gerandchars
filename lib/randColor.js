'use strict';

function randColor(type, opacity) {
  let color;
  let alpha;
  type = type.toLowerCase();
  
  if(typeof type === 'undefined') {
    return Error('Enter the type of color that will be generated');
  }
  
  if (typeof opacity === 'undefined') {
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
  
  if(typeof color === 'undefined') {
    return Error(`[type: ${type}] not found`);
  }
  
  return color;
}

module.exports = randColor;