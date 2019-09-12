
var div = document.getElementById("div");
var fraction = document.getElementById("fraction");
var curr = document.getElementById("curr");

var firebaseRef = firebase.database().ref().child("Scores/div");

firebaseRef.on('value', function(datasnapshot) {
    div.innerText = datasnapshot.val();
});

var firebaseRef2 = firebase.database().ref().child("Scores/fraction");

firebaseRef2.on('value', function(datasnapshot) {
    fraction.innerText = datasnapshot.val();
});


var firebaseRef3 = firebase.database().ref().child("Scores/currency");

firebaseRef3.on('value', function(datasnapshot) {
    curr.innerText = datasnapshot.val();
});



var x = document.getElementById("div").value; 
document.getElementById("gained-xp").innerHTML = x;