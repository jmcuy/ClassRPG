(function(){
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      //go();
      return false;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: 'main.html',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID/*,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID*/
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>',
  // Privacy policy url.
  privacyPolicyUrl: '<your-privacy-policy-url>'
};

ui.start('#firebaseui-auth-container', uiConfig);

//go();

function go() {
//var authData = firebase.auth();
//var userId = getUser(authData);
var userId = firebase.auth().currentUser.uid;
  checkIfUserExists(userId);
} 

// Tests to see if /users/<userId> has any data. 
function checkIfUserExists(userId) {
  var register = firebase.database().ref("Users/" + userId);

register.once('value').then(function(snapshot) {
   if(snapshot.val().hasOwnProperty('email')) {
     //console.log("Email exist.");
     window.location.replace(main.html);
   }
   else {
     //console.log("Email not exist.");
     window.location.replace(signupForm.html);
     /* Code to push email to the specific user */
   }
});

}

})()