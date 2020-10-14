/**
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 * 注意：答案中不可以包含重复的四元组。
 * 示例：给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0.
 * 满足要求的四元组集合为：
 * [
 *  [-1,  0, 0, 1],
 *  [-2, -1, 1, 2],
 *  [-2,  0, 0, 2]
 * ]
 * 思路：排序、递归
 */
function findArray(arr, target, count) {
	var result = []
	function recurs(start, leftOver, selection) {
		if (leftOver < 0) {
			return
		}
		if (selection.length === count && leftOver === 0) {
			result.push(selection)
			return
		}
		for (var i = start; i < arr.length; i++) {
			recurs(i, leftOver - arr[i], selection.concat(arr[i]))
		}
	}
	recurs(0, target, [])
	return result
}
const res = findArray([1, 2, 3, 4, 5], 7, 3)
console.log(res)
