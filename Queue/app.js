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
  dequeue() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) return (this.last = null);
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

var queue = new Queue();
console.log("Insert values into the Queues");
queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);
queue.enqueue(20);
console.log(queue);
console.log("Remove values from the Queue");
queue.dequeue();
queue.dequeue();
console.log(queue);
