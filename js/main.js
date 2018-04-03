;(function(){
 var config = {
    apiKey: "AIzaSyA25tRgYiLdQzmsxGWaV8WUgFQFhtuzYMc",
    authDomain: "chat-1-1-cf-firebase.firebaseapp.com",
    databaseURL: "https://chat-1-1-cf-firebase.firebaseio.com",
    projectId: "chat-1-1-cf-firebase",
    storageBucket: "chat-1-1-cf-firebase.appspot.com",
    messagingSenderId: "1038771188290"
  };
firebase.initializeApp(config);

var loginBtn = document.getElementById("start-login")
var user = null
loginBtn.addEventListener("click", googleLogin)
function googleLogin(){
	var provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider)
				.then(function(result){
					user = result.user
					console.log(user)
				})
}

})()