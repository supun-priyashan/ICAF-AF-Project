require('dotenv').config();
const mongoose = require("mongoose");
const PaperService = require("../services/paper.service");

describe("Get All Papers", () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGODB_URI, {
            useCreateIndex:true,
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        })
    });

    test("Get all Papers", async() => {
        const papers = await PaperService.returnAllPapers();
        expect(papers).toEqual(expect.arrayContaining(papers));
    });

    afterAll(async done => {
        await mongoose.disconnect();
        done();
    });

});
