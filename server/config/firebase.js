// config/firebase.js
const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "ojasx-c9e0d.appspot.com"

});

const bucket = admin.storage().bucket();

module.exports = { admin, bucket };
