class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(element) {
    let newNode = new Node(element);
    let current = this.head;
    if (current) {
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    } else {
      this.head = newNode;
    }
  }

  mergeTwoSortedList(l1, l2) {
    let l3 = new LinkedList();
    let head = l3;
    while (l1 && l2) {
      if (l1.data < l2.data) {
        l3.next = l1;
        l1 = l1.next;
      } else {
        l3.next = l2;
        l2 = l2.next;
      }
      l3 = l3.next;
    }

    if (l1) {
      l3.next = l1;
    } else {
      l3.next = l2;
    }

    return head.next;
  }

  display(head) {
    while (head) {
      console.log(head.data);
      head = head.next;
    }
  }
}
