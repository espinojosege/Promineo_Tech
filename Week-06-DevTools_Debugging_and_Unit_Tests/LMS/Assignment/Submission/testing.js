var expect = chai.expect;

describe('Create Test for class Player', function () {
    describe('class Player', function () {
        it('Should return player name and points', function () {
            let jose = new Player('Jose')
            jose.points.push(1)
            var x = jose.describe();
            expect(x).to.equal('Jose Points: 1');
        });

        it('Should return the player name and points', function () {
            let notJose = new Player('notJose');
            notJose.points.push(4)
            notJose.points.push(1)
            var x = notJose.describe();
            expect(x).to.equal('notJose Points: 2')
        })
    });
});