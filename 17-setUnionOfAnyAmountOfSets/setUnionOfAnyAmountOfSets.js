function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  var result=new Set()
  for(var i=0; i<arguments.length;i++)
  {
   arguments[i].forEach(value=>{
       result.add(value);
   });
  }
  return result;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;