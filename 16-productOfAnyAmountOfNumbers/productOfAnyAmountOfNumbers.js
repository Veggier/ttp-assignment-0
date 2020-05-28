function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  var result=1;
  for(var i=0; i<arguments.length;i++)
  {
      result*=arguments[i];
  }
  return result;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;