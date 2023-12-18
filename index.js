/*
MIT License
Copyright (c) 2023 Nest Packages

 ---------- Gerandchars ---------- 
*/

const randStr = require('./lib/randStr.js');
const randNum = require('./lib/randNum.js');
const randStrNum = require('./lib/randStrNum.js');
const randPasswd = require('./lib/randPasswd.js');
const randBool = require('./lib/randBool.js');
const randColor = require('./lib/randColor.js');

console.log(randStr());
console.log(randNum());
console.log(randStrNum());
console.log(randPasswd());
console.log(randBool());
console.log(randColor());

module.exports = {
  randStr,
  randNum,
  randStrNum,
  randPasswd,
  randBool,
  randColor
}