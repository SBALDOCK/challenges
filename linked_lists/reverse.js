"use strict";

// Reverse a singly linked list.

// iterative

var reverseList = function (head) {
  if (!head) {
    return;
  }
  let pre = null;
  while (head) {
    let next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }
  return pre;
};

//recursive

const reverseList = (head) => {
  if (!head || !head.next) return head;
  let current = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return current;
};
