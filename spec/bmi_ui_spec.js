describe('BMI_UI - index.html', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
    $('#weight').val('90');
    $('#height').val('186');
    $('#calculate').trigger('click');
  });

  it("displays Metric BMI Value", function() {
    person.calc_type = 'metric';
    expect($('#display_value').text()).toBe('Your BMI is 26.01');
  });

  it("display Metric BMI Message", function() {
    person.calc_type = 'metric';
    expect($('#display_message').text()).toBe('and you are Overweight');
  });

  it("displays Imperial BMI Value", function() {
    person.calc_type = 'imperial';
    expect($('#display_value').text()).toBe('Your BMI is 19.76');
  });

  it("display Imperial BMI Message", function() {
    person.calc_type = 'imperial';
    expect($('#display_message').text()).toBe('and you are Normal');
  });
});
