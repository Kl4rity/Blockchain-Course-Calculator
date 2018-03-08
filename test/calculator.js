var Calculator = artifacts.require("./CalculatorV2.sol");

contract('Calculator', function(accounts) {

  // Expected behavior - result is initialized to 10
  // Test Case#1
  it("should assert true", function() {
    var calculator;
    return Calculator.deployed().then(function(instance){
      calculator = instance;
      return calculator.getResult.call();
    }).then(function (result) {
      assert.equal(result.valueOf(), 10, "Contract initialized with value NOT equal to 10!!!");
    });
  });

  // Test case#2 Checks if calls to add/subtract for ((Initial_Value + 10) - 5) = 15
  it("should add 10 and then substract 5 to get a result=15", function () {
    // Get the deployed instance
    var calculator;
    
    return Calculator.deployed().then(function(instance){
      calculator = instance;
      return calculator.addToNumber(10)
    }).then(function () {
      return calculator.getResult.call();
    }).then(function (result) {

      assert.equal(result.toNumber(), 20, "Result after adding 10 should be 20");
      // Now substract 10
      return calculator.substractNumber(5)
    }).then(function () {
      return calculator.getResult.call();
    }).then(function (result) {
      assert.equal(result.toNumber(), 15, "Result after subtracting 5 should be 15");
    });
  });

  // Add Test Case#3 here

  it("should mutliply with 10 and divide by 5 to get the result of 30 (15*10)/5 = 30", function(){
    // Get deployed instance
    var calculator;

    return Calculator.deployed().then(function(instance){
      calculator = instance;
      return calculator.multiplyWithNumber(10)
    }).then(function(){
      return calculator.divideByNumber(5)
    }).then(function(){
      return calculator.getResult.call()
    }).then(function(result){
      assert.equal(result.toNumber(), 30, "Result after mutiplying by 10 and dividing by 5 should be 30");
    });
  });

  // Add Test Case#4 here
  it("Should double the result", function(){
    var calculator;
    return Calculator.deployed().then(function(instance){
      calculator = instance;
      return calculator.double()
    }).then(function(){
      return calculator.getResult.call()
    }).then(function(result){
      assert.equal(result.toNumber(), 60, "Result be 30 before and 60 after doubling");
    });
  });

  // Add Test Case #5 here
  it("Should halve the result", function(){
    var calculator;
    return Calculator.deployed().then(function(instance){
      calculator = instance;
      return calculator.halve()
    }).then(function(){
      return calculator.getResult.call()
    }).then(function(result){
      assert.equal(result.toNumber(), 30, "Result should be 60 before and 30 after halving");
    });
  });
});
