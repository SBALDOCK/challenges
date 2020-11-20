"use strict";

// Given a sorted linked list, delete all duplicates such that each element appear only once.

var deleteDuplicates = function (head) {
  let cur = head;
  while (!!cur && !!cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
};
