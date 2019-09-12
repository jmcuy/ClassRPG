
var div = document.getElementById("div");

var div2 = document.getElementById("div2");

var div3 = document.getElementById("div3");

var submit_btn = document.getElementById("submit_btn");

function submitClick(){

   var firebaseRef = firebase.database().ref();

   var div_text = div.value;
   var div2_text = div2.value;
   var div3_text = div3.value;



   firebaseRef.push();
   
   var x = firebase.database().ref().child("Scores");

   x.child("div").set(div_text);
   x.child("fraction").set(div2_text);
   x.child("currency").set(div3_text);

   window.alert("Scores Submitted!");
}