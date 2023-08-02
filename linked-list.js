/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node (val);
      if(!this.head){
          this.head =newNode;
          this.tail =newNode;
      }
          this.tail.next =newNode;
          this.tail =newNode;
          this.length++;
          //need to add this.length at end so when test data is added at  begininning length of array gets updated
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      // If the linked list is empty, set both head and tail to the new node.
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If the linked list is not empty, set the next property of the new node to the current head.
      newNode.next = this.head;
      // Update the head to point to the new node.
      this.head = newNode;
    }
    // Update the length property of the linked list.
    this.length++;
  }

  // ... (other methods)


  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) {
      // If the linked list is empty, return undefined as there's nothing to pop.
      return undefined;
    }

    let current = this.head;
    let newTail = current;

    // Traverse the linked list until reaching the tail node.
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    // Set the new tail and remove the reference to the previous tail node.
    this.tail = newTail;
    if (this.head === this.tail) {
      // If there was only one node in the list, update head to null as the list becomes empty.
      this.head = null;
    }
    // Remove the reference from the previous tail to the current tail (i.e., disconnect the last node).
    this.tail.next = null;

    // Decrease the length property to reflect the removal.
    this.length--;

    // Return the value of the removed node (i.e., the previous tail's value).
    return current.val;
  }
  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) {
   // If the linked list is empty, return undefined as there's nothing to pop.
   return undefined;
 }

 let current = this.head;

 this.head =this.head.next;

 // Traverse the linked list until reaching the tail node.
  if (this.head === null) {
   this.tail = null;
 }

 // Decrease the length property to reflect the removal.
 this.length--;

 // Return the value of the removed node (i.e., the previous head's value).
 return current.val;

}


  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      // Index out of range, return null (or throw an error if you prefer).
      return null;
    }

    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }

    // Return the value of the node at the specified index.
    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) { setAt(idx, val) {  
    if (idx < 0 || idx >= this.length) {
    // Index out of range, return null (or throw an error if you prefer).
    return null;
  }

  let current = this.head;
  for (let i = 0; i < idx; i++) {
    current = current.next;
  }

  // Return the value of the node at the specified index.
   current.val = val;
    return true;
}

  

  /** insertAt(idx, val): add node w/val before idx. */

    insertAt(idx, val) {
      if (idx < 0 || idx > this.length) {
        // Index out of range, return null (or throw an error if you prefer).
        return null;
      }
  
      if (idx === 0) {
        // If inserting at index 0, use unshift method to add the new node to the start.
        this.unshift(val);
      } else if (idx === this.length) {
        // If inserting at the end, use push method to add the new node to the end.
        this.push(val);
      } else {
        const newNode = new Node(val);
        let current = this.head;
  
        // Traverse the linked list to find the node at index idx - 1.
        for (let i = 0; i < idx - 1; i++) {
          current = current.next;
        }
  
        // Insert the new node between the current node and the next node.
        newNode.next = current.next;
        current.next = newNode;
  
        // Update the length property to reflect the insertion.
        this.length++;
      }
    }

  }

  /** removeAt(idx): return & remove item at idx, */


    removeAt(idx) {
      if (idx < 0 || idx >= this.length) {
        // Index out of range, return null (or throw an error if you prefer).
        return null;
      }
  
      let removedNode;
      if (idx === 0) {
        // If removing the first node, use shift method to remove and return the value.
        removedNode = this.shift();
      } else if (idx === this.length - 1) {
        // If removing the last node, use pop method to remove and return the value.
        removedNode = this.pop();
      } else {
        let current = this.head;
        // Traverse the linked list to find the node at index idx - 1.
        for (let i = 0; i < idx - 1; i++) {
          current = current.next;
        }
        // Get the removed node and update the next pointer of the previous node.
        removedNode = current.next;
        current.next = current.next.next;
        // Update the length property to reflect the removal.
        this.length--;
      }
  
      // Return the value of the removed node.
      return removedNode.val;
    }

  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      // Return null (or throw an error) if the list is empty.
      return null;
    }

    let current = this.head;
    let sum = 0;

    // Traverse the linked list and calculate the sum of all values.
    while (current) {
      sum += current.val;
      current = current.next;
    }

    // Calculate and return the average.
    return sum / this.length;
  }
}

module.exports = LinkedList;
