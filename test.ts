const BASE=50;

class Product{
    name: string;
    price=BASE;
    isAvailable: boolean

    constructor(name:string,price:number){
        this.name=name;
        this.price=price;
        this.isAvailable=true;
    }


    saleProduct(){
        this.isAvailable=false;
    }


    changePrice(newPrice:number){
        this.price=newPrice;
    }

    discount(discount:number){
        this.price=this.price-discount*this.price+0.2;
    }
}

