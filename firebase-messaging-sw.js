importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
 apiKey: "AIzaSyBhL-88eV-R270qShbBSkoN0AD6K0297iA",
  authDomain: "webmessaging-e795b.firebaseapp.com",
  projectId: "webmessaging-e795b",
  storageBucket: "webmessaging-e795b.appspot.com",
  messagingSenderId: "832888617163",
  appId: "1:832888617163:web:4db577e7c5fcd494f4434e",
  measurementId: "G-15MN0Q3CEN"
});

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'  // Optional: set an icon for the notification
  };

  // Show the notification
  self.registration.showNotification(notificationTitle, notificationOptions);
});