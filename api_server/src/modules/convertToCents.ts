export const convertToCents = (price: number, amount: number) => {
    return{priceInCents: price*100, amountInCents: amount*100};
}