var expect = chai.expect;

describe('MyFunctions', function () {
    describe('#dosomething', function () {
        it('should concatenate the two parameters', function () {
            var x = doSomething('Hello', 5);
            expect(x).to.equal('Hello5');
        });

        it('should throw an error if first parameter is nota  string', function () {
            expect(function () {
                doSomething(5, 5);
            }).to.throw(Error);
        })
    });
});