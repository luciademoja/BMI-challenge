describe("Person", function() {
  var person;

describe("Metric", function() {
  beforeEach(function() {
    person = new Person({weight: 90, height: 186});
  });

  it("should have weight of 90 kg", function() {
    expect(person.weight).toEqual(90);
  });

  it("should have height of 186 cm", function() {
    expect(person.height).toEqual(186);
  });

  it("should calculate BMI value", function() {
    person.calc_type = 'metric';
    person.calculate_bmi();
    expect(person.bmiValue).toEqual(26.01)
  });

  it("should have a BMI Message", function() {
    person.calc_type = 'metric';
    person.calculate_bmi();
    expect(person.bmiMessage).toEqual("Overweight")
  });
});

describe("Imperial", function() {
  beforeEach(function() {
    person = new Person({weight: 130 , height: 68});
  });

  it("should have weight of 130 pounds", function() {
    expect(person.weight).toEqual(130);
  });

  it("should have height of 68 inches", function() {
    expect(person.height).toEqual(68);
  });

  it("should calculate BMI value", function() {
    person.calc_type = 'imperial';
    person.calculate_bmi();
    expect(person.bmiValue).toEqual(19.76)
  });

  it("should have a BMI Message", function() {
    person.calc_type = 'imperial';
    person.calculate_bmi();
    expect(person.bmiMessage).toEqual("Normal")
  });
});
});
