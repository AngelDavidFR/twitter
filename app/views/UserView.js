const User= require('./../services/UserService')
class UserView{
static createUser(payload){
let result={error:""}
if(payload!=null){

}else{
    result.error="payload no existe"
    return result
}
}
}
module.exports=UserView

