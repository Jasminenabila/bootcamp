import request from "supertest";
import { expect } from "chai";
import { loginAuth } from "../function/loginAuth.spec.js";
import { getBaseUrl } from "../function/getBaseUrl.spec.js";
import { createUser } from "../function/createUser.spec.js";
import { faker } from "@faker-js/faker";

const userAuth = await loginAuth();
const baseUrl = await getBaseUrl();
console.log(userAuth)
const token = userAuth.accessToken;

let newUserId;


describe("Update User", () => {
  it("Positive - Success Update User", async () => {

    let name = faker.company.name();
    let email = faker.internet.email();
    let password = faker.internet.password(12, true);

    const newUser = await createUser(token, email, password, name);
    newUserId = newUser.userId;

    let newName = faker.company.name();
    let newEmail = faker.internet.email();

    let payload = {
      name: newName,
      email: newEmail
    };

    const response = await request(baseUrl)
      .put("/users/" + newUserId) 
      .send(payload) 
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${token}`);

    console.log("Response Body:", response.body);

    expect((await response).status).to.equal(200)
    expect(await (response.body.status, "success"));
    expect((await response.body.message, "User berhasil diupdate"));
    expect((await response.body.data.name, newName));
    expect((await response.body.data.email, newEmail));
  });


});
