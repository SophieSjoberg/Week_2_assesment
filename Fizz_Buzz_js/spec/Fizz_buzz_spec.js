describe("FizzBuzz", function(){
  var game;
  beforeEach(function(){
  game = new FizzBuzz();
  });

  it("return 'What the F?' if the number is negative", function() {
    expect(game.check(-1)).toEqual('What the F?');
  });

  it("return 'fizzbuzz' if the number is divisable by 15", function() {
    expect(game.check(15)).toEqual('fizzbuzz');
  });

  it("return 'fizz' if the number is divisable by 3", function() {
    expect(game.check(3)).toEqual('fizz');
  });

  it("return 'buzz' if the number is divisable by 5", function() {
    expect(game.check(5)).toEqual('buzz');
  });

  it("return 'number' if number is NOT divisable by 3", function(){
    expect(game.check(2)).toEqual(2);
  });

});
