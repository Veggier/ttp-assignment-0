function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  var min=Math.min(...nums);
  var max=Math.max(...nums);
  var sum=min+max;
  return sum
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;