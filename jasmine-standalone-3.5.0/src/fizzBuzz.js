class Javabuzz {
  isDivisibleByThree(number) {

    if (number % 3 == 0) { 
      return "Fizz" 
    }
    else {
      return number
    }
  }

  isDivisibleByFive(number) {

    if (number % 5 == 0) { 
      return "Buzz" 
    }
    else {
      return number
    }
  }
}