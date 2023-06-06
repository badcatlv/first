class Cat{
    constructor(furLength, temperment, color){
        this.furLength = furLength;
        this.temperment = temperment;
        this.color = color;
    }
    
    eat(){
        console.log('YUM!');
    }
}

class HouseCat extends Cat {
    constructor(name, furLength, temperment, color){
        super(furLength, temperment, color);
        this.name = name;
    }
}

class Tiger extends Cat {
    constructor(furLength, temperment, color, numStripes){
        super(furLength, temperment, color)
        this.numStripes = numStripes;
    }
}

const tigger = new Tiger(8, 'angry', 'orange and black', 42);
console.log(tigger.color);
console.log(tigger.numStripes);
tigger.eat()

 