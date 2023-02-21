import coins from "../types/coins";
import { selectCoin } from "./selectCoin";

// price and amount in cents
export const dispenseCoins = (machineCoins: coins, price: number, amount: number): coins => {
    let changeDue = amount - price;
    let coinsDispensed: coins = {
        dollar1: 0,
        cent50: 0,
        cent20: 0,
        cent10: 0,
        cent5: 0,
        cent2: 0,
        cent1: 0
    }

    while(changeDue > 0){
        changeDue = selectCoin(changeDue, machineCoins, coinsDispensed);
    }

    return coinsDispensed;
}