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

  // Adding the node at the of the List
  addEndOfList(nodeValue) {
    let newNode = new Node(nodeValue);

    let current = this.head;

    if (current) {
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    } else {
      this.head = newNode;
    }
    this.size++;
  }

  // Displaying all the nodes available in the LinkedList
  display() {
    let current = this.head;

    while (current) {
      console.log("Current node is ", current.data);
      current = current.next;
    }
  }

  // Insert Node at a given Index
  insertIndex(element, index) {
    console.log("size is", this.size);
    if (index > 0 && index > this.size) {
      return false;
    } else {
      let newNode = new Node(element);
      let prev, current;

      current = this.head;

      if (index === 0) {
        newNode.next = current;
        this.head = newNode;
      } else {
        let i = 0;
        current = this.head;
        while (i < index) {
          prev = current;
          current = current.next;
          i++;
        }
        newNode.next = current;
        prev.next = newNode;
      }
    }
    this.size++;
  }
}

let obj = new LinkedList();
obj.addEndOfList(1);
obj.addEndOfList(2);
obj.addEndOfList(3);
obj.addEndOfList(4);

obj.insertIndex(5, 3);

obj.display();
