function BMICalculator(){
};

BMICalculator.prototype.bmi = function(obj) {
  var weight = obj.weight;
  var height = obj.height;
  var calc_type = obj.calc_type;
  var finalBmi;
  if (weight > 0 && height > 0) {
    switch(calc_type){
      case 'metric':
        finalBmi = weight / (height / 100 * height / 100);
      break;
      case 'imperial':
        finalBmi = (weight * 703) / (height * height);
      break;
    }
    obj.bmiValue = parseFloat(finalBmi.toFixed(2));
    setBMIMessage(obj);
  }
};

function setBMIMessage (obj, value){
  if (obj.bmiValue < 18.5) {
    obj.bmiMessage = "Underweight"
  }
  if (obj.bmiValue >= 18.5 && obj.bmiValue < 25) {
    obj.bmiMessage = "Normal"
  }
  if (obj.bmiValue >= 25 && obj.bmiValue < 30) {
    obj.bmiMessage = "Overweight"
  }
  if (obj.bmiValue >= 30) {
    obj.bmiMessage = "Obese"
  }
};
