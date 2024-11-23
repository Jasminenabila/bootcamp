import request from "supertest";
import { expect } from "chai";
import { loginAuth } from "../function/loginAuth.spec.js";
import { getBaseUrl } from "../function/getBaseUrl.spec.js";

const userAuth = await loginAuth()
const baseUrl = await getBaseUrl();

const token = userAuth.accessToken;
const userId = userAuth.user.id;

describe("Get User Detail", () => {
  it("Positive - Get User Detail", async () => {
    //send request
    const response = await request(baseUrl)
      .get("/users/"+userId)
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${token}`);

    console.log("Response Body:", response.body);

    expect((await response).status).to.equal(200)
    expect(await (response.body.status, "success"));
    expect(await (response.body.data.user.id, userId));

  });

  it("Negatif - Get User Detail is not found", async () => {
    //send request
    const response = await request(baseUrl)
      .get("/users/lalalala") //endpoint
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${token}`);

    console.log("Response Body:", response.body);

    expect((await response).status).to.equal(404)
    expect(await (response.body.status, "fail"));
    expect(await (response.body.message, "id tidak valid"));

  });

});
