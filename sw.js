var MESSAGES = ['Are we there yet?',
				'I&#39;m tired.',
				'Look out!',
				'Is it safe?',
				'MOAR',
				'Watson! Come here.',
				'Wah!',
				'Nooooooooo!',
				'Help!',
				'I thought turkies could fly.'];

self.addEventListener('push', function(e) {
	var index = Math.floor(Math.random() * 9);
	var options = {
     	body: MESSAGES[index]
  	};
  	var title = "Useless App Needs You NOW!";

	e.waitUntil(
    	self.registration.showNotification(title, options)
 	);
});

self.addEventListener('notificationclick', function(event) {
  	event.notification.close();

  	event.waitUntil(clients.matchAll({
  		type: 'window'
  	}).then(function(clientList) {
    	for (var i = 0; i < clientList.length; i++) {
     		var client = clientList[i];
     	if (client.url === '/' && 'focus' in client) {
        	return client.focus();
     	}
    }
    if (clients.openWindow) {
    	return clients.openWindow('/useless.html');
    }
  }));
});