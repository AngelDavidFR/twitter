const User=require('./../../app/models/User')
describe("Unit Test for User class",()=>{
test('Create an User object',()=>{

const user=new User(1,"AngelD_FloresR","Angel","Bio")

expect(user.id).toBe(1)
expect(user.username).toBe("AngelD_FloresR")
expect(user.name).toBe("Angel")
expect(user.bio).toBe("Bio")
expect(user.dateCreated).not.toBeUndefined()
expect(user.lastUpdated).not.toBeUndefined()



});
test('Add getters',()=>{
    const user=new User(1,"AngelD_FloresR","Angel","Bio")
    expect(user.getUsername).toBe("AngelD_FloresR")
    expect(user.getBio).toBe("Bio")
    expect(user.getDateCreated).not.toBeUndefined()
    expect(user.getLastUpdated).not.toBeUndefined()
});

})