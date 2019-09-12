
//YOU for loop this for multiple instances of QUIZZES
document.getElementById("quiz1-btn")
    .addEventListener("click", function(){
        document.getElementById("quiz1-btn").hidden = true;
        document.getElementById("quiz1").hidden = false;
        document.getElementById("close-btn")
            .addEventListener("click", function(){
                close("quiz1-btn");
            });
    });

function close(id){
    if(id.includes("quiz")){
        let id2 = id.substr(0,id.indexOf("-"));
        document.getElementById(id2).hidden = true;
        document.getElementById(id).hidden = false;
    }
   
}

quiz_ref.once('value', function(snapshot){
    snapshot.forEach(function(childsnapshot){
        console.log(childsnapshot.key);  
        
    });
 });
