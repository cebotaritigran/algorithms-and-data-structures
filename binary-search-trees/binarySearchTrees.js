class Node {
    constructor(data = null, left = null, right = null) {
        this.data = data
        this.left = left
        this.right = right
    }
}

class Tree {
    constructor(array = [], root = null) {
        this.array = array;
        this.root = root
    }

    buildTree(array) {

        if (array.length == 0) {
            return null;
        }
        let mid = Math.floor(array.length / 2)
        let node = new Node(array[mid]);
        this.array.push(node)
        node.left = tree.buildTree(array.slice(0, mid))
        node.right = tree.buildTree(array.slice(mid + 1))
        return node;
    }
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

function sortAndRemoveDuplicates(array) {
    array = mergeSort(array);
    let newArray = [];
    array.forEach((element) => {
        if (!newArray.includes(element)) {
            newArray.push(element);
        }
    });
    return newArray;
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}
let tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
let array = sortAndRemoveDuplicates(tree.array)
console.log(tree.buildTree(array));
console.log(prettyPrint(tree.buildTree(array)))


