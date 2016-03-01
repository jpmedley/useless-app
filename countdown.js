
function countdown(id) {
	var countdownDisplay = document.getElementById(id);
	var seconds = 5;
	var second = 0;

	var interval = setInterval(function(){
		countdownDisplay.innerText = String(seconds - second);
		if (second >= seconds) {
			countdownDisplay.innerText = "Goodbye!";
		}
		second++;
	}, 1000);
}