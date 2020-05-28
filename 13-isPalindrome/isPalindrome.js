function isPalindrome(word) {
  // Insert code here;
  var check=true
  var lcstr=word.toLowerCase();
    var len=word.length
    for(var i=0; i<len/2;i++)
    {
        if(lcstr[i]!=lcstr[len-1-i])
        {
            check=false;
        }
    }
    return check

}

// Do not edit this line;
module.exports = isPalindrome;