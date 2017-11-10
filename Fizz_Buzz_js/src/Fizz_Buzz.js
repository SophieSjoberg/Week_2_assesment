function FizzBuzz() {
  this.check = function(number) {

    if(Math.sign(number) === -1) {
      return 'What the F?';
    } else if(_hasZeroReminder(number, 15)) {
      return "fizzbuzz";
    } else if(_hasZeroReminder(number, 3)) {
      return "fizz";
    } else if(_hasZeroReminder(number, 5)) {
      return "buzz";
    } else {
      return number;
    }
    };
  }
  
var _hasZeroReminder = function (number, divisor) {
  return (number % divisor === 0);

};
