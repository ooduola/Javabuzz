
describe('Javabuzz', function () {
  var javabuzz;
  javabuzz = new Javabuzz();

  describe('know when a number is', function () {
      it('should return Fizz if argument is divisible by 3', function () {
          expect(javabuzz.isDivisibleByThree(3)).toEqual("Fizz");
      });
  });
  
  describe( 'it is divisible by 3', function () {
    it('should return itself if number is not divisible by 3', function () {
       expect(javabuzz.isDivisibleByThree(1)).toEqual(1);
    });
  });

  describe( 'it is divisble by 5', function () {
    it('should return buzz if number is divisible by 5', function (){
        expect(javabuzz.isDivisibleByFive(5)).toEqual("Buzz");
    });
  });

  describe( 'it is not divisble by 5', function() {
    it('should return number if not divisible by 5', function () {
        expect(javabuzz.isDivisibleByFive(7)).toEqual(7);
    });
  });
});
