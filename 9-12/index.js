
var rootRef = firebase.database().ref().child("Users");

rootRef.on("child_added", snap => {

//        alert(snap.val());
var name = snap.child("Name").val();
var email = snap.child("Email").val();
var guild = snap.child("Guild").val();
var legion = snap.child("Legion").val();
var sais_id = snap.child("SAIS ID").val();

$("#table_body").append("<tr><td>" + name + "</td><td>" 
+ email + "</td><td>"
+ sais_id + "</td><td>"
+ guild + "</td><td>"
+ legion + "</td></tr>");
    });
