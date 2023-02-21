import { Request } from "express"
import coins from "../types/coins";
import { calculateTotalChange } from "./calculateTotalChange";
import { convertToCents } from "./convertToCents";

export const invalidRequest = (req: Request, machineCoins: coins, availableFunds: number): string | null => {
    // Checking for missing parameters
    if(!('price' in req.query)){
        return "The 'price' parameter is missing";
    }
    if(!('amount' in req.query)){
        return "The 'amount' parameter is missing";
    }

    // Checking for empty params
    if(req.query["price"] === ''){
        return "The 'price' parameter is empty"
    }
    if(req.query["amount"] === ''){
        return "The 'amount' parameter is empty"
    }

    const price = Number(req.query["price"])
    const amount = Number(req.query["amount"])
    // Checking if values passed are not numbers
    if(isNaN(price)){
        return "'price' value passed is not a number"
    }
    if(isNaN(amount)){
        return "'amount' value passed is not a number"
    }

    // checking for negatives and zero
    if(price <= 0){
        return "Price cannot be 0 or a negative number";
    }
    if(amount <= 0){
        return "Amount cannot be 0 or a negative number";
    }

    //Checking if price is higher than amount paid
    if(price > amount){
        return "Amount paid must be higher than the price";
    }

    const centsValue = convertToCents(price, amount);
    const priceInCents = centsValue.priceInCents;
    const amountInCents = centsValue.amountInCents;
    const changeNeeded = calculateTotalChange(priceInCents, amountInCents);
    // Checking if enough funds are available
    if(changeNeeded > availableFunds){
        return "Not enough funds are available in machine to return proper change";
    }

    return null;
}