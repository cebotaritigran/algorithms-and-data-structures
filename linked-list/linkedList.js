class LinkedList {
    constructor(head = null) {
        this.head = head
    }
    //adds a new node containing value to the end of the list
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
    //adds a new node containing value to the start of the list
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
    //returns the total number of nodes in the list
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
    //returns the first node in the list
    head() {
        let firstNode = this.head
        return firstNode;
    }

    //returns the last node in the list
    tail() {
        let tailOfList = this.head;
        while (tailOfList.next != null) {
            //setting the node to next node
            tailOfList = tailOfList.next;
        }
        return tailOfList;
    }
    //returns the node at the given index
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
    //removes the last element from the list
    pop() {
        // last element is the last nodes number
        let lastElement = this.size();
        // we count number of nodes
        let numberOfNodes = 1;
        let tail = this.head;
        // while number of nodes is greater than the size of the node list we itirate through list
        while (numberOfNodes < lastElement) {
            //setting the node to next node
            numberOfNodes++;
            console.log(numberOfNodes)
            tail = tail.next;
            // if the last node is equal to the last element we pop it by assigning nodes next to null instead of that node
            if (numberOfNodes == lastElement - 1) {
                tail.next = null;
                return this.head;
            }
        }
        return tail;
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

    linkedlist.prepend("1")
    linkedlist.prepend("2")
    linkedlist.prepend("3")
    linkedlist.prepend("4")
    linkedlist.prepend("6")
    linkedlist.pop()
    return linkedlist;
}

console.log(test());