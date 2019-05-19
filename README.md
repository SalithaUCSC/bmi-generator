# npm-bmi
## This package is realted to BMI functionalities.

## Functionalities

### GET BMI
> getBMI: get BMI value as an integer <br>

### GET BMI STATUS
> getBMIStausMsg: get BMI Status as a string <br>

### CONVERT HEIGHT INTO METRES
> feetToMetre: convert the given height in feet and inches to metres

## Import package
```js 
const bmi = require('npm-bmi');
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
