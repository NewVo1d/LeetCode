/*
 * @lc app=leetcode.cn id=1832 lang=javascript
 *
 * [1832] 判断句子是否为全字母句
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
	let state = 0;
	const length = sentence.length;
	for (let i = 0; i < length; i++) {
		state |= 1 << (sentence[i].charCodeAt() - 'a'.charCodeAt());
	}
	return state === (1 << 26) - 1;
};
// @lc code=end
