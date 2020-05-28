class MySolution {
  countDownSum(num) {
   if(num<=1)
   {
   return num
   }
   return num+this.countDownSum(num-1)
    // Insert code here;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;