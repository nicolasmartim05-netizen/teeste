firebase.auth().onAuthStateChanged(function(user){
    if (user.uid != "7qdJk3PWG7YJy31CgjhvSkscOUr2") {
        window.location.href = "home.html"
    }})