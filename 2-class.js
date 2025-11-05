// JS class

class counter{
    constructor(count){
        this.count= count
    }
    add(amount){
        this.count=this.count+amount
    }
    print(){
        console.log(this.count)
    }
    
}

//class-1
const counter1= new counter(0)
counter1.add(5)
counter1.add(6)
counter1.print()

//class-2
const counter2= new counter(5)
counter2.add(6)
counter2.add(7)
counter2.print()