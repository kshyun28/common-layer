import * as jsonResponse from './jsonResponse';

describe('Unit test for utils: jsonResponse', function () {
    const headers = {
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Origin': '*',
    }
    it('generates successful response', () => {
        const result = jsonResponse.generateResponse(200, headers, 'success', null);
        const body = JSON.parse(result.body)
        expect(result.statusCode).toEqual(200);
        expect(result.headers).toEqual(headers);
        expect(body.message).toEqual('success');
    });

    it('generates failing response', () => {
        const result = jsonResponse.generateResponse(400, headers, 'fail', null);
        const body = JSON.parse(result.body)
        expect(result.statusCode).toEqual(400);
        expect(result.headers).toEqual(headers);
        expect(body.message).toEqual('fail');
    });
});
