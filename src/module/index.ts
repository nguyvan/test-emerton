export class Solution {
	countUniqueWord(texts: String): Array<[string, number]> {
		const mapStr = new Map<string, number>();
		let result: Array<[string, number]> = [];
		// normalize words to lowercase and replace special letters by space
		texts = texts.toLowerCase().replace(/[\[\]\(\)\.\{\},!;:?&\|]/g, " ");
		const words = texts.split(/\s+/);
		for (const word of words) {
			const NbExistedWord = mapStr.get(word);
			mapStr.set(word, NbExistedWord ? NbExistedWord + 1 : 1);
		}
		const sortedArray = Array.from(mapStr.entries()).sort(
			(a: [string, number], b: [string, number]) => b[1] - a[1]
		); // O(nlogn)
		for (let i = 0; i < 10; i++) {
			if (i < sortedArray.length) {
				result.push(sortedArray[i]);
			}
		}
		return result;
	}
}
