(function(window) {
	var speak = "Hello";
	var helloSpeaker = function (name) {
		console.log(speak + " " + name);
	}

	window.helloSpeaker = helloSpeaker;

})(window);