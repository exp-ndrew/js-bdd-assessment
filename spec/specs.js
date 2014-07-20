describe("splitter", function() {
	it("turns the input '1' into [[1]]", function() {
		splitter("1").should.eql([[1]]);
	});
});

describe("numbersToWords", function() {
	it("returns 'zero' if the user enters 0", function() {
		numbersToWords(0).should.equal("zero");
	});
});