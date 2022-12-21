import * as jsonResponse from './jsonResponse';

describe('Unit test for utils: jsonResponse', function () {
    it('generates successful response', () => {
        const result = jsonResponse.success(null, 'success');
        expect(result.message).toEqual('success'), expect(result.copyright).toEqual('Copyright 2022, P33R');
    });

    it('generates failing response', () => {
        const result = jsonResponse.fail(null, 'fail');
        expect(result.message).toEqual('fail'), expect(result.copyright).toEqual('Copyright 2022, P33R');
    });
});
