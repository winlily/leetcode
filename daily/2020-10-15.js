/**
 * 题目：判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 难度：简单
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

/**
 * 题目：找出子字符串首次出现的位置
 * 难度：简单
 * 思路：循环遍历，字符串截取并与目标子字符串比较。
 */
function strStr(str, subStr) {
    if (subStr.length === 0) {
        return 0
    }
    for (var i = 0; i < str.length; i++) {
        var newStr = str.substr(i, subStr.length)
        if (newStr === subStr) {
            return i
        }
    }
    return -1
}