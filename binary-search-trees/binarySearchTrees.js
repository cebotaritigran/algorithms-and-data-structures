class Node {
    constructor(data = null, left = null, right = null) {
        this.data = data
        this.left = left
        this.right = right
    }
}

class Tree {
    constructor(array) {
        this.root = this.buildTree(array);
    }

    buildTree(array) {

        if (array.length == 0) {
            return null;
        }
        let mid = Math.floor(array.length / 2)
        let node = new Node(array[mid]);
        node.left = this.buildTree(array.slice(0, mid))
        node.right = this.buildTree(array.slice(mid + 1))
        return node;
    }

    insert(value, root = this.root) {
        if (root == null) {
            let node = new Node(value, null, null);
            root = node
            return root;
        }
        if (value < root.data) {
            root.left = this.insert(value, root.left)
        } else if (value > root.data) {
            root.right = this.insert(value, root.right)
        }
        return root
    }

    minValue(root = this.root) {
        let minV = root.data;
        while (root.left != null) {
            minV = root.left.data;
            root = root.left
        }
        return minV;
    }

    delete(value, root = this.root) {
        if (root == null)
            return root;
        if (value < root.data)
            root.left = this.delete(value, root.left);
        else if (value > root.data)
            root.right = this.delete(value, root.right);
        else {
            if (root.left == null)
                return root.right;
            else if (root.right == null)
                return root.left;
            root.data = this.minValue(root.right);
            root.right = this.delete(root.data, root.right);
        }
        return root;
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

//TESTS
let tree = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
let array = sortAndRemoveDuplicates(tree)
let trees = new Tree(array)

//console.log(trees.buildTree(array));
//console.log(trees.insert(2, trees.buildTree(array)));
//console.log(prettyPrint(trees.buildTree(array)))
//console.log(prettyPrint(trees.insert(2, trees.buildTree(array))));
trees.insert(2)
trees.delete(8)
console.log(prettyPrint(trees.root));




