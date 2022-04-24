const UserServices=require('./../../app/services/UserService')
describe("Test for UserService",()=>{

    test("1. Create a new user using the UserService",()=>{
        const user= UserServices.create(1,"AngelD_FloresR","Angel")
        expect(user.username).toBe("AngelD_FloresR")
        expect(user.name).toBe("Angel")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
})