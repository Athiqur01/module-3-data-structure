
class Node {
    constructor(value){
        this.value=value
        this.next=null // pointer to the next node
    }
}

const head= new Node(10)
head.next=new Node(20)
head.next.next= new Node(30)
console.log(head)

let temp=head
while(temp !=null){
    console.log(temp.value)
    temp= temp.next
}

//! 🧠 What Is a Linked List?

//? A linked list is a linear data structure where elements (called nodes) are connected using pointers (references).

//* Each node has two main parts:

//* 1. Data — the value stored in the node.

//* 2.Next — a reference (or pointer) to the next node in the list.

// Unlike arrays, linked lists do not store data in contiguous memory locations — they are connected by references.

//! 🔗 Types of Linked Lists

// Singly Linked List — Each node points to the next node only.

// Doubly Linked List — Each node points to both next and previous nodes.

// Circular Linked List — The last node points back to the first node, forming a loop.

//! Application of linked list data structure

//?         Application	           Type of Linked List	            Reason
//        Queue / Stack	                 Singly	             Fast insert/delete
//          Undo/Redo	                 Doubly	           Navigate backward/forward
//       Browser History	             Doubly	                Move between pages
//     Playlist Navigation	             Doubly	             Traverse both directions
//       Memory Management	             Singly	             Dynamic size, fast updates
//           Blockchain	                 Singly	              Chain of connected blocks