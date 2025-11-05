//* In js function is stateless and object is stateful, because object hold the previous state for multiple iteration.

// function 
function add (a){
    let count=0
    return count +=a
}
console.log(add(2))
console.log(add(3))

//oject
const counter={
    count:0,
    add(amount){
        this.count=this.count+amount
    },
    print(){
        console.log(this.count)
    }
}

counter.add(2)
counter.add(3)

counter.print()