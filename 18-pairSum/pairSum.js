function pairSum(nums, target) {
  // Insert code here;
  var check=false;
  try{
    if(nums.length<=1) throw Error

    else
    {
      for(var i=0; i<nums.length-1;i++)
      {
          for(var j=i+1;j<nums.length;j++)
          {
             if(nums[i]+nums[j]==target)
             {
                 check=true;
                 break;
             }
          }
      }
      return check
    }
  }
  catch(err)
  {
   return err
  }
    
}

// Do not edit this line;
module.exports = pairSum;