const User= require('./../services/UserService')
class UserView{
static createUser(payload){
let result={error:""}
// const anyNull=true
if(payload!=null){
if(hasNull(payload)!=true){

}else{
    result.error="necesitan tener un valor válido"
    return result
}
}else{
    result.error="payload no existe"
    return result
}}}
function hasNull(target) {
    for (var member in target) {
      if (target[member] == null) return true;
    }
    return false;
  }
  
module.exports=UserView

