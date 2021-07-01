const isPalindrome = require('../palindrome.js');

describe("isPalindrome", function(){

   // TODO - write some tests!

    it("should return true for a single letter", function(){
      expect(isPalindrome("a")).toBeTrue();
   });

   it("should return true for a single letter repeated", function(){
      expect(isPalindrome("aaa")).toBeTrue();
   });

   it("should return true for a simple palindrome", function(){
      expect(isPalindrome("aba")).toBeTrue();
   });

   it("should return true for a longer palindrome", function(){
      expect(isPalindrome("racecar")).toBeTrue();
   });

});