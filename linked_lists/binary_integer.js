"use strict";

// Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

// Return the decimal value of the number in the linked list.

var getDecimalValue = function (head) {
  let res = 0;
  while (head) {
    if (head.val == 1) {
      res += 1;
    }
    head = head.next;
    res *= 2;
  }
  return res / 2;
};
