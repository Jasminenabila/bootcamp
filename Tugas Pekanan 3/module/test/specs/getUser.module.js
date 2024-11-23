import request from "supertest";
import { expect } from "chai";
import { loginAuth } from "../function/loginAuth.spec.js";
import { getBaseUrl } from "../function/getBaseUrl.spec.js";

const userAuth = await loginAuth()
const baseUrl = await getBaseUrl();

const token = userAuth.accessToken;

describe("Get User", () => {
  it("Positive - Get List", async () => {
    //send request
    const response = await request(baseUrl)
      .get("/users") //endpoint
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${token}`);

    console.log("Response Body:", response.body);

    expect((await response).status).to.equal(200)
    expect(await (response.body.status, "success"));
    // expect(await (response.body.data.user.id, userId));

  });

  it("Negatif - Get User url is fail", async () => {
    //send request
    const response = await request(baseUrl)
      .get("/users1/") //endpoint
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${token}`);

    console.log("Response Body:", response.body);

    expect((await response).status).to.equal(404)
    expect(await (response.body.status, "fail"));
    expect(await (response.body.message, "Not Found"));

  });

  

});
