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
      this.size++;
      console.log("Node Added");
    }
  }

  // delete a node by provided index
  deleteNode(index) {
    if (index > this.size) return false;
    else {
      let current, prev;
      current = this.head;
      if (index === 0) nodecurrent = current.next;
      else {
        let i = 0;
        while (i < index) {
          prev = current;
          current = current.next;
          i++;
        }

        prev.next = current.next;
      }
      this.size--;
      console.log("Node deleted ", current.data);
    }
  }

  // delete a node by its name
  deleteElement(element) {
    let current,
      prev,
      i = 0;

    current = this.head;
    if (current.data === element) {
      this.head = current.next;
      this.size--;
    } else {
      while (current.data !== element) {
        prev = current;
        current = current.next;
        i++;
      }
      if (i === this.size) {
        console.log("Element not found");
      } else {
        prev.next = current.next;
        this.size--;
      }
    }
  }

  //Helper method
  // Find the index of the given element
  indexOf(element) {
    let current = this.head;
    let i = 0;

    while (current) {
      if (current.data === element) {
        return i;
      }
      current = current.next;
      i++;
    }
    return "Element not found";
  }

  isEmpty() {
    return this.size === 0;
  }

  sizeOfList() {
    return this.size;
  }
}

let obj = new LinkedList();
obj.addEndOfList("a");
obj.addEndOfList("b");
obj.addEndOfList("c");
obj.addEndOfList("d");
obj.addEndOfList("e");
// obj.insertIndex("e", 3);
console.log(obj.sizeOfList());
// obj.deleteNode(4);
// obj.deleteElement("a");

console.log("message is", obj.indexOf("f"));

obj.display();
