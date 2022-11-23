const express = require('express');
const request = require('supertest');
const userRoute = require('../routes/router');
const app = express();

app.use(express.json());
app.use(userRoute);

describe('Test User Routes', () => {
    test('Get User', async () => {
        await request(app)
            .get('/')
            .expect(200)
            .then((response) => {
                expect(response.body.message).toEqual('GET_SUCCESS');
            });
    });

    test('Get User by ID', async () => {
        await request(app)
        .get('/57')
        .expect(200)
        .then((response) => {
            expect(response.body.message).toEqual('GET by ID - Success');
            expect(response.body.id).toEqual('57');
        });
    });
});
