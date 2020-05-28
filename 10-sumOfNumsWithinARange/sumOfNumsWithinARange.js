function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
   var start_index;
   var end_index;
    var count=0;
    for(var i=0;i<nums.length;i++)
    {
        if(nums[i]==start)
        {
            start_index=i;
            break;
        }
    }
    for(var i=nums.length-1;i>0;i--)
    {
        if(nums[i]==end)
        {
            end_index=i;
            break;
        }
    }
    if(start_index!=null && end_index==null)
    {
      count=nums.length
    }
    if(start_index!=null && end_index!=null)
    {
    count=end_index-start_index+1;
    }
    
    return count
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;