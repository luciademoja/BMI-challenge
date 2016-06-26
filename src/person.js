function Person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;
  this.calc_type = attr.calc_type;
};

Person.prototype.calculate_bmi = function() {
  calculator = new BMICalculator();
  calculator.bmi(this);
};
