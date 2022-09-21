(function () {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for(var i =0 ; i < names.length ; i++){
    var firstLeter = names[i].charAt(0).toLowerCase();
    if (firstLeter === 'j') {
      byeSpeaker(names[i]);
    }
    else {
      helloSpeaker(names[i]);
    }
  }
  
  })();
  
