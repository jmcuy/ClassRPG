
//returns database ref so that we wont need to die because of the asynchronosity of Firebase
let promise = new Promise((resolve,reject)=>{
    guild_ref.once('value', function(snapshot){
        var temp = [];
        snapshot.forEach(function(childsnapshot){
            temp.push({id:childsnapshot.key, name: childsnapshot.child('course').val()})
               
        });
        resolve(temp);    //returns the array of values
    });

});


exports.validation = function(){
    for(let i = 0; i < guild_ref.keys.length;i++){
        if(guild_ref.keys[i] == key){
            return true
        }
    }
    return false
}


async function addSubject(){ //ONLY ADD SUBJECT THAT DOESNT EXIST YET
    let name = document.getElementById("subject").value //get input
    let new_name = name.replace(" ","").toLowerCase();
    
    let temp = await promise; //equivalent to promise.then((result)=> return result)
    if(typeof temp !== "undefined"){ //validation that we wont get an undefined database
        for(let i =0; i < temp.length;i++){
            console.log(temp[i],new_name)
            if(temp[i].id == new_name){ 
                alert("exist")
                return false;
            }
        }
        guild_ref.child(new_name).set({ //add to database
            course: name.toUpperCase()
        });
        alert("ADDED")
        return true; 
        
    }
    else {
        setTimeout(addSubject(),1000); //wait until we get the value
    }
    
}


async function submit(id){
    if(id == 'guild_key'){
        let guild_key = document.getElementById("guild_key").value
        // let key = validation(guild_key);    
    } else if(id == 'add-subject'){
        addSubject();
    }
   
}


exports.addSubject_test = async function(promise,name){ //TEST FUNCTION FOR ADDSUBJET()
    let new_name = name.replace(" ","").toLowerCase();
    let temp = await promise; //TEMP SUPPOSE TO CONTAIN DATABASE ELEMENTS UNDER 'GUILDS'
    if(typeof temp !== "undefined"){ //validation that we wont get an undefined database
        for(let i =0; i < temp.length;i++){
            console.log(temp[i],new_name)
            if(temp[i].id == new_name){ 
                //DONT ADD ANYTHING TO DB
                return false;
            }
        }
        //ADD TO DB CODE HERE 
        return true; 
        
    }
    else {
        setTimeout(addSubject(),1000); //wait until we get the value
    }
    
}
