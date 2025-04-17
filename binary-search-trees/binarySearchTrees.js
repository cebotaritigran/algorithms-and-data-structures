import { merge, mergeSort } from "../recursion/mergesort.js";
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(root, isBalancedCheck) {
        this.root = null;
        this.isBalancedCheck = true;
    }

    // This function will build a binary search tree from an array
    // It will sort the array and remove duplicates
    // It will then create the binary search tree
    // It will return the root of the tree 
    #treeBuilder(sortedArray, start, end) {
        if (start > end) {
            return null;
        }

        // Find the middle index
        let mid = Math.floor((start + end) / 2);

        // Create the root node
        // Set the left and right child of the root node
        // Call the treeBuilder function recursively to create the left and right subtrees
        // Return the root node
        let root = new Node(sortedArray[mid]);
        if (this.root == null) {
            this.root = root;
        }
        root.left = this.#treeBuilder(sortedArray, start, mid - 1);
        root.right = this.#treeBuilder(sortedArray, mid + 1, end)
        return root;
    }

    buildTree(array, start, end) {
        // Sort the array
        let sortedArray = mergeSort(array);
        // Remove duplicates
        for (let i = 0; i < sortedArray.length; i++) {
            if (sortedArray[i] === sortedArray[i + 1]) {
                sortedArray.splice(i, 1);
            }
        }
        // Build the tree
        // Call the treeBuilder function
        // Pass the sorted array and the start and end index
        // Return the root of the tree
        return this.#treeBuilder(sortedArray, 0, sortedArray.length - 1);
    }

    // If the tree is not empty, we will find the correct position to insert the new node
    // We will start from the root node and traverse the tree
    // We will compare the value of the new node with the value of the current node
    // If the value is less than the current node, we will go to the left child
    // If the value is greater than the current node, we will go to the right child
    // If the left child is null, we will insert the new node there
    insert(value) {
        let newNode = new Node(value);
        if (this.root == null) {
            this.root = newNode;
            return this.root;
        }

        let currentNode = this.root;
        while (currentNode != null) {
            if (value < currentNode.data) {
                if (currentNode.left == null) {
                    currentNode.left = newNode;
                    return this.root;
                } else {
                    currentNode = currentNode.left;
                }
            } else if (value > currentNode.data) {
                if (currentNode.right == null) {
                    currentNode.right = newNode;
                    return this.root;
                } else {
                    currentNode = currentNode.right;
                }
            } else {
                return this.root;
            }
        }
    }

    deleteItem(value) {
        let currentNode = this.root;
        let previousNode = null;
        while (currentNode != null && currentNode.data != value) {

            if (value < currentNode.data) {
                previousNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.data) {
                previousNode = currentNode;
                currentNode = currentNode.right;
            }
        }

        // Case no.1 
        // If the node to be deleted is a leaf node
        // We will just remove the node
        if (currentNode.left == null && currentNode.right == null) {
            if (previousNode.left == currentNode) {
                previousNode.left = null;
            } else if (previousNode.right == currentNode) {
                previousNode.right = null;
            }
            return this.root;
        }

        // Case no.2
        // If the node to be deleted has only one child
        // We will replace the node with its child
        if (currentNode.left != null && currentNode.right == null) {
            if (previousNode.data < currentNode.data) {
                previousNode.right = currentNode.left;
            } else {
                previousNode.left = currentNode.left;
            }
            return this.root;
        } else if (currentNode.left == null && currentNode.right != null) {
            if (previousNode.data < currentNode.data) {
                previousNode.right = currentNode.right;
            } else {
                previousNode.left = currentNode.right;
            }
            return this.root;
        } else {
            // Case no.3
            // The trick is to find the inorder successor of the node. 
            // Copy contents of the inorder successor to the node, and delete the inorder successor.
            let tmp = currentNode.right;

            while (tmp.left != null) {
                previousNode = tmp;
                tmp = tmp.left;

            }
            currentNode.data = tmp.data;
            if (tmp.right != null) {
                previousNode.left = tmp.right;
            } else {
                previousNode.left = null;
            }
        }
        return this.root
    }

    find(value) {
        let currentNode = this.root;
        while (currentNode != null && currentNode.data != value) {
            if (value < currentNode.data) {
                currentNode = currentNode.left;
            } else if (value > currentNode.data) {
                currentNode = currentNode.right;
            }
        }
        return currentNode
    }


    // breadth first tree traversal
    levelOrder(callback) {
        if (!callback) {
            throw new Error("no callback function");
        }
        let queue = [];
        let arrayToBalance = []
        queue.push(this.root);
        arrayToBalance.push(this.root.data);
        console.log(queue)
        while (queue.length != 0) {
            let currentNode = queue[0];
            callback(currentNode)

            if (currentNode.left != null) {
                queue.push(currentNode.left);
                arrayToBalance.push(currentNode.left.data);
            }
            if (currentNode.right != null) {
                queue.push(currentNode.right);
                arrayToBalance.push(currentNode.right.data);
            }
            queue.shift();
        }
        return arrayToBalance;
    }

    // depth first tree traversal
    preOrder(callback, currentNode = this.root) {
        if (!callback) {
            throw new Error("no callback function");
        }

        if (currentNode == null) {
            return;
        }
        callback(currentNode);
        this.preOrder(callback, currentNode.left);
        this.preOrder(callback, currentNode.right);
    }

    inOrder(callback, currentNode = this.root) {
        if (!callback) {
            throw new Error("no callback function");
        }

        if (currentNode == null) {
            return;
        }
        this.inOrder(callback, currentNode.left);
        callback(currentNode);
        this.inOrder(callback, currentNode.right);

    }

    postOrder(callback, currentNode = this.root) {
        if (!callback) {
            throw new Error("no callback function");
        }

        if (currentNode == null) {
            return;
        }

        this.postOrder(callback, currentNode.left);
        this.postOrder(callback, currentNode.right);
        callback(currentNode);
    }

    depth(value) {
        let depth = null;
        let currentNode = this.root;
        if (currentNode.data == value) {
            depth++;
        }
        while (currentNode != null && currentNode.data != value) {
            if (value < currentNode.data) {
                currentNode = currentNode.left;
                depth++;
            } else if (value > currentNode.data) {
                depth++;
                currentNode = currentNode.right;
            }
        }
        if (depth != null) {
            return depth
        }
        return depth
    }

    height(value) {
        let height = null;
        let currentNode = this.root;
        while (currentNode != null && currentNode.data != value) {
            if (value < currentNode.data) {
                currentNode = currentNode.left;
            } else if (value > currentNode.data) {
                currentNode = currentNode.right;
            }
        }
        let tempNode = currentNode;
        if (tempNode.left == null && tempNode.right == null) {
            height = 0;
        }
        while (tempNode.left != null || tempNode.right != null) {
            if (tempNode.left != null) {
                tempNode = tempNode.left;
                height++;
            } else if (tempNode.right != null) {
                tempNode = tempNode.right
                height++;
            }
        }
        return height;
    }

    //A binary tree is considered balanced if, for every node in the tree, 
    //the height difference between its left and right subtrees is no more than 1, 
    // and both the left and right subtrees are also balanced.

    isBalanced(currentNode = this.root, difference) {
        if (currentNode == null) {
            return
        }
        if (difference > 1) {
            this.isBalancedCheck = false;
            return
        }
        let leftChild = null
        let rightChild = null
        if (currentNode.left != null) {
            leftChild = this.height(currentNode.left.data);
        }
        if (currentNode.right != null) {
            rightChild = this.height(currentNode.right.data);
        }
        this.isBalanced(currentNode.left, Math.abs(leftChild - rightChild));
        this.isBalanced(currentNode.right, Math.abs(leftChild - rightChild));
        return this.isBalancedCheck
    }

    rebalance() {
        if (tr.isBalanced() == true) {
            return "all good";
        } else {
            let newArrayToBalance = this.levelOrder(node => console.log(node.data));
            this.root = null;
            this.buildTree(newArrayToBalance);
            this.isBalancedCheck = true;
            return this.root
        }
    }
}

// This function will print the tree in a pretty format
// It will use the prefix to create the tree structure
// It will use isLeft to determine if the node is a left or right child
const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

let tr = new Tree();
let testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
tr.buildTree(testArray, 0);

prettyPrint(tr.root);
//console.log(tr.find(9))
//prettyPrint(tr.insert(10));
tr.insert(6346)
tr.insert(6347)
tr.insert(22)
tr.insert(21)
tr.insert(20)
tr.levelOrder(node => console.log(node.data));
//tr.preOrder(node => console.log(node.data));
//tr.inOrder(node => console.log(node.data));
//console.log(tr.depth(8))
//console.log(tr.height(1))
//tr.postOrder(node => console.log(node.data));
prettyPrint(tr.root);

prettyPrint(tr.rebalance());
console.log(tr.isBalanced());


