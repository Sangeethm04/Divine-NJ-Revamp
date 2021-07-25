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
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}


/*Added Text*/
function myFunction2() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

console.log("%cContact schery004@gmail.com to report issues with the website.", "color:red; font-size:25px;")

function myFunction3() {
  var x = document.getElementById("myTopnav5");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

 /*EVENT FLYERS SCRIPT*/

 function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Use the same src in the expanded image as the image being clicked on from the grid
expandedImg.src=imgs.src;
  // Show the container element (hidden with CSS)
expandImg.parentElement.style.display="block";
}

