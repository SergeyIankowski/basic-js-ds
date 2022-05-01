const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.origin = null;
  }

  root() {
      if(this.origin) {
      let current = this.origin;
      return current;
      }
      return null;
  }

  add(data) {
    const item = new Node(data);
    if(!this.origin) {
      this.origin = item;
      return this.origin;
    }
    let current = this.origin;
    while(current) {

      
      if(data < current.data) {

        if(!current.left) {
          current.left = item;
          return this;
        } else {
          current = current.left;
          continue
        }

      } else {

        if(!current.right) {
          current.right = item;
          return this;
        } else {
          current = current.right;
          continue;
        }

      }
    }
  }

  has(data) {
    let current = this.origin;
    while(current) {
        if(data === current.data) {
            return true;
        }
        if(data < current.data) {
          if(current.left) {
            current = current.left;
          } else {
          return false;
          }
        }
        if(data > current.data) {
          if(current.right) {
            current = current.right;
          } else {
          return false;
          }
        }
    }
    return false;
}

  find(data) {
      let current = this.origin;
      while(current) {
          if(data === current.data) {
              return current;
          }
          if(data < current.data) {
              current = current.left;
          }
          if(data > current.data) {
              current = current.right;
          }
      }
      return null;
  }
  _deleteElement(element, itemData) {
    if(element.data === itemData) {
      if(element.left === null && element.right === null) {
        return null;
      }
      if(element.right === null) {
        return element.left;
      }
      if(element.left === null) {
        return element.right;
      }
      const minValueRightInRightSubtree = this._findMinValue(element.right);
      element.data = minValueRightInRightSubtree;
      element.right = this._deleteElement(element.right, minValueRightInRightSubtree)

      return element;
    }
    if(itemData < element.data) {
      element.left = this._deleteElement(element.left, itemData);
      return element;
    }
    if(itemData > element.data) {
      element.right = this._deleteElement(element.right, itemData);
      return element;
    }
  }
  remove(data) {
    if(!this.origin) {
      return null;
    }
    this.origin = this._deleteElement(this.origin, data);
    return this;
  }
  _findMinValue(node) {
    let current = node;
      while(current.left) {
          current = current.left;
      }
      return current.data;
  }
  _findMaxValue(node) {
    let current = node;
      while(current.right) {
              current = current.right;
      }
      return current.data;
  }
  min() {
        return this._findMinValue(this.origin);
  }

  max() {
      return this._findMaxValue(this.origin);
  }
}

module.exports = {
  BinarySearchTree
};