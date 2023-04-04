class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    append(node1, node2) {
        node1.next = node2
        return node1
    }

}

class Node {
    constructor(data = null, next = null) {
        this.data = data
        this.next = next
    }
}

const test = () => {

    let list = new Node("1", null)
    let list2 = new Node("2", null)
    let list3 = new Node("3", null)

    let linkedlist = new LinkedList(list)

    linkedlist.append(list, list2)
    linkedlist.append(list2, list3)

    return linkedlist;
}

console.log(test());