
function countdown(id) {
	var seconds = 20000;
	var second = 0;
	console.log("Yeah");

	var interval = setInterval(function(){
		id.innerText = String((seconds - second)/1000);
		if (second >= seconds) {
			clearInterval(interval);
			id.innerText = "Goodbye!";
			window.location = "http://www.google.com";
		}
		second = second + 1000;
	}, 1000, id);
	return "Yeah";
}