/*
 * @lc app=leetcode.cn id=1785 lang=javascript
 *
 * [1785] 构成特定和需要添加的最少元素
 */
const _ = require('lodash');
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
var minElements = function (nums, limit, goal) {
	const sum = _.sum(nums);
	const diff = Math.abs(sum - goal);
	return Math.abs(Math.floor((diff + limit - 1) / limit));
};
// @lc code=end
console.log(minElements([1, -1, 1], 3, -4));
console.log(minElements([1, -10, 9, 1], 100, 0));
