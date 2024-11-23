import request from "supertest";
import { expect } from "chai";
import { loginAuth } from "../function/loginAuth.spec.js";
import { getBaseUrl } from "../function/getBaseUrl.spec.js";
import { faker } from "@faker-js/faker";

const userAuth = await loginAuth()
const baseUrl = await getBaseUrl();

const token = userAuth.accessToken;
let name;
let email;
let passwordfaker;

describe("Create User", () => {
  it("Positive - Success Create User", async () => {

    name = faker.company.name();
    email = faker.internet.email();
    passwordfaker = faker.internet.password(12, true);

    let payload = {
      name: name,
      email: email,
      password: passwordfaker,
    };

    const response = await request(baseUrl)
      .post("/users") 
      .send(payload) 
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${token}`);

    console.log("Response Body:", response.body);

    expect((await response).status).to.equal(201)
    expect(await (response.body.status, "success"));
    expect((await response.body.message, "User berhasil ditambahkan"));
  });


  it("Negatif - Invalid Create User with all field is empty", async () => {
    const payload = {
      name: "",
      email: "",
      password: "",
    };
    console.log(payload);

    //send request
    const response = await request(baseUrl)
      .post("/users") //endpoint
      .send(payload) //request body
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${token}`);

    console.log("Response Body:", response.body);

    expect((await response).status).to.equal(400)
    expect((await response.body.status, "fail"));
    expect((await response.body.message, '"name" is not allowed to be empty'));
  });

});
