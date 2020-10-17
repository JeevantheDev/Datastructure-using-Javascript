class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    var newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) {
      return null;
    }
    var temp = this.first;
    if (this.first === this.last) return (this.last = null);
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }

  peek() {
    return this.first.value;
  }
}

var stack = new Stack();
stack.push(15);
stack.push(10);
stack.push(5);
console.log("Push Values into the stack");
console.log(stack);
console.log("Give the top values of the stack:- ", stack.peek());
console.log("Pop Values from the stack");
stack.pop();
console.log(stack);
