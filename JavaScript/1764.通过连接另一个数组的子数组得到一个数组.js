/*
 * @lc app=leetcode.cn id=1764 lang=javascript
 *
 * [1764] 通过连接另一个数组的子数组得到一个数组
 */

// @lc code=start
/**
 * @param {number[][]} groups
 * @param {number[]} nums
 * @return {boolean}
 */
var canChoose = function (groups, nums) {
	let i = 0;
	for (let k = 0; k < nums.length && i < groups.length; ) {
		if (check(groups[i], nums, k)) {
			k += groups[i].length;
			i++;
		} else {
			k++;
		}
	}
	return i === groups.length;
};

const check = (g, nums, k) => {
	if (k + g.length > nums.length) {
		return false;
	}
	for (let j = 0; j < g.length; j++) {
		if (g[j] !== nums[k + j]) {
			return false;
		}
	}
	return true;
};
// @lc code=end
