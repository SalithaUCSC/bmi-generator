module.exports = {
  getBMIStausMsg: (x, y) => {
    var bmi = x / (y * y)
    if (!x && !y) {
      throw new Error('Missing all arguments!')
    } else if (!x || !y) {
      throw new Error('Missing one argument!')
    } else {
      if (bmi < 18.5) {
        return 'Under Weight'
      } else if ((bmi >= 18.5) && (bmi < 25)) {
        return 'Normal Weight'
      } else if ((bmi >= 25) && (bmi < 30)) {
        return 'Over Weight'
      } else {
        return 'Obese'
      }
    }
  },
  getBMI: (x, y) => {
    var bmi = x / (y * y)
    if (!x && !y) {
      throw new Error('Missing all arguments!')
    } else if (!x || !y) {
      throw new Error('Missing one argument!')
    } else {
      return parseFloat(bmi.toFixed(2))
    }
  },
  feetToMetre: (feet, inches) => {
    var meterLength
    if (inches >= 12) {
      var inchesToAdd = parseInt(inches) % 12
      var feetToAdd = parseInt(inches / 12)
      meterLength = (feet + feetToAdd) * 0.3048 + inchesToAdd * 0.0254
      return parseFloat(meterLength.toFixed(2))
    }
    meterLength = feet * 0.3048 + inches * 0.0254
    return parseFloat(meterLength.toFixed(2))
  }
}
