class Node {
    constructor(value, nextNode, key) {

        this.value = value;
        this.nextNode = nextNode;
        this.key = key;
    }
}



export class LinkedList {
    constructor(head,) {
        this.head = head

    }

    addFirstNode(value, key) {
        let firstNode = new Node(value, null, key);
        this.head = firstNode;
    }

    //adds node at the end of the list
    append(value, key) {
        if (this.head == null) {
            this.addFirstNode(value, key);
        } else {
            let tmp = this.head;
            while (tmp.nextNode != null) {
                tmp = tmp.nextNode;
            }
            tmp.nextNode = new Node(value, null, key);
        }
    }

    //adds node at the start of the list
    prepend(value) {
        if (this.head == null) {
            this.addFirstNode(value);
        } else {
            let tmp = this.head;
            let newNode = new Node(value, tmp);
            this.head = newNode;
        }
    }

    //returns the total number of nodes in the list
    size() {
        let tmp = this.head;
        let nodeCounter = 0;
        while (tmp.nextNode != null) {
            tmp = tmp.nextNode;
            nodeCounter++;
        }
        nodeCounter++;
        return nodeCounter;
    }

    //returns the first node in the list
    headNode() {
        return this.head;
    }

    //returns the last node in the list
    tailNode() {
        let tmp = this.head;
        while (tmp.nextNode != null) {
            tmp = tmp.nextNode;
        }
        return tmp;
    }

    //returns the node at the given index
    atIndex(index) {
        let tmp = this.head;
        for (let i = 0; i < index; i++) {
            tmp = tmp.nextNode;
        }
        return tmp.value;
    }

    //removes the last element from the list
    pop() {
        let tmp = this.head;

        while (tmp.nextNode != null) {
            // checking last node by checking if the next node is null
            // if it is null we remove previous nodes next node adress to null to remove it from list
            let lastNodeChecker = tmp.nextNode;
            if (tmp.nextNode != null && lastNodeChecker.nextNode == null) {
                tmp.nextNode = null;
            } else {
                tmp = tmp.nextNode;
            }
        }
    }

    contains(value) {
        let tmp = this.head;
        while (tmp.nextNode != null) {
            if (value == tmp.value) {
                return true;
            }
            tmp = tmp.nextNode;
        }
        return false;
    }

    find(value) {
        let tmp = this.head;
        let indexCounter = 0;
        while (tmp.nextNode != null) {
            if (value == tmp.value) {
                return indexCounter;
            }
            indexCounter++;
            tmp = tmp.nextNode;
        }
        return null;
    }

    insertAt(value, index) {
        let tmp = this.head;
        let indexCounter = 0;

        while (tmp.nextNode != null) {
            indexCounter++;
            if (index == indexCounter) {
                //current node is marry
                let nodeToInsert = new Node(value, tmp.nextNode); // we create new node with value kenneth and set it next node to tim
                console.log(tmp.value)
                // set the current node's next node to kenneth and continue the loop
                // the loop will not be interupted because next node is not null
                tmp.nextNode = nodeToInsert;
                console.log(tmp.value)

            } else {
                tmp = tmp.nextNode;
            }
        }
    }


    removeAt(index) {
        let tmp = this.head;
        let indexCounter = 0;
        let previousNode = null;
        if (index == 0) {
            let nodeToRemove = this.head;
            this.head = nodeToRemove.nextNode;
            return;
        }

        while (tmp.nextNode != null) {
            if (index == indexCounter) {
                if (previousNode != null) {
                    previousNode.nextNode = tmp.nextNode;
                    return;
                }
            }
            previousNode = tmp;
            tmp = tmp.nextNode;
            indexCounter++;
        }
    }

    toString() {
        let tmp = this.head;
        let printString = ""
        while (this.head.nextNode != null) {
            printString += "(" + this.head.value + ")-> "
            this.head = this.head.nextNode;
        }
        printString += "(" + this.head.value + ")-> "
        return printString;
    }
}

let linkedList = new LinkedList();
linkedList.append("george")
linkedList.append("marry")
linkedList.append("tim")
linkedList.append("john")

//console.log(linkedList.toString());
//console.log(linkedList.size());
//console.log(linkedList.headNode());
//console.log(linkedList.tailNode());
//console.log(linkedList.atIndex(4));
//linkedList.pop()
//console.log(linkedList.find("marry"));
//linkedList.insertAt("Kenneth", 2)
linkedList.removeAt(0)
console.log(linkedList.toString());