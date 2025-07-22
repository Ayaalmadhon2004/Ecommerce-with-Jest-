import {filterProducts} from "./filterAndRenderProducts.js";

const sampleProducts = [
  { id: 1, category: "Laptop", desc: "HP Elite", price: 1000 },
  { id: 2, category: "Phone", desc: "iPhone", price: 1500 },
  { id: 3, category: "Laptop", desc: "Dell", price: 900 },
];

describe ("filterProducts",()=>{
    it("filters by search text", ()=>{
        const result = filterProducts(sampleProducts,"iPhone","all","none");
        expect(result).toHaveLength(1);
        expect(result[0].desc).toBe("iPhone");
    });
    it("filter by category",()=>{
        const result = filterProducts(sampleProducts,"","Laptop","none");
        expect(result).toHaveLength(2);
    })
    it("sorts by price Low to Hight",()=>{
        const result = filterProducts(sampleProducts,"","all","low");
        expect(result).toHaveLength(3);
        expect(result[0].price).toBe(900);
        expect(result[1].price).toBe(1000);
        expect(result[2].price).toBe(1500);
    })
})