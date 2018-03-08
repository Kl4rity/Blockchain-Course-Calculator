pragma solidity ^0.4.6;

contract CalculatorV2 {

  uint result;

  event NumberAdded(uint n);
  event NumberSubtracted(uint n);
  event NumberMultiplied(uint n);
  event NumberDivided(uint n);
  event ResultDoubled(uint n);
  event ResultHalved(uint n);

  function CalculatorV2(uint num) public {
    // constructor
    result = num;
  }

  // returns the result
  function getResult() public constant returns (uint) {
    return result;
  }

  // result = result + num
  function addToNumber(uint num) public returns (uint) {
    result += num;
    NumberAdded(num);
    return result;
  }

  // result = result - num
  function substractNumber(uint num) public returns (uint) {
    result -= num;
    NumberSubtracted(num);
    return result;
  }

  // result = result * num
  function multiplyWithNumber(uint num) public returns (uint) {
    result *= num;
    NumberMultiplied(num);
    return result;
  }

  // result = result / num
  function divideByNumber(uint num) public returns (uint) {
    result /= num;
    NumberDivided(num);
    return result;
  }

  // result = result * 2
  function double() public returns (uint) {
    result *= 2;
    ResultDoubled(result);
    return result;
  }

  // result = result / 2
  function halve() public returns (uint) {
    result /= 2;
    ResultHalved(result);
    return result;
  }

}
