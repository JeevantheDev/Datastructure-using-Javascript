class MaxHeap {
  constructor() {
    this.values = [];
  }

  // helper function
  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index < 0) {
      let parentIdx = Math.floor((index - 1) / 2);
      let parent = this.values[parentIdx];

      if (element > parent) {
        this.values[parentIdx] = element;
        this.values[index] = parent;
        index = parentIdx;
      }
    }
  }

  insert(ele) {
    this.values.push(ele);
    this.bubbleUp();
  }
}

const maxHeap = new MaxHeap();
console.log("Insert Node into the MaxHeap");
maxHeap.insert(10);
maxHeap.insert(5);
maxHeap.insert(15);
maxHeap.insert(25);
console.log(maxHeap);
