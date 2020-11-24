"use strict";

// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// Solution #1
var hasCycle = function (head) {
  let hare = head;
  let tortoise = head;

  if (!head) {
    return false;
  }
  while (hare.next && hare.next.next) {
    tortoise = tortoise.next;
    hare = hare.next.next;
    if (tortoise === hare) {
      return true;
    }
  }
  return false;
};

// Solution #2
var hasCycle = function (head) {
  while (head) {
    if (head.visited) {
      return true;
    }
    head.visited = true;
    head = head.next;
  }

  return false;
};
