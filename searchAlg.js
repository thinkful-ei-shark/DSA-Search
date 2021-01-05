/* eslint-disable eqeqeq */
const arrOne = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];
// Linear Search 
function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return i;
    }
  }
  return -1;
}
indexOf(arrOne, 26);
// Binary Search

function binarySearch(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;
 
  if (start > end) {
    return -1;
  }
  const index = Math.floor((start + end) / 2);
  const item = array[index];
  console.log(start, end, index);
  if (item == value) {
    return index;
  }
  else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
}

binarySearch(arrOne, 8);

class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
  insert(key, value) {
    if (this.key == null) {
      this.key = key;
      this.value = value;
    }
    else if (key < this.key) {
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    }
    else {
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this);
      }
      else {
        this.right.insert(key, value);
      }
    }
  }
  depthFirstSearch(values = []) {
    if (this.left) {
      console.log(values, 'left');
      values = this.left.depthFirstSearch(values);
    }
    values.push(this.value);
    if (this.right) {
      console.log(values, 'right');
      values = this.right.depthFirstSearch(values);
    }
    console.log(values, 'final');
    return values;
  }

}
const bst = new BinarySearchTree;
bst.insert(1, 15);
bst.insert(42, 15);
bst.insert(5, 15);
bst.insert(19, 12);

