const User = require('../../app/models/User')
const UserService=require('./../../app/services/UserService')
describe("Test for UserService",()=>{

    test("1. Create a new user using the UserService",()=>{
        const user= UserService.create(1,"AngelD_FloresR","Angel")
        expect(user.username).toBe("AngelD_FloresR")
        expect(user.name).toBe("Angel")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
    test("2. get all user data in a list",()=>{
        const user=UserService.create(1,"AngelD_FloresR","Angel")
        const userInfoInList=UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("AngelD_FloresR")
        expect(userInfoInList[2]).toBe("Angel")
        expect(userInfoInList[3]).toBe("Sin bio")       
    })
    test("3. Update username",()=>{
        const user = UserService.create(1,"AngelD_FloresR","Angel")
        UserService.updateUserUsername(user,"Angel_Flores")
        expect(user.username).toBe("Angel_Flores")
    })

})