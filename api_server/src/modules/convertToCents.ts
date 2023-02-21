import valuesInCents from "../types/valuesInCents";

export const convertToCents = (price: number, amount: number): valuesInCents => {
    return{priceInCents: price*100, amountInCents: amount*100};
}