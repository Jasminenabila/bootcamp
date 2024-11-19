const baseUrl = "https://restful-booker.herokuapp.com";

describe("Get Token Scenario", () =>{
    let token;
    let bookingId;
    it("Positive - Success Get Token", async () =>{
        const payload = {
            "username" : "admin",
            "password" : "password123"
        }
        //send request
        const response = await request (baseUrl)
            .post("/auth") //endpoint
            .send(payload)  //request body
            .set("Content-Type","application/json")  //header
        
        expect((await response).status).to.equal(200)
        token = (await response).body.token
        //console.log(await token)
    })

    it("Positive - Success Implement Token", async () =>{
        //PUT method
        const response = await request(baseUrl)
            .put("/booking/"+bookingId)
            .set("Cookie",token)
    })

    it("Import token", async () => {
        const token = await createToken()
        console.log(await token)
    })
})