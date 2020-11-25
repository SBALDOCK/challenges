"use strict";

// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

var mergeTwoLists = function (l1, l2) {
  let list = new ListNode();
  let head = list;

  while (l1 !== null && l2 !== null) {
    // Select the smallest value from either linked list,
    // then increment that list forward.
    if (l1.val < l2.val) {
      list.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      list.next = new ListNode(l2.val);
      l2 = l2.next;
    }

    list = list.next;
  }

  if (l1 !== null) list.next = l1;
  if (l2 !== null) list.next = l2;

  // return .next because this first element in the linkedlist is empty
  return head.next;
};

function mergeLists(l1, l2) {
  let dummy = new ListNode(-1);
  let head = dummy;

  while (l1 !== null) {
    if (l1.val <= l2.val) {
      dummy.next = l1;
      l1 = l1.next;
    } else {
      dummy.next = l2;
      l2 = l2.next;
    }
    dummy = dummy.next;
  }
  if (l1 !== null) {
    dummy.next = l1;
  } else {
    dummy.next = l2;
  }
  return head.next;
}

class ListNode {
  constructor(val = null, next = null) {
    this.val = val;
    this.next = next;
  }
}
