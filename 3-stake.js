class Stake{
    constructor(){
        this.item= []
    }

    push(value){
        this.item.push(value)
    }
    pop(){
        if(this.isEmpty()){
            return undefined
        }
        return this.item.pop()
    }

    peek(){
        if(this.isEmpty){
            return undefined
        }
        return this.item[this.item.length-1]
    }

    isEmpty(){
        return this.item.length===0
    }
    print(){
        console.log(this.item)
    }
}

const stake= new Stake()
stake.print()
console.log(stake.isEmpty())
console.log(stake.peek())
stake.push(5)
stake.push(10)
stake.push(15)
stake.print()
stake.pop()
stake.print()