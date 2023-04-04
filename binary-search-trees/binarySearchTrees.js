class Tree {
    constructor(root, array = []) {
        this.root = root
        this.array = array;
    }
}

class Node {
    constructor(data = null, left = null, right = null) {
        this.data = data
        this.left = left
        this.right = right
    }
}

function buildTree(array) {
    let sortedArray = mergeSort(array);
    let noDuplicates = [];
    //removes duplicates
    sortedArray.forEach((element) => {
        if (!noDuplicates.includes(element)) {
            noDuplicates.push(element);
        }
    });


    
    return noDuplicates;
}

function merge(left, right) {
    let sortedArr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr, ...left, ...right]
}

function mergeSort(array) {

    if (array.length == 1) {
        return array;
    }
    let mid = Math.floor(array.length / 2)
    let left = mergeSort(array.slice(0, mid))
    let right = mergeSort(array.slice(mid));
    return merge(left, right)
}

console.log(buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]));

