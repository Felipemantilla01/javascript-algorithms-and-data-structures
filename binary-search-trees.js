class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      const checkNodeValues = (currNode, newNode) => {
        if (currNode.value === newNode.value) return undefined;
        if (newNode.value > currNode.value) {
          // go to right
          if (currNode.right) {
            // call the funciton again
            checkNodeValues(currNode.right, newNode);
          } else {
            currNode.right = newNode;
          }
        } else {
          // go to left
          if (currNode.left) {
            // call the function again
            checkNodeValues(currNode.left, newNode);
          } else {
            currNode.left = newNode;
          }
        }
      };
      checkNodeValues(this.root, newNode);
    }

    return this;
  }

  find(value) {
    if (!this.root) {
      return false;
    }

    const searchOnTree = (value, currNode) => {
      if (currNode.value === value) return currNode;
      if (value > currNode.value) {
        // go to right
        if (currNode.right) {
          return searchOnTree(value, currNode.right);
        }
        return false;
      } else {
        // go to left
        if (currNode.left) {
          return searchOnTree(value, currNode.left);
        }
        return false;
      }
    };

    return searchOnTree(value, this.root);
  }
  contains(value) {
    return !!this.find(value);
  }
}

const tree = new BinarySearchTree();

console.log(tree.insert(10));
console.log(tree.insert(12));
console.log(tree.insert(7));
console.log(tree.insert(9));
console.log(tree.insert(13));
console.log(tree.insert(22));

console.log(tree);

console.log(tree.find(9));
console.log(tree.find(8));

console.log(tree.contains(9));
console.log(tree.contains(8));

// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
