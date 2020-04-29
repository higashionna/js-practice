/**
 *  4.1 文字列の長さを返却するメソッドを実装してください
 *
 */

function length(str) {
    console.log(str.length)
}

/**
 *  4.2 文字列のながさが偶数の場合にtrueを返却するメソッドを実装してください
 *
 */

function lengthIsEven(str) {
    const isEven = str.length % 2 === 0
    return isEven
}

/**
 *  4.3 文字列の先頭一文字目を返却するメソッドを実装してください
 *
 */

function firstChar(str) {
    const firest = str.substr(0, 1)
    return firest
}

/**
 *  4.4 文字列と二つの数字a, bを渡すとa文字目から, b文字目まで
 *  を返却するメソッドを実装してください
 *
 */

function substring(str, a, b) {
    const sub = str.substr(a, b)
    return sub
}

/**
 *  4.5 引数に与えられた二つの引数のうち、一つ目の引数の文字列に二つ目の引数の文字列が
 *  含まれることを確認するメソッドを実装してください
 *
 *  example:
 *      "workplace", "work" => true
 *      "work", "workplace" => false
 *      "hogehoge", "" => true
 *      "hogegeho", "fugafuga" => false
 *
 */

function isInclude(a, b) {
    const is = a.includes(b)
    return is
}

/**
 *  4.6 引数に与えられたアルファベットの文字列が回文であること
 *  を確認するメソッドを実装してください
 *
 *  example:
 *      work => false
 *      anna => true
 *      madam => true
 *      level => true
 *
 */

function isPalindrome(str) {
    const palindrome = str.split("").reverse().join("")
    return str === palindrome

}
