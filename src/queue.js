const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.begin = null;
  }
  getUnderlyingList() {
    return this.begin;
  }

  enqueue(value) {
    if(!this.begin) {
      this.begin = new ListNode(value);
    } else {
    let current = this.begin;
    while(current.next) {
      current = current.next;
    }
    current.next = new ListNode(value);
  }
  }

  dequeue() {
    if(this.begin) {
      let first = this.begin.value;
      this.begin = this.begin.next;
      return first;
    }
}
}
module.exports = {
  Queue
};
