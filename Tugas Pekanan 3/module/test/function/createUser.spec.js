import request from "supertest";
import { getBaseUrl } from "./getBaseUrl.spec.js";

export async function createUser(
  token = "",
  email = "",
  password = "",
  name = ""
) {
  const baseUrl = await getBaseUrl();
  let payload = {
    name: name,
    email: email,
    password: password,
  };

  const response = await request(baseUrl)
    .post("/users")
    .send(payload)
    .set("Content-Type", "application/json")
    .set("Authorization", `Bearer ${token}`);

  const data = response.body.data;
  return data;
}
