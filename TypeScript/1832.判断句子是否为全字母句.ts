/*
 * @lc app=leetcode.cn id=1832 lang=typescript
 *
 * [1832] 判断句子是否为全字母句
 */

// @lc code=start
function checkIfPangram(sentence: string): boolean {
	const set = new Set();
	for (let i = 0; i < sentence.length; i++) {
		set.add(sentence.charAt(i));
	}
	return set.size === 26;
}
// @lc code=end
