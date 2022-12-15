/*
 * @lc app=leetcode.cn id=1945 lang=javascript
 *
 * [1945] 字符串转化后的各位数字之和
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
	let number = '';
	for (let i = 0; i < s.length; i++) {
		number += s[i].charCodeAt() - 'a'.charCodeAt() + 1;
	}
	for (let i = 0; i < k && number.length > 1; i++) {
		let sum = 0;
		for (let j = 0; j < number.length; j++) {
			sum += number[j].charCodeAt() - '0'.charCodeAt();
		}
		// 转换为字符串
		number = '' + sum;
	}
	return Number(number);
};
// @lc code=end

console.log(getLucky('iiii', 1));
console.log(getLucky('leetcode', 2));
