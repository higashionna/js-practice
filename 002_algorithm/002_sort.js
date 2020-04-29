/**
 *  2.2.1 バブルソート
 *
 *  バブルソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function bubbleSort(array) {
  for (let outer = 0; outer < array.length - 1; outer++) {
    for (let i = array.length - 1; i > outer; i--) {
      if (array[i] < array[i - 1]) {
        tmp = array[i]
        array[i] = array[i - 1]
        array[i - 1] = tmp
      }
    }
  }
  return array
}

/**
 *  2.2.2 挿入ソート
 *
 *  挿入ソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function insertSort(array) {
  for (let i = 0; i < array.length; i++) {
    tmp = array[i]
    if (array[i - 1] > tmp) {
      let j = i
      while (j > 0 && array[j - 1] > tmp) {
        array[j] = array[j - 1]
        j--
      }
      array[j] = tmp
    }
  }
  return array
}

/**
 *  2.2.3 マージソート
 *
 *  マージソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function margeSort(array) {
  if (array.length < 2) return array
  var left = margeSort(array.splice(0, array.length >>> 1)), right = margeSort(array.splice(0))
  while (left.length && right.length)
    array.push(left[0] <= right[0] ? left.shift() : right.shift())
  return array.concat(left, right)
}

/**
 *  2.2.4 クイックソート
 *
 *  クイックソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function quickSort(array, start = 0, end = (array.length - 1)) {
  (function sort(start, end) {
    if (start >= end) {
      return
    }
    var left = start
    var right = end
    var middle = array[Math.round((left + right) / 2)]

    while (left < right) {
      if (array[left] >= middle) {
        while (right > left) {
          if (array[right] <= middle) {
            var tmp = array[left]
            array[left] = array[right]
            array[right] = tmp
            right--
            break
          }
          right--
        }
      }
      left++
    }
    if (array[right] > middle) {
      sort(start, right - 1)
      sort(right, end)
    } else if (array[right] < middle) {
      sort(start, right)
      sort(right + 1, end)
    } else {
      sort(start, right - 1)
      sort(right + 1, end)
    }
  })(start, end)
  return array
}
