
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

How to generate strings?

```javascript
generate.randStr(length, size [optional]);
//variable 1 is length to determine the length of a string that can be generated
//variable 2 is size you can choose between (high) or (low) if you don't fill it in it doesn't matter then the size will use the default size

//Example:
generate.randStr(10); //NyWuKARIry

generate.randStr(15, 'high'); //ORPSJIFCIZECEQH

generate.randStr(13, 'low');  //ksvggkwmqycqm
```

How do you generate numbers?

```javascript
generate.randNum(length);
//Function (randNum) requires 1 value, that's (length)

generate.randNum(20); //64158543996528949596
```

How to generate a combination of strings and numbers?

```javascript
generate.randStrNum(length, size [optional]);

//variable 1 is length to determine the length of a string that can be generated
//variable 2 is size you can choose between (high) or (low) if you don't fill it in it doesn't matter then the size will use the default size

generate.randStrNum(20); //MDrCZq66oEvVhcoavXOh

generate.randStrNum(9, 'high'); //F7TOGXSXF

generate.randStrNum(5, 'low'); //t3meh
```

How to generate password?
```javascript
generate.randPasswd(length);
//Function (randNum) requires 1 value, that's (length)

generate.randPasswd(18); //(TtzZzyLSBw!HA%6(Q
```

## Features
| Function               | Description                                      |
| :--------------------- | :----------------------------------------------- |
| `randStr(length, size [optional])`      | Generate String randomly |
| `randNum(length)`      | Generate numbers randomly |
| `randStrNum(length, size [optional])`      | Generate strings and numbers randomly |
| `randPasswd(length)`      | Generate passwords randomly using a combination of strings, numbers and symbols |