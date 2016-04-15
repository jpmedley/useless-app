
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

function propel(registration) {
	var PropelClient = window.goog.propel.PropelClient;

	if (PropelClient.isSupported()) {
		//var propelClient = new PropelClient('/sw.js');
		var propelClient = new PropelClient(registration)
		propelClient.addEventListener('statuschange', function(event) {
			if (event.permissionStatus === 'denied') {
				//Disable UI
			} else if (event.currentSubscription) {
				//Do something with the subscription.
				console.log(event.currentSubscription);
			} else {
				// Enable UI
			}
		});

		propelClient.subscribe();
		// OR
		propelClient.unsubscribe();
	}
}