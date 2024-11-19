//Ini adalah contoh api automation menggunakan ES module js
import request from "supertest";
import { expect } from "chai";
// import { getBooking } from "../function/getBooking.spec.js";

const baseUrl = "https://restful-booker.herokuapp.com";
const paramFirstName = "sally"
const paramLastName = "brown"
const bookingId = "78"

//Describe the test suite
describe("Get All Booking", () => {
    it('Positive - success get all booking', async () => {
        let response = await request(baseUrl) //base url
            .get("/booking") //endpoint

        //Assertion pake chai
        console.log(response.status)
        expect((await response).status).to.equal(200)
    })

    it('Positive - success get all booking with param', async () => {
        let response = await request(baseUrl) //base url
            .get(`/booking`+`?firstname=${paramFirstName}`) //endpoint with query params

        //Assertion pake chai
        expect((await response).status).to.equal(200)
    })

    it('Positive - success get booking id', async () => {
        let response = await request(baseUrl) //base url
            .get(`/booking/${bookingId}`) //endpoint with id path 

        //Assertion pake chai
        expect((await response).status).to.equal(200)
    })
})