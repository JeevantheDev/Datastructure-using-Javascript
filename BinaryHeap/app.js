class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // helper function
  // bubbleUp() {
  //   let index = this.values.length - 1;
  //   const element = this.values[index];

  //   while (index > 0) {
  //     let parentIdx = Math.floor((index - 1) / 2);
  //     let parent = this.values[parentIdx];

  //     if (element <= parent) break;
  //     this.values[parentIdx] = element;
  //     this.values[index] = parent;
  //     index = parentIdx;
  //   }
  // }
  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[index] = parent;
      index = parentIdx;
    }
  }

  insert(ele) {
    this.values.push(ele);
    this.bubbleUp();
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swapIdx = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swapIdx = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swapIdx === null && rightChild > element) ||
          (swapIdx !== null && rightChild > leftChild)
        ) {
          swapIdx = rightChildIdx;
        }
      }
      if (swapIdx === null) break;
      this.values[idx] = this.values[swapIdx];
      this.values[swapIdx] = element;
      idx = swapIdx;
    }
  }
}

const maxHeap = new MaxBinaryHeap();
console.log("Insert Node into the MaxHeap");
maxHeap.insert(41);
maxHeap.insert(39);
maxHeap.insert(18);
maxHeap.insert(27);
maxHeap.insert(12);
maxHeap.insert(55);
console.log(maxHeap);
console.log("Extract the Max Value");
console.log(maxHeap.extractMax());
console.log(maxHeap);
