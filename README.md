#npm-bmi
## This package is realted to BMI functionalities.

## Functionalities
> getBMI: get BMI value as an integer <br>
> getBMIStausMsg: get BMI Status as a string <br>
> feetToMetre: convert the given height in feet and inches to metres.

## Import package
```js const bmi = require('npm-bmi');``` <br>

## Usage
```js console.log(bmi.getBMI(75, 1.65));``` <br>
<!--- returns 27.55-->
```js console.log(bmi.getBMIStausMsg(75, 1.65));```
<!--- returns Over Weight-->
```js console.log(feetToMetre(5, 6));```
<!--- returns 1.68-->

## LICENSE

MIT