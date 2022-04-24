const User= require('./../services/UserService')
class UserView{
static createUser(payload){
return new User(payload)
}
}
module.exports=UserView