class LinkedList {

    class Node {
    constructor(data, next) {
        this.data = data
        this.next = next
    }
}

const test = () => {
    let list = []
    let array = new LinkedList([])
    let data = "1";
    let node2 = new Node(data, null)
    let node = new Node(data, node2)

    console.log(node);
}
return test;
}



console.log(test());