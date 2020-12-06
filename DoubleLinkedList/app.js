class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add value to end of the list
  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //   Remove the node from the end
  pop() {
    if (!this.head) {
      return null;
    }
    var toBePopped = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = toBePopped.prev;
      this.tail.next = null;
      toBePopped.prev = null;
    }
    this.length--;
    return toBePopped;
  }

  //   Remove the node from the beginning
  shift() {
    if (!this.head) {
      return undefined;
    }
    var toBePopped = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = toBePopped.next;
      this.head.prev = null;
      toBePopped.next = null;
    }
    this.length--;
    return toBePopped;
  }

  //   Insert the node at the beginning of the list
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  //   Get The node at a purticular index
  get(index) {
    if (index < 0 || index > this.length) {
      return undefined;
    }
    var counter;
    var current;
    if (index < this.length / 2) {
      counter = 0;
      current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      counter = this.length;
      current = this.tail;
      while (counter !== index) {
        current = current.prev;
        counter--;
      }
    }
    return current;
  }
  //   Set a node according to the index position
  set(index, val) {
    if (index < 0 || index > this.length) {
      return null;
    }
    if (index === 0) {
      return this.unshift(val);
    }
    if (index === this.length) {
      return this.push(val);
    }
    var newNode = new Node(val);
    var foundNode = this.get(index - 1);
    var afterFoundNode = foundNode.next;
    afterFoundNode.prev = newNode;
    newNode.next = afterFoundNode;
    foundNode.next = newNode;
    newNode.prev = foundNode;
    this.length++;
    return true;
  }
  //   Remove a node according to the index position
  remove(index) {
    if (index < 0 || index > this.length) {
      return null;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length) {
      return this.pop();
    }
    var foundNode = this.get(index);
    var beforeFoundNode = foundNode.prev;
    var afterFoundNode = foundNode.next;
    beforeFoundNode.next = afterFoundNode;
    afterFoundNode.prev = beforeFoundNode;
    this.length--;
    return foundNode;
  }

  // Display the list
  display() {
    let output = [];
    var forward = this.head;
    while (forward !== null) {
      output.push(forward.val);
      forward = forward.next;
    }
    return output;
  }
}

const dll = new DoubleLinkedList();
dll.push(10);
dll.push(20);
dll.push(30);
dll.push(40);
console.log("Insert value at the end of the list..");
console.log(dll.display());
console.log(dll);
console.log("Remove the node from the end of the list..");
dll.pop();
console.log(dll.display());
console.log(dll);
console.log("Remove the node from the beginning of the list..");
dll.shift();
console.log(dll.display());
console.log(dll);
dll.unshift(10);
dll.unshift(50);
console.log("Insert value at the begining of the list..");
console.log(dll.display());
console.log(dll);
console.log("Get the node at index 4 ..");
console.log(dll.get(4));
console.log("Get the node at index 2 ..");
console.log(dll.get(2));
console.log("Get the node at index 1 ..");
console.log(dll.get(1));
dll.set(2, 100);
console.log("Insert value at index 2 with value of 100..");
console.log(dll.display());
console.log(dll);
dll.remove(3);
console.log("Remove value at index 3..");
console.log(dll.display());
console.log(dll);
