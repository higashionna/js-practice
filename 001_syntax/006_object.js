/**
 *  6.1 下記データを持ったオブジェクトを返す関数を実装してください。
 *
 *  name: 'Bob'
 *  age: 32
 *  gender: 'male'
 *
 */

function getPersonObject() {
    const person = {
        name: 'bob',
        age: 32,
        gender: 'male',
    }
    return person
}

/**
 *  6.2 下記データAが引数で与えられた場合にデータBに書き換える関数を実装してください。
 *
 *  Data A:
 *    name: 'Bob'
 *    age: 32
 *    gender: 'male'
 *  Data B:
 *    name: 'Mary'
 *    age: 37
 *    gender: 'female'
 *
 */

function mutateObject(person) {
    let dataA = person
    const dataB = {
        name: 'Mary',
        age: 37,
        gender: 'female',
    }
    dataA = Object.assign(dataA, dataB)
    return dataA
}

/**
 *  6.3 下記引数で渡される配列にランダムな1 ~10の数字を割り振り、オブジェクトとして返す
 *      関数を実装してください
 *
 *    [
 *      'Bob',
 *      'Mary',
 *      'Ann',
 *      'Mike'
 *    ]
 *
 *   output:
 *     {
 *       Bob: [Random Number],
 *       Mary: [Random Number],
 *       Ann: [Random Number],
 *       Mike: [Random Number]
 *     }
 *
 */

function assignNumber(persons) {
    let assign = {}
    persons.forEach(person => {
        assign[person] = Math.trunc(Math.random() * 10)
    })
    return assign
}


/**
 *  6.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *      但し、オブジェクトを使って実装すること
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