const User=require('./../../app/models/User')
describe("Unit Test for User class",()=>{
test('Create an User object',()=>{

const user=new User(1,"AngelD_FloresR","Angel","Bio","dateCreated","lastUpdated")

expect(user.id).toBe(1)
expect(user.username).toBe("AngelD_FloresR")
expect(user.name).toBe("Angel")
expect(user.bio).toBe("Bio")
expect(user.dateCreated).toBe("dateCreated")
expect(user.lastUpdated).toBe("lastUpdated")



});


})