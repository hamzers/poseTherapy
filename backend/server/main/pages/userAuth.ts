
const signupPage = new TextEncoder().encode(`
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!-- Compiled and minified CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  <title>GameGuidez</title>
</head>
<body class="grey lighten-3">



  <!-- SIGN UP MODAL -->
  <div id="modal-signup">
    <div class="modal-content">
      <h4>Sign up</h4><br />
      <form id="signup-form">
        <div class="input-field">
          <input type="email" id="signup-email" required />
          <label for="signup-email">Email address</label>
        </div>
        <div class="input-field">
          <input type="password" id="signup-password" required />
          <label for="signup-password">Choose password</label>
        </div>
        <div class="input-field">
          <input type="text" id="signup-bio" required />
          <label for="signup-bio">One Line Bio</label>
        </div>
        <button class="btn yellow darken-2 z-depth-0">Sign up</button>
        <p class="error pink-text center-align"></p>
      </form>
    </div>
  </div>


  
  <script src="https://www.gstatic.com/firebasejs/5.6.0/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/5.6.0/firebase-auth.js"></script>
  <script src="https://www.gstatic.com/firebasejs/5.6.0/firebase-firestore.js"></script>
  <script src="https://www.gstatic.com/firebasejs/5.6.0/firebase-functions.js"></script>
  <script>
    // Initialize Firebase
    var config = {
		apiKey: "AIzaSyCrSR0aquvWFH-dXyG_7tv_S8QkCW1dWT4",
		authDomain: "algoimplement.firebaseapp.com",
		databaseURL: "https://algoimplement.firebaseio.com",
		projectId: "algoimplement",
    };
    firebase.initializeApp(config);
    
    // make auth and firestore references
    const auth = firebase.auth();
    const db = firebase.firestore();
    const functions = firebase.functions();

    // update firestore settings
    db.settings({ timestampsInSnapshots: true });
  </script>
  <!-- Compiled and minified JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  <script>
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // sign up the user & add firestore data
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    return db.collection('users').doc(cred.user.uid).set({
      bio: signupForm['signup-bio'].value
    });
  }).then(() => {
    // close the signup modal & reset form
    const modal = document.querySelector('#modal-signup');
    
    signupForm.reset();
    signupForm.querySelector('.error').innerHTML = ''
  }).catch(err => {
    signupForm.querySelector('.error').innerHTML = err.message;
  });
});
  </script>
  <script src="scripts/index.js"></script>
</body>
</html>
`);

export const userAuth = ({ response }: { response: any }) => {
    response.status = 200;
    response.body = signupPage;
};
 
