var firebaseConfig = {
  apiKey: "AIzaSyDoliYBjKZbRBW5pRramf4pchC3G_aKaEI",
  authDomain: "divine-mercy-b265e.firebaseapp.com",
  databaseURL: "https://divine-mercy-b265e-default-rtdb.firebaseio.com",
  projectId: "divine-mercy-b265e",
  storageBucket: "divine-mercy-b265e.appspot.com",
  messagingSenderId: "705545618281",
  appId: "1:705545618281:web:92a9bf8211579b83d673f8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('Testimonies');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var location = getInputVal('location');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');
  var sharing = getInputVal('sharing')

  // Save message
  saveMessage(name, location, email, phone, message, sharing);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
  }, 15000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, location, email, phone, message, sharing) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    location: location,
    email: email,
    phone: phone,
    message: message,
    sharing: sharing
  })
}