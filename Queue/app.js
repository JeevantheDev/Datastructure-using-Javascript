class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    var newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  // enqueue(value) {
  //   var newNode = new Node(value);
  //   if (!this.first) {
  //     this.first = newNode;
  //     this.last = newNode;
  //   } else {
  //     this.last.next = newNode;
  //     this.last = newNode;
  //   }
  //   return ++this.size;
  // }
  // dequeue() {
  //   if (!this.first) return null;
  //   var temp = this.first;
  //   if (this.first === this.last) return (this.last = null);
  //   this.first = this.first.next;
  //   this.size--;
  //   return temp.value;
  // }
  dequeue() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) return (this.last = null);
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
  print() {
    var result = [];
    var current = this.first;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}

var queue = new Queue();
console.log("Insert values into the Queues");
queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);
queue.enqueue(20);
queue.enqueue(25);
console.log(queue);
console.log(queue.print());
console.log("Remove values from the Queue");
queue.dequeue();
console.log(queue.print());
queue.dequeue();
console.log(queue.print());
console.log(queue);
