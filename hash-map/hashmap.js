import { LinkedList } from "../linked-list/linkedlist.js";

function hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
}



class HashMap {
    constructor(loadFactor, capacity = 16, buckets = new Array(Math.round(capacity))) {
        this.loadFactor = loadFactor;
        this.keys = 0;
        this.capacity = capacity;
        this.buckets = buckets;
    }

    // checks if we are trying to access an index that is out of bounds of our array
    // this is a private method and should not be used outside of the class
    #indexOutOfBoundsChecker(index) {
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
    }

    // this method is used to add a node to the bucket at the given index
    // if the bucket is empty, we create a new linked list and add the node to it
    // if the bucket is not empty, we append the node to the linked list
    // if the key already exists in the linked list, we update the value of the node
    #addNodeToBucket(value, index, key) {
        if (this.buckets[index] == null) {
            let linkedList = new LinkedList();
            linkedList.append(value, key);
            return linkedList;
        } else {
            let linkedList = this.buckets[index];
            linkedList.append(value, key);
            if (this.buckets[index] != null) {
                this.#checkDuplicateKey(key, index, value);
            }
            return linkedList;
        }
    }
    // this method is used to check if the key already exists in the linked list
    // if it does, we update the value of the node and return true
    #checkDuplicateKey(key, index, value) {
        let tmp = this.buckets[index].head;
        while (tmp.nextNode != null) {
            if (tmp.key == key) {
                tmp.value = value;
                tmp.nextNode = null;
                return true;
                throw new Error("Duplicate key found in the hash map");
            }
            tmp = tmp.nextNode;
        }
    }

    // this method is used to set the value of a key in the hash map
    // if the key already exists, we update the value of the node and return true
    // if the key does not exist, we create a new node and add it to the linked list
    // if the linked list is empty, we create a new linked list and add the node to it
    set(key, value) {
        let index = hash(key) % this.capacity;
        this.#indexOutOfBoundsChecker(index);
        this.buckets[index] = this.#addNodeToBucket(value, index, key);
        this.loadFactor = this.returnKeys().length / this.capacity;
        console.log((this.loadFactor * this.capacity))
        if (this.loadFactor >= 0.8) {
            console.log("Resizing the hash map...");
            let oldBuckets = this.buckets;
            this.capacity = this.capacity * 2;
            this.buckets = new Array(Math.round(this.capacity));
            this.buckets = oldBuckets;
        }


    }

    // this method is used to get the value of a key in the hash map
    // if the key exists, we return the value of the node
    // if the key does not exist, we return null
    get(key) {
        let index = hash(key) % this.capacity;
        this.#indexOutOfBoundsChecker(index);
        let tmp = this.buckets[index].head;
        while (tmp.nextNode != null) {
            if (tmp.key == key) {
                return tmp.value;
            }
            tmp = tmp.nextNode;
        }
        if (tmp.key == key) {
            return tmp.value;
        }
        return null;
    }

    // this method is used to check if the key exists in the hash map
    // if the key exists, we return true
    has(key) {
        let index = hash(key) % this.capacity;
        this.#indexOutOfBoundsChecker(index);
        let tmp = this.buckets[index].head;
        while (tmp.nextNode != null) {
            if (tmp.key == key) {
                return true;
            }
            tmp = tmp.nextNode;
        }
        if (tmp.key == key) {
            return true;
        }
        return false;
    }

    // this method is used to remove a node from the linked list
    // if the key exists, we remove the node and return true
    remove(key) {

        let index = hash(key) % this.capacity;
        this.#indexOutOfBoundsChecker(index);
        let tmp = this.buckets[index].head;
        let previousNode = null;

        // if the first node is the one we want to remove
        // we set the head of the linked list to the next node
        if (tmp.key == key) {
            this.buckets[index].head = tmp.nextNode;
            return true;
        }

        // if the first node is not the one we want to remove
        // we iterate through the linked list and check if the key exists
        // if it does, we remove the node by setting the previous node's next node to the current node's next node
        // if the key does not exist, we return false
        while (tmp.nextNode != null) {
            if (tmp.key == key) {
                if (previousNode != null) {
                    previousNode.nextNode = tmp.nextNode;
                    return true;
                }
            }
            previousNode = tmp;
            tmp = tmp.nextNode;
        }

        // if the last node is the one we want to remove
        // we set the previous node's next node to null
        if (tmp.key == key) {
            if (previousNode != null) {
                previousNode.nextNode = tmp.nextNode;
                return true;
            }
        }
        return false;
    }

    // this method is used to get the number of keys in the hash map
    // it iterates through the linked list and counts the number of keys
    // if the linked list is empty, we skip it
    // if the linked list is not empty, we iterate through it and count the number of keys
    length() {
        let tmp = null
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i] != null) {
                tmp = this.buckets[i].head;
            }
            if (tmp != null) {
                while (tmp.nextNode != null) {
                    this.keys++;
                    tmp = tmp.nextNode;
                }
                this.keys++;
                tmp = null;
            }
        }
        return this.keys;
    }

    clear() {
        this.buckets = new Array(Math.round(this.capacity));
        this.keys = 0;
        this.capacity = 16;
        this.loadFactor = 0.8;
    }


    // this method is used to get the keys of the hash map
    // it returns an array of keys in the hash map
    // it iterates through the linked list and adds the keys to the array
    // if the linked list is empty, we skip it
    // if the linked list is not empty, we iterate through it and add the keys to the array
    returnKeys() {
        let keys = [];
        let tmp = null
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i] != null) {
                tmp = this.buckets[i].head;
            }
            if (tmp != null) {
                while (tmp.nextNode != null) {

                    keys.push(tmp.key);
                    tmp = tmp.nextNode;
                }
                keys.push(tmp.key);
                // set tmp to null to avoid duplicating the last value
                // in the next iteration
                tmp = null;
            }
        }

        return keys;
    }

    values() {
        let values = [];
        let tmp = null;
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i] != null) {
                tmp = this.buckets[i].head;
            }
            if (tmp != null) {
                while (tmp.nextNode != null) {
                    values.push(tmp.value);
                    tmp = tmp.nextNode;
                }
                //last value to push into the array
                values.push(tmp.value);
                // set tmp to null to avoid duplicating the last value
                // in the next iteration
                tmp = null;
            }
        }
        return values;
    }

    entries() {
        let entries = [];
        let tmp = null;
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i] != null) {
                tmp = this.buckets[i].head;
            }
            if (tmp != null) {
                while (tmp.nextNode != null) {
                    let entry = [tmp.key, tmp.value];
                    entries.push(entry);
                    tmp = tmp.nextNode;
                }
                //last value to push into the array
                let entry = [tmp.key, tmp.value];
                entries.push(entry);
                // set tmp to null to avoid duplicating the last value
                // in the next iteration
                tmp = null;
            }
        }
        return entries;
    }


    toString() {
        return this.buckets.toString();
    }
}


const test = new HashMap()

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('lion', 'silver')
test.set('moon', 'silver')
test.set('sun', 'sungolden')


console.log(test.length());
console.log(test.capacity);
console.log(test.loadFactor);
console.log(test.entries());
//console.log(map.get("Sara"));
//console.log(map.has("Sara"));
//console.log(map.remove("raSa"));
//console.log(map.length());
// console.log(map.returnKeys());
// console.log(map.values());
// console.log(map.entries());
// console.log(map.toString());