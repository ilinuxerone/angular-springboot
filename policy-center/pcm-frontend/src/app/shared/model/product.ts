export class Product{
    private id: number;
    private title: string;
    private price: number;
    private rating: number;
    private desc: string;
    public categories: Array<string> = []

    constructor(id: number,title: string, price: number, rating: number,desc: string,categories: Array<string>){
        this.id = id;
        this.title=title;
        this.price= price;
        this.rating=rating;
        this.desc=desc;
        this.categories=categories;
    }
}