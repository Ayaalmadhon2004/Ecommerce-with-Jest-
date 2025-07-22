import {calculateTotal} from "../Jest_tests/totalPrice";

describe('calculateTotal',()=>{
    test('returns 0 for an empty cart',()=>{
        expect(calculateTotal([])).toBe(0);
    });
    test('sums prices correctly',()=>{
        const cart=[
             { id: 1, price: 10 },
             { id: 2, price: 20 },
             { id: 3, price: 30 },
        ];
        expect(calculateTotal(cart)).toBe(60);
    })
})