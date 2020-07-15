const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const admin = require('firebase-admin');
const serviceAccount = require("./serviceAccountKey.json");

var firebaseAdmin = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://algoimplement.firebaseio.com"
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post("/api/users", async (req, res) => {
  var uid = req.body.uid;
  var userEmail = req.body.email;
  var userByEmail = 1;

  await admin.auth().getUserByEmail(userEmail)
  .then((userRecord) => {
    userByEmail = userRecord; 
    console.log('Successfully fetched user data:', userRecord.toJSON());
    return null;
  })
  .catch((error) => {
    console.log('Error fetching user data:', error);
  });

  if ((userByEmail.uid !== null) && (uid !== null) && (userByEmail.uid === uid)) {
    res.send(true);
  } else {
    res.send(false);
  }
});

app.listen(3000);
console.log('Server started at http://localhost:' + 3000);
exports.auth = functions.https.onRequest(app);