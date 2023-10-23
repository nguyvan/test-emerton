import path from "path";
import fs from "fs";
import { Solution } from "@/module";

const filename = path.resolve(__dirname, "../../data/Tempest.txt");
const texts = fs.readFileSync(filename).toString();

describe("Count unique words in test", () => {
	beforeAll((done) => {
		done();
	});

	afterAll((done) => {
		done();
	});

	it("Test file and return value", () => {
		const solution = new Solution();
		const result = solution.countUniqueWord(texts);

		expect(result[0][0]).toEqual("and");
		expect(result[0][1]).toEqual(514);

		expect(result[1][0]).toEqual("the");
		expect(result[1][1]).toEqual(513);

		expect(result[2][0]).toEqual("i");
		expect(result[2][1]).toEqual(446);

		expect(result[3][0]).toEqual("to");
		expect(result[3][1]).toEqual(324);

		expect(result[4][0]).toEqual("a");
		expect(result[4][1]).toEqual(310);

		expect(result[5][0]).toEqual("of");
		expect(result[5][1]).toEqual(295);

		expect(result[6][0]).toEqual("my");
		expect(result[6][1]).toEqual(288);

		expect(result[7][0]).toEqual("you");
		expect(result[7][1]).toEqual(211);

		expect(result[8][0]).toEqual("that");
		expect(result[8][1]).toEqual(188);

		expect(result[9][0]).toEqual("this");
		expect(result[9][1]).toEqual(185);
	});
});
