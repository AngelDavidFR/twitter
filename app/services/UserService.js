const User= require('./../models/User')

class UserService{
    static create(id,username,name){
        return new User(id,username,name,"Sin bio")
    }
    static getInfo(user){
        return new Array(user.id,user.username,user.name,user.bio)
    }
    static updateUserUsername(user,newUsername){
        user.setUsername=newUsername
    }
    static getAllUsernames(allUsers){
        let allUserReturn=[]
        allUsers.forEach((element,index) => {
            allUserReturn[index]=element.username
        });
        return allUserReturn
    }
}

module.exports=UserService