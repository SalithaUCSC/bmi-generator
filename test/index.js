const test = require('tap').test

const bmi = require('../index')

test('smoke test', function (x) {
  const number1 = bmi.getBMI(55, 1.5)
  x.is(typeof number1, 'number')
  x.ok(number1 > 0)
  x.end()
})

test('smoke test', function (x) {
  const bmiMsg = bmi.getBMIStausMsg(75, 1.65)
  x.is(typeof bmiMsg, 'string')
  x.ok(bmiMsg.length > 0)
  x.end()
})

test('smoke test', function (x) {
  const value = bmi.feetToMetre(5, 6)
  x.is(typeof value, 'number')
  x.ok(value > 0)
  x.end()
})

test('smoke test', function (x) {
  const inches = 13
  const feet = 5
  x.is(typeof feet, 'number')
  x.ok(feet > 0)
  x.is(typeof inches, 'number')
  x.ok(inches > 0)
  const value = bmi.feetToMetre(feet, inches)
  x.is(typeof value, 'number')
  x.ok(value > 0)
  x.end()
})
