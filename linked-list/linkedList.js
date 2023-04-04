class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    append(value) {
        // creating new node with value
        let newNode = new Node(value, null)
        //if the head of the list is null creating new head node with value
        if (this.head == null) {
            this.head = new Node(value, null)
            return;
        }
        // if the head value is not null
        //setting newnode next value to null
        newNode.next = null;

        //creating tail node
        let tail = this.head;
        //iterating through linked list to find tail node
        while (tail.next != null) {
            //setting the node to next node
            tail = tail.next;
        }
        //setting the last node to newNode
        tail.next = newNode
        return;
    }

    prepend(value) {
        let newNode = new Node(value, null)
        let tmp = this.head
        this.head = newNode
        let tail = this.head;
        //iterating through linked list to find tail node
        while (tail.next != null) {
            //setting the node to next node
            tail = tail.next;
        }
        //setting the last node to tmp
        tail.next = tmp
        return;
    }

    size() {
        let tail = this.head;
        let numberOfNodes = 1;
        while (tail.next != null) {
            //setting the node to next node
            numberOfNodes++;
            tail = tail.next;
        }
        return numberOfNodes;
    }

    head() {
        let firstNode = this.head
        return firstNode;
    }

    tail() {
        let tailOfList = this.head;
        while (tailOfList.next != null) {
            //setting the node to next node
            tailOfList = tailOfList.next;
        }
        return tailOfList;
    }

    at(index) {
        let tail = this.head;
        let numberOfNodes = 1;

        while (tail.next != null) {
            //setting the node to next node
            numberOfNodes++;
            tail = tail.next;
            if (index == numberOfNodes) {
                return tail;
            }
        }
    }

    pop() {
        
    }
}

class Node {
    constructor(data = null, next = null) {
        this.data = data
        this.next = next
    }
}

const test = () => {
    let linkedlist = new LinkedList(null)
    linkedlist.append("0")
    linkedlist.prepend("1")
    linkedlist.prepend("3")
    linkedlist.prepend("4")
    linkedlist.prepend("6")
    return linkedlist.at(2);
}

console.log(test());