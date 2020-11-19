"use strict";

// Given a non-empty, singly linked list with head node head, return a middle node of linked list.

// If there are two middle nodes, return the second middle node.

var middleNode = function (head) {
  let tortoise = head;
  let hare = head;

  while (hare.next !== null && hare.next.next !== null) {
    tortoise = tortoise.next;
    hare = hare.next.next;
  }
  return tortoise;
};
