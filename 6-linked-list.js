
class Node {
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList {
    constructor(){
        this.head= null
        this.tail=null
        this.length=0
    }
    
    append(value){
        const newNode=new Node(value)
        if(this.head===null){
            this.head=newNode
            this.tail=newNode
        }else{
            this.tail.next=newNode
            this.tail=newNode
        }
        this.length++
    }
    //prepend operation
    prepend(value){
        const newNode= new Node(value)
        if(this.head===null){
            this.head=newNode
            this.tail=newNode
        }else{
            newNode.next=this.head
            this.head=newNode
        }
        this.length++
    }
    //Insert operation
    insert(index,value){
        if(index<0 | index>this.length){
            console.error("Index is invalid")
            return undefined
        }
        //if index is zero, node will be placed at head
        if(index===0){
           return this.prepend(value)
        }
        if(index===this.length){
            return this.append(value)
        }
        const leadingNode=this._traverseIndex(index-1)
        const holdingNode=leadingNode.next
        const newNode= new Node(value)
        leadingNode.next=newNode
        newNode.next=holdingNode
        console.log('tr', leadingNode)
        this.length++
    }
    //Remove operation
    remove(index){
        //if we want to remove the first element of linked-list
       if(index===0){
        const removedItem=this.head
            this.head= this.head.next
            
            if(this.length=1){
                this.tail=null
            }
            this.length--
            return removedItem
        }
       const leadingNode= this._traverseIndex(index-1)
       const nodeTobeRemove= leadingNode.next
       leadingNode.next=nodeTobeRemove.next
       
       //if we want to remove the last element of linked-list
       if(nodeTobeRemove.next===null){
        this.tail=leadingNode
       }
    }

    _traverseIndex(index){
        let count=0
        let currentNode=this.head
        while(count !=index){
            currentNode=currentNode.next
            count++
        }
        return currentNode

    }

    print(){
        let currentNode=this.head
        while(currentNode !=null){
            console.log(currentNode.value)
            currentNode=currentNode.next
        }
        
    }
}

const linkedList=new LinkedList()
linkedList.append(2)
linkedList.append(3)
linkedList.append(4)


//prepend
// linkedList.prepend(10)
// linkedList.prepend(20)
// linkedList.prepend(30)

// linkedList.insert(2,100)
// linkedList.print()
// linkedList.remove(3)
// linkedList.print()

linkedList.remove(0)
linkedList.print()