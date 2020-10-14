/**
 * 题目: 给定一个字符串，找出无重复字符的最长子串
 */
function getSubString(str) {
    // 无重复字符串最大长度
    var maxLen = 0
    for (var i = 0; i < str.length; i++) {
        // 本次循环获取的最长字符串长度
        var sub = str.charAt(i)
        var len = sub.length
        for (var j = i + 1; j < str.length; j++) {
            if (sub.indexOf(str.charAt(j)) == -1) {
                len++
                sub = sub + str.charAt(j)
                maxLen = maxLen >= len ? maxLen : len
            } else {
                break
            }
        }
    }
    return maxLen
}
var subLen = getSubString("pwwkewwwww")
console.log(subLen)