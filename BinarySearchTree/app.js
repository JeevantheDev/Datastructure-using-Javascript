class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // //   Insert Values into the tree
  // insert(value) {
  //   var newNode = new Node(value);
  //   if (this.root === null) {
  //     this.root = newNode;
  //     return this;
  //   } else {
  //     var current = this.root;
  //     while (true) {
  //       if (value === current.value) return undefined;
  //       if (value < current.value) {
  //         if (current.left === null) {
  //           current.left = newNode;
  //           return this;
  //         } else {
  //           current = current.left;
  //         }
  //       } else if (value > current.value) {
  //         if (current.right === null) {
  //           current.right = newNode;
  //           return this;
  //         } else {
  //           current = current.right;
  //         }
  //       }
  //     }
  //   }
  // }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  // //   Find a purticular value
  // find(val) {
  //   if (this.root === null) return false;
  //   var current = this.root;
  //   let found = false;
  //   while (!found && current) {
  //     if (val < current.value) {
  //       current = current.left;
  //     } else if (val > current.right) {
  //       current = current.right;
  //     } else {
  //       found = true;
  //     }
  //   }
  //   if (!found) return undefined;
  //   return current;
  // }
  find(val) {
    if (this.root === null) {
      return false;
    }
    var current = this.root;
    let found = false;
    while (!found && current) {
      if (val < current.value) {
        current = current.left;
      } else if (val > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  // // Breadth first tree traversal
  // BFS() {
  //   var data = [];
  //   var queue = [];
  //   var node = this.root;
  //   queue.push(node);
  //   while (queue.length) {
  //     node = queue.shift();
  //     data.push(node.value);
  //     if (node.left) queue.push(node.left);
  //     if (node.right) queue.push(node.right);
  //   }
  //   return data;
  // }
  BFS() {
    var data = [];
    var queue = [];
    var node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  // Depth first Tree Preorder Traversal
  // Root --> Left --> Right
  // DFSPre() {
  //   var data = [];
  //   var current = this.root;
  //   function traverse(node) {
  //     data.push(node.value);
  //     if (node.left) {
  //       traverse(node.left);
  //     }
  //     if (node.right) {
  //       traverse(node.right);
  //     }
  //   }
  //   traverse(current);
  //   return data;
  // }
  DFSPre() {
    var data = [];
    var current = this.root;
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }

  // // Depth first Tree post order traversal
  // Left --> Right --> Root
  // DFSPost() {
  //   var data = [];
  //   var current = this.root;
  //   function traverse(node) {
  //     if (node.left) {
  //       traverse(node.left);
  //     }
  //     if (node.right) {
  //       traverse(node.right);
  //     }
  //     data.push(node.value);
  //   }
  //   traverse(current);
  //   return data;
  // }
  DFSPost() {
    var data = [];
    var current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(current);
    return data;
  }

  // // Depth first tree In order traversal
  // // Left --> Root --> Right
  // DFSIn() {
  //   var data = [];
  //   var current = this.root;
  //   function traverse(node) {
  //     if (node.left) {
  //       traverse(node.left);
  //     }
  //     data.push(node.value);
  //     if (node.right) {
  //       traverse(node.right);
  //     }
  //   }
  //   traverse(current);
  //   return data;
  // }
  DFSIn() {
    var data = [];
    var current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
}

var bst = new BST();
console.log("Insert 3 values");
bst.insert(5);
bst.insert(12);
bst.insert(2);
bst.insert(20);
console.log(bst);
console.log("Find a purticular node");
console.log(bst.find(5));
console.log("Breadth First Tree Traversal");
console.log(bst.BFS());
console.log("Depth First Tree Traversal Preorder");
console.log(bst.DFSPre());
console.log("Depth First Tree Traversal Postorder");
console.log(bst.DFSPost());
console.log("Depth First Tree Traversal Inorder");
console.log(bst.DFSIn());
