
# Generate Random Characters

An npm package that can generate random strings, numbers and more

## Installation
Install using npm
```console
npm install gerandchars
```
or connect with CDN
```bash
https://www.unpkg.com/gerandchars@latest/build/gerandchars.js
```

After installing, do the import

With require
```javascript
const generate = require('gerandchars');
```

With Tag Script Html
```html
<script src="./node_modules/gerandchars"></script>
```

Connect with CDN
```html
<script src="https://www.unpkg.com/gerandchars@latest/build/gerandchars.js"></script>
```

## Usage
To use it you only need to call the function using `generate.functionName()`

How to generate strings ?
```javascript
generate.randStr(length, size [optional]);
//variable 1 is length to determine the length of a string that can be generated
//variable 2 is size you can choose between (high) or (low) if you don't fill it in it doesn't matter then the size will use the default size

//Example:
generate.randStr(10); //NyWuKARIry

generate.randStr(15, 'high'); //ORPSJIFCIZECEQH

generate.randStr(13, 'low');  //ksvggkwmqycqm
```

How do you generate numbers ?
```javascript
generate.randNum(length);
//Function (randNum) requires 1 value, that's (length)

generate.randNum(20); //64158543996528949596
```

How to generate a combination of strings and numbers ?
```javascript
generate.randStrNum(length, size [optional]);

//variable 1 is length to determine the length of a string that can be generated
//variable 2 is size you can choose between (high) or (low) if you don't fill it in it doesn't matter then the size will use the default size

generate.randStrNum(20); //MDrCZq66oEvVhcoavXOh

generate.randStrNum(9, 'high'); //F7TOGXSXF

generate.randStrNum(5, 'low'); //t3meh
```

How to generate password ?
```javascript
generate.randPasswd(length);
//Function (randNum) requires 1 value, that's (length)

generate.randPasswd(18); //(TtzZzyLSBw!HA%6(Q
```

How to generate random boolean ?
```javascript
generate.randBool();
//This will return a value of false or true
```

How to generate color randomly ?

Yes, you can generate colors randomly. HEX, RGB and HSL
```javascript
generate.randColor(type, opacity [optional]);
//You can enter 2 variables. type and opacity [optional]
//if you don't fill in [opacity] then the value will be generated randomly but if you fill in the string 'normal' then the value is [1] or default and if you fill in [opacity] with a numeric value [example: 0.195, 0.5, 0.9] then this value will be used

generate.randColor('hex');
//#3afd1598

generate.randColor('hex', 'normal');
//#2bb1bcff

generate.randColor('hex', 0.6);
//#1bfcff99

//This applies to all type
//hex
//rgb
//hsl
```

## Features
| Function               | Description                                      |
| :--------------------- | :----------------------------------------------- |
| `randStr(length, size [optional])`      | Generate String randomly |
| `randNum(length)`      | Generate numbers randomly |
| `randStrNum(length, size [optional])`      | Generate strings and numbers randomly |
| `randPasswd(length)`      | Generate passwords randomly using a combination of strings, numbers and symbols |
| `randBool()`      | Generate boolean randomly |
| `randColor(type, opacity [optional])`      | Generate colors randomly with various type |