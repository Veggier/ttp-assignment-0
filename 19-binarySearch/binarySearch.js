class MySolution {
  constructor() {
    this.flag = false;
  }

  binarySearch(nums, target) {
    // Insert code here;
    var l=0;
    var r=nums.length;

    while(l<=r)
    {
        var mid=Math.floor((l+r)/2);
        if(nums[mid]==target)
        {
            return true;
        }
        if(target>nums[mid])
        {
            l=mid+1;
        }
        if(target<nums[mid])
        {
            r=mid-1;
        }
    }
    if(l>r)
    {
    return false;
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;