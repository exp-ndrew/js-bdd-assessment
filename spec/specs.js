describe("splitter", function() {
	it("turns the input '1' into [[1]]", function() {
		splitter("1").should.eql([[1]]);
	});
	it("turns the input '123' into [[1,2,3]]", function() {
		splitter("123").should.eql([[1,2,3]]);
	});
	it("turns the input '1234' into [[1],[2,3,4]]", function() {
		splitter("1234").should.eql([[1],[2,3,4]]);
	});
	it("turns the input '1234567' into [[1],[2,3,4],[5,6,7]]", function() {
		splitter("1234").should.eql([[1],[2,3,4]]);
	});
	it("turns the input '1234567890' into [[1],[2,3,4],[5,6,7],[8,9,0]]", function() {
		splitter("1234").should.eql([[1],[2,3,4]]);
	});
});

describe("numbersToWords", function() {
	it("returns 'zero' if the user enters 0 (hard-coded zero validation works)", function() {
		numbersToWords(0).should.equal("zero");
	});
	it("returns 'one' if the user enters 1 (1-9 work)", function() {
		numbersToWords(1).should.equal("one");
	});
	it("returns 'eleven' if the user enters 11 (11-19 work)", function() {
		numbersToWords(11).should.equal("eleven");
	});
	it("returns 'twenty' if the user enters 20 (20/30/40/.../90 work)", function() {
		numbersToWords(20).should.equal("twenty");
	});
	it("returns 'twenty one' if the user enters 21 (tensWords + onesWords works)", function() {
		numbersToWords(21).should.equal("twenty one");
	});
	it("returns 'one hundred' if the user enters 100 (means 0's in [l-2] and [l-1] are disregarded)", function() {
		numbersToWords(100).should.equal("one hundred");
	});
	it("returns 'one hundred one' if the user enters 101 (means nonzero numbers in [l-1] following a 0 in [l-2] are still printed in output)", function() {
		numbersToWords(101).should.equal("one hundred one");
	});
	it("returns 'one hundred eleven' if the user enters 111 (111-119 work)", function() {
		numbersToWords(111).should.equal("one hundred eleven");
	});
	it("returns 'one hundred twenty' if the user enters 120 (120-190 work)", function() {
		numbersToWords(120).should.equal("one hundred twenty");
	});
	it("returns 'one hundred twenty one' if the user enters 121 (121-199 work)", function() {
		numbersToWords(121).should.equal("one hundred twenty one");
	});
	it("returns 'one thousand' if the user enters 1000 (thousand word is printed; zeros are disregarded; comma is not present at the end of 'thousand,')", function() {
		numbersToWords(1000).should.equal("one thousand");
	});
	it("returns 'eleven thousand' if the user enters 11000 (bigArray[i]'s with [0,0,0] don't get printed)", function() {
		numbersToWords(11000).should.equal("eleven thousand");
	});
	it("returns 'one thousand one' if the user enters 1001 (middle zeroes are evaluated properly after a powerWord)", function() {
		numbersToWords(1001).should.equal("one thousand, one");
	});
	it("returns 'one million' if the user enters 1000000 (million word is printed; zeroes are disregarded)", function() {
		numbersToWords(1000000).should.equal("one million");
	});
	it("returns 'one billion' if the user enters 1000000000 (billion word is printed; zeroes are disregarded)", function() {
		numbersToWords(1000000000).should.equal("one billion");
	});
	it("returns 'one trillion' if the user enters 1000000000000 (trillion word is printed; zeroes are disregarded)", function() {
		numbersToWords(1000000000000).should.equal("one trillion");
	});
});