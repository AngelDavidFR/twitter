const User= require('./../services/UserService')
class UserView{
static createUser(payload){
let result={error:"",valid:false}
let keys=['username','name','id']

if(payload==null) {result.valid=false;result.error="payload no existe";return result}
else if(hasNull(payload)==true){result.valid=false;result.error="necesitan tener un valor válido";return result}
else{result.valid=true}
if((result.valid==true)&&(checkKeys(payload)!=true)){result.error="necesitan tener un valor válido";return result}

}}


function hasNull(target) {
    for (var member in target) {
      if (target[member] == null) return true;
    }
    return false;
  }

  function checkKeys(obj){
    let keyList = Object.keys(obj)
    let keysToFind = ["username", "id", "name"]
    let result = []
    keysToFind.forEach(key => {
        if(keyList.includes(key)){
            result.push(true)
        }
        else{
            result.push(false)
        }
    })
    return result.every(ele => ele === true)
}

module.exports=UserView

