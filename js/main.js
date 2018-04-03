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



var database = firebase.database()
var loginBtn = document.getElementById("start-login")
var user = null
var usuariosConectados= null
var conectadoKey = ""

loginBtn.addEventListener("click", googleLogin)
function googleLogin(){
	var provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider)
				.then(function(result){
					user = result.user
					console.log(user)
					$("#login").fadeOut()
					initApp()

				})
}

initApp(){
	usuariosConectados= database.ref("/connected")
	login(user.uid, user.displayName|| user.email)
}

login(uid,name){
	var conectado = usuariosConectados.push({
		uid: uid,
		name: name
	})
	conectadoKey = conectado.Key
}
})()