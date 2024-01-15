# Generate Random Characters

An npm package that can generate random strings, numbers and more

## Installation
Install with npm
```console
npm install gerandchars
```

or connect with CDN
```text
https://www.unpkg.com/gerandchars@latest/gerandchars.js
```

## Import
With require
```javascript
const gerandchars = require('gerandchars');
```

Connect with CDN
```html
<script src="https://www.unpkg.com/gerandchars@latest/gerandchars.js"></script>
```

## Usage
To use it you only need to call the function using `gerandchars.functionName()`

How to generate strings ?
```javascript
gerandchars.randStr(length, size [optional]);
//variable 1 is length to determine the length of a string that can be generated
//variable 2 is size you can choose between (high) or (low) if you don't fill it in it doesn't matter then the size will use the default size

//Example:
gerandchars.randStr(10); //NyWuKARIry

gerandchars.randStr(15, 'high'); //ORPSJIFCIZECEQH

gerandchars.randStr(13, 'low');  //ksvggkwmqycqm
```

How do you generate numbers ?
```javascript
gerandchars.randNum(length);
//Function (randNum) requires 1 value, that's (length)

gerandchars.randNum(20); //64158543996528949596
```

How to generate a combination of strings and numbers ?
```javascript
gerandchars.randStrNum(length, size [optional]);

//variable 1 is length to determine the length of a string that can be generated
//variable 2 is size you can choose between (high) or (low) if you don't fill it in it doesn't matter then the size will use the default size

gerandchars.randStrNum(20); //MDrCZq66oEvVhcoavXOh

gerandchars.randStrNum(9, 'high'); //F7TOGXSXF

gerandchars.randStrNum(5, 'low'); //t3meh
```

How to generate password ?
```javascript
gerandchars.randPasswd(length);
//Function (randNum) requires 1 value, that's (length)

gerandchars.randPasswd(18); //(TtzZzyLSBw!HA%6(Q
```

How to generate random boolean ?
```javascript
gerandchars.randBool();
//This will return a value of false or true
```

How to generate color randomly ?

Yes, you can generate colors randomly. HEX, RGB and HSL
```javascript
gerandchars.randColor(type, opacity [optional]);
//You can enter 2 variables. type and opacity [optional]
//if you don't fill in [opacity] then the value will be generated randomly but if you fill in the string 'normal' then the value is [1] or default and if you fill in [opacity] with a numeric value [example: 0.195, 0.5, 0.9] then this value will be used

gerandchars.randColor('hex');
//#3afd1598

gerandchars.randColor('hex', 'normal');
//#2bb1bcff

gerandchars.randColor('hex', 0.6);
//#1bfcff99

//This applies to all type
//hex
//rgb
//hsl
```

How to generate emote ?
```javascript
gerandchars.randEmote(type, length);

//Example

gerandchars.randEmote('face', 5);
//😀😁😂😃😄

gerandchars.randEmote('all', 4);
//😽👻👽✍

//List types
  //face
  //hand
  //clock
  //number
  //countryflag
  //all
```


## List
| Function               | Description                                      |
| :--------------------- | :----------------------------------------------- |
| `randStr(length, size [optional])`      | Generate String randomly |
| `randNum(length)`      | Generate numbers randomly |
| `randStrNum(length, size [optional])`      | Generate strings and numbers randomly |
| `randPasswd(length)`      | Generate passwords randomly using a combination of strings, numbers and symbols |
| `randBool()`      | Generate boolean randomly |
| `randColor(type, opacity [optional])`      | Generate colors randomly with various type |
| `randEmote(type, length)`      | Generate emote randomly with various type |