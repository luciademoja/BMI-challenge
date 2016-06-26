describe('BMI_UI - index.html', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
  });
  describe('Metric', function(){
    beforeEach(function()
      $('#calc_type_metric').trigger('click');
      $('#weight').val('90');
      $('#height').val('186');
      $('#calculate').trigger('click');
    });
    it("displays Metric BMI Value", function() {
      expect($('#display_value').text()).toBe('Your BMI is 26.01');
    });

    it("display Metric BMI Message", function() {
      expect($('#display_message').text()).toBe('and you are Overweight');
    });
  })

  describe('Imperial', function(){
    beforeEach(function()
      $('#calc_type_imperial').trigger('click');
      $('#weight').val('130');
      $('#height').val('68');
      $('#calculate').trigger('click');
    });

    it("displays Imperial BMI Value", function() {
      expect($('#display_value').text()).toBe('Your BMI is 19.76');
    });

    it("display Imperial BMI Message", function() {
      expect($('#display_message').text()).toBe('and you are Normal');
    });
  })

});
