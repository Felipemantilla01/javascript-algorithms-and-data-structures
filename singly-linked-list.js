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
