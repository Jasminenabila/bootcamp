import request from "supertest";
import { getBaseUrl } from "./getBaseUrl.spec.js";

export async function loginAuth(
  email = "harpot1@email.com",
  password = "pass1234@"
) {
  const baseUrl = await getBaseUrl();
  const payload = {
    email: email, 
    password: password, 
  };

  const response = await request(baseUrl)
    .post("/authentications")
    .send(payload)
    .set("Content-Type", "application/json");

  const data = response.body.data;
  return data;
}
