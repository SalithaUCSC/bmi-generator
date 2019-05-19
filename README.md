# bmi-generator
## This package is realted to BMI functionalities.

## Functionalities

### Get BMI (kg/m2)
> getBMI: get BMI value as a float rounded into two decimals <br>

### Get BMI status
> getBMIStausMsg: get BMI status as a string <br>

### Convert height into metres
> feetToMetre: convert the given height in feet and inches to metres

## Install package
```js 
npm install bmi-generator;
```

## Import package
```js 
const bmi = require('bmi-generator');
```

## Usage
```js 
console.log(bmi.getBMI(75, 1.65));
// returns 27.55
console.log(bmi.getBMIStausMsg(75, 1.65));
// returns Over Weight
console.log(feetToMetre(5, 6));
// returns 1.68
```

## License

MIT
