class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class SingleLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  //   Insert Value into the end of List
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //   Remove the value from the end
  pop() {
    if (!this.head) {
      return undefined;
    }
    var current = this.head;
    var newTail = this.head;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  //   Remove the value from the beginning
  shift() {
    if (!this.head) {
      return undefined;
    }
    var current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  //   Add a new node to beginning
  unShift(val) {
    var newNode = new Node(val);
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

  //   Retriving a node by its position
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    var counter = 1;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  //   Change the value of a node based on its position
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  //   Insert a node to the linkedlist at a position
  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === this.length) {
      return this.push(val);
    }
    if (index === 0) {
      return this.unShift(val);
    }
    var newNode = new Node(val);
    var foundNodeAtPrevIndex = this.get(index - 1);
    var temp = foundNodeAtPrevIndex.next;
    foundNodeAtPrevIndex.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  //   Remove a node from specific position
  remove(index) {
    if (index < 0 || index > this.length) {
      return null;
    }
    if (index === 0) return this.shift();
    if (index === this.length) {
      return this.pop();
    }
    var nodeAtCurrIndex = this.get(index);
    var nodeAtPrevIndex = this.get(index - 1);
    nodeAtPrevIndex.next = nodeAtCurrIndex.next;
    this.length--;
    return nodeAtCurrIndex;
  }

  // Practice
  //ToDo Watching Video
  //   Reverse the linkedList
  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var prev = null;
    var next;
    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  //   Print the list
  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

var sll = new SingleLinkedList();
sll.push(15);
sll.push(20);
sll.push(25);
sll.push(30);
sll.push(35);
console.log("Insert nodes at the end of the list:- ");
sll.print();
console.log(sll);
sll.pop();
console.log("Remove node from the end of the List:- ");
sll.print();
console.log(sll);
sll.unShift(10);
sll.unShift(50);
console.log("Insert node at the beginning of the List:- ");
sll.print();
console.log(sll);
sll.shift();
console.log("Remove node from the beginning of the List:- ");
sll.print();
console.log(sll);
console.log("At position 2 current node is: ", sll.get(2).val);
console.log("At position 4 current node is: ", sll.get(4).val);
sll.set(2, 50);
console.log("Insert node at the Postion 2 with value 50 of the List:- ");
sll.print();
console.log(sll);
sll.remove(2);
console.log("Remove node at the position 2 from the List:- ");
sll.print();
console.log(sll);
console.log("Reverse of the List is:- ");
sll.reverse();
sll.print();
console.log("Length of the List:- ");
console.log(sll.length);
console.log(sll);
