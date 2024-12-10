import * as chai from 'chai';
import request from 'supertest';
import app from '../src/app.js';

const { expect } = chai;

describe('GET /api/hello', () => {
    it('should return Hello, World!', async () => {
        const res = await request(app).get('/api/hello');
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('message', 'provandos');
    });
});
