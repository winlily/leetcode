/**
 * 题目：判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 思路：先转为字符串，再使用双指针。
 */
function checkIsPalindrome(num) {
    var str = num.toString()
    var i = 0,
        j = str.length - 1
    while (i < j) {
        if (str.charAt(i) !== str.charAt(j)) {
            return false
        }
        i++
        j--
    }
    return true
}
var res = checkIsPalindrome(-11211)