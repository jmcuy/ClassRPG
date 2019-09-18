var nem = document.getElementById("nem");
var date = document.getElementById("date");
//var type = document.getElementById(); 

var sub_btn = document.getElementById("sub_btn");

function submit(){
    var fb = firebase.database().ref();

    var date_txt = date.value;
    var name_txt = nem.value;
    
    fb.push();
     var x = firebase.database().ref().child("guild-activity");
     
     x.child("date").set(date_txt);
     x.child("nem").set(name_txt);

//    x.on('value', snap => console.log(snap.val()));

}