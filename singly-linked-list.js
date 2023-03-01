// node
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.tail) {
      return null;
    }
    // traverse the list to find the new tail
    let newTail = null;
    let currentTail = this.head;
    while (currentTail.next) {
      newTail = currentTail;
      currentTail = currentTail.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentTail;
  }

  shift() {
    if (!this.head) {
      return null;
    }
    let currentHead = this.head;
    this.head = this.head.next;
    this.length--;
    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let counter = 0;
    let node = this.head;
    while (counter !== index) {
      node = node.next;
      counter++;
    }
    return node;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    // validations
    if (index < 0 || index >= this.length) {
      return null;
    }

    if (index === this.length) return !!this.push(val);

    if (index === 0) return !!this.unshift(val);

    // we need to found the node [index-1] and the node [index]
    let nodeBeforeIndex = this.get(index - 1);
    let nodeIndex = this.get(index);

    let newNode = new Node(val);

    nodeBeforeIndex.next = newNode;
    newNode.next = nodeIndex;
    this.length++;

    return newNode;
  }
}

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(45);
console.log(singlyLinkedList);
singlyLinkedList.push(32);
console.log(singlyLinkedList);
singlyLinkedList.push(31);
console.log(singlyLinkedList);
singlyLinkedList.pop();
console.log(singlyLinkedList);
singlyLinkedList.shift();
console.log(singlyLinkedList);
singlyLinkedList.unshift("first");
singlyLinkedList.unshift("one");
console.log(singlyLinkedList);
console.log(singlyLinkedList.get(1));

singlyLinkedList.set(1, "setting value");
console.log(singlyLinkedList.get(1));

console.log(singlyLinkedList);
singlyLinkedList.insert(1, "123");
console.log(singlyLinkedList);
