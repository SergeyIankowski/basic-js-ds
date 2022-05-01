const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
 function removeKFromList(l, k) {
  let left = null;
  let center = l;
  let right = l.next;
  let first = l;
  let length = 0;
  while(right) {
    length++;
    right = right.next;
  }
  console.log(length);
  right = l.next;
  for(let key = 0; key <= length; key++) {
      if(left === null) {
        if(center.value === k) {
          center = right;
          right = right.next;
          first = first.next;
        } else {
          left = center;
          center = right;
          right = right.next;
          continue;
        }
      } else if(left) {
        if(right) {
        if(center.value === k) {
          left.next = right;
          center = right;
          right = right.next;
        } else {
          left = center;
          center = right;
          right = right.next;
        }
      } else {
        if(center.value === k) {
          left.next = null;
          center = null;
        } else {
          left.next = center;
          center = null;
        }
      }
    }
    }
    return first;
}
  

module.exports = {
  removeKFromList
};
