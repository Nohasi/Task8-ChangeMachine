export const calculateTotalChange = (priceInCents: number, amountInCents: number) => {
    return (amountInCents - priceInCents) / 100;
}