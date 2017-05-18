"use strict";

var MESSAGES = ['Are we there yet?',
        'I&#39;m tired.',
        'Look out!',
        'Is it safe?',
        'And now for something...\ncompletely different.',
        'Watson! Come here.',
        'Wah!',
        'Nooooooooo!',
        'Help!',
        'I thought turkies could fly.'];

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  if (e.request.url.indexOf('useful1.html') > 0) {
    var res = new Response("You really thought that would work? Really?!");
    e.respondWith(res);
  } else {
    return fetch(e.request);
  };
});

/*
self.addEventListener('push', function(e) {
  var index = Math.floor(Math.random() * 9);
  data = {
    body: MESSAGES[index]
  };
  var title = "Useless App Needs You NOW!";

  e.waitUntil(
    self.registration.showNotification(title, data)
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
}); */