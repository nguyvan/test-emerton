import { Solution } from "./module";
import path from "path";
import fs from "fs";

function main() {
	const solution = new Solution();
	const filename = "../data/Tempest.txt";
	const texts = fs.readFileSync(path.resolve(__dirname, filename)).toString();
	const result = solution.countUniqueWord(texts);
	console.log("Top 10 the most frequent words with theirs occurrences: ");
	for (let i = 0; i < result.length; i++) {
		console.log(`${result[i][0]}(${result[i][1]})`);
	}
}

main();
