function fizzBuzz(start, end) {
  // Insert code here;
  var lists=new Array(end-start+1);
    for(var i=0;i<lists.length;i++)
    {
        if((i+start)%3==0 && (i+start)%5==0)
        {
            lists[i]="FizzBuzz";
        }
        else if( (i+start)%3==0 )
        {
            lists[i]="Fizz";
        }
        else if( (i+start)%5==0 )
        {
            lists[i]="Buzz";
        }
        else
        {
        lists[i]=i+start;
        }
    }
    return lists
}

// Do not edit this line;
module.exports = fizzBuzz;