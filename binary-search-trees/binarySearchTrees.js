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
        // base case if root is null return root
        if (root == null) {
            return root;
        }
        // if value is smaller then current node data that it is the left subtree
        if (value < root.data) {
            //call function recursivly on left subtree
            root.left = this.delete(value, root.left);
        }
        // if value is bigger then the current node data than it is the right subtree
        else if (value > root.data) {
            //call function recursivly on right subtree
            root.right = this.delete(value, root.right);
        }
        // if its current node's data then we check with which node we have to replace it
        else {
            // checking if we can replace it with left node first which will be smaller than current node and that wouldn't break order
            // if not we return right node
            if (root.left == null) {
                return root.right;
            }
            // checking if the right node exist if it does we return it if not we return left node
            else if (root.right == null) {
                return root.left;
            }
            //if both are not null we get the min value and assign it to current data
            root.data = this.minValue(root.right);
            // then we call delete function again
            root.right = this.delete(root.data, root.right);
        }
        return root;
    }

    // we pass value and our tree, then we check if the value is smaller than root.data if it is we have to search
    // left subtree if not then right subtree and then we ask if the value is data if it is return it if not keep searching
    find(value, root = this.root) {
        if (root == null) {
            return null;
        }
        if (value < root.data) {
            return root.left = this.find(value, root.left)
        } else if (value > root.data) {
            return root.right = this.find(value, root.right)
        } else {
            return root;
        }
    }

    levelOrder(callback) {
        if (this.root == null) {
            return;
        }
        let queue = [this.root];
        console.log(queue)
        while (queue.length != 0) {
            console.log(queue[0].data);
            if (queue[0].left != null) {
                queue.push(queue[0].left);
            }
            if (queue[0].right != null) {
                queue.push(queue[0].right);
            }
            queue.shift();
        }

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

trees.insert(2)
trees.delete(8)
console.log(prettyPrint(trees.root));
//console.log(trees.find(1));
console.log(trees.levelOrder());




