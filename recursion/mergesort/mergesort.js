function merge(left, right) {
    let sortedArr = []
    while (left.length && right.length) {
        // Insert the smallest item into sortedArr
        if (left[0] < right[0]) {
            //with shift we remove first element and push that to sorted array
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }
    // Use spread operators to create a new array, combining the three arrays
    return [...sortedArr, ...left, ...right]
}

function mergeSort(array) {

    if (array.length == 1) {
        return array;
    }
    let mid = Math.floor(array.length / 2)
    // call mergeSort until there is 1 element left,
    // then we send left and right of that element and we return a sorted array
    // that sorted 2 arrays are sent to merge again and again until everything is sorted
    // we send 5, 9 we sort it and it returns 5,9 as sorted
    // we send 7, 4 we sort it and it returns 4,7 sorted
    // we send 5,9 and 4,7 and it sorts until everything is sorted
    let left = mergeSort(array.slice(0, mid))
    let right = mergeSort(array.slice(mid));
    return merge(left, right)
}


console.log(mergeSort([5, 9, 7, 4]));