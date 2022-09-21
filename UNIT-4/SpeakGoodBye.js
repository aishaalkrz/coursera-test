// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.
(function(window) {
	var speak = "Good Bye";
	var byeSpeaker = function (name) {
  		console.log(speak + " " + name);
	}
	
	window.byeSpeaker = byeSpeaker;

})(window);