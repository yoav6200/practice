const BASE=50;

class Product{
    name: string;
    cost: number;
    isAvailable: boolean

    constructor(name:string,cost:number){
        this.name=name;
        this.cost=cost;
        this.isAvailable=true;
    }
}

class ProductAmount{
    currentAmount:number;
    maxAmount=1000;

    constructor(currentAmount: number)
    {
        this.currentAmount=currentAmount;
    }
}


