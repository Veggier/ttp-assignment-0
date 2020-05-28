function titleCaseEdit(title) {
  var sentence = title.toLowerCase().split(" ");
  for(var i = 0; i< sentence.length; i++){
     sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
return sentence.join(" ");
}

// Do not edit this line;
module.exports = titleCaseEdit;