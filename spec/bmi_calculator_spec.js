describe("BMICalculator", function() {
  var bmi_calculator;
  var person;

describe("Metric", function() {
  beforeEach(function() {
    person = new Person({weight: 90, height: 186});
    calculator = new BMICalculator();

  });

  it("calculates BMI for a person using metric method", function() {
    person.calc_type = 'metric';
    person.calculate_bmi();
  expect(person.bmiValue).toEqual(26.01);
  });

});

describe("Imperial", function() {
  beforeEach(function() {
    person = new Person({weight: 130 , height: 68});
    calculator = new BMICalculator();
  });

  it("calculates BMI for a person using imperial method", function() {
    person.calc_type = 'imperial';
    person.calculate_bmi();
  expect(person.bmiValue).toEqual(19.76);
  });

});

});
