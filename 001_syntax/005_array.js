/**
 *  5.1 配列の要素を全て表示するメソッドを実装してください
 *
 */

function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

/**
 *  5.2 全ての曜日を配列として返却するメソッドを実装してください
 *
 *  example:
 *     [
 *       "Monday",
 *       "Tuesday",
 *       "Wednesday",
 *       "Thurday",
 *       "Friday",
 *       "Saturday",
 *       "Sunday",
 *      ]
 *
 */
function getDays() {
    const Days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thurday",
        "Friday",
        "Saturday",
        "Sunday",
    ]
    return Days
}

/**
 *  5.3 配列に特定の数があった場合にtrue、そうでない場合にfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3], 1 => true
 *    [1, 2, 3], 5 => false
 *    [], 5 => false
 *
 */

function findNum(array, num) {
    const find = array.indexOf(num) !== -1
    return find
}

/**
 *  5.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3], 1 => false
 *    [1, 2, 2, 3], 5 => true
 *    [] => false
 *
 */

function isDuplicate(array) {
    const setArray = new Set(array)
    const isArray = array.length !== setArray.size
    return isArray
}

