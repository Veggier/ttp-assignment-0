function frequencyCounter(word) {
  // Insert code here;
  var lettercounter={};
  for(var i=0; i<word.length;i++)
  {
      if(lettercounter[word[i]])
      {
          lettercounter[word[i]]+=1
      }
      else
      {
          lettercounter[word[i]]=1;
      }
  }
  return lettercounter
}

// Do not edit this line;
module.exports = frequencyCounter;