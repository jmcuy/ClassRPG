
// function validation(key){
   
//     guild_ref.once('value', function(snapshot){
//         snapshot.forEach(function(childsnapshot){
//             // console.log(childsnapshot.key);
//             if(childsnapshot.key == key){
              
//                 return key;
//             }  
            
//         });
//         return -1;
//     });
// }
let guild_ref = {keys:["1","2","3"]}
exports.validation = function(guild_ref,key){
    for(let i = 0; i < guild_ref.keys.length;i++){
        if(guild_ref.keys[i] == key){
            return true
        }
    }
    return false
}
function submit(){
    let guild_key = document.getElementById("guild_key").value
    let key = validation(guild_key);
    
    
}