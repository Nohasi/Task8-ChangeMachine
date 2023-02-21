import coins from "../types/coins";

export const selectCoin = (changeDue: number, machineCoins: coins, coinsDispensed: coins): number => {

    // 1 dollar
    if(changeDue >= 100){
        changeDue -= 100;
        machineCoins.dollar1 -= 1;
        coinsDispensed.dollar1 += 1;
        return changeDue;
    }

    // 50 cents
    if(changeDue >= 50){
        changeDue -= 50;
        machineCoins.cent50 -= 1;
        coinsDispensed.cent50 += 1;
        return changeDue;
    }

    // 20 cents
    if(changeDue >= 20){
        changeDue -= 20;
        machineCoins.cent20 -= 1;
        coinsDispensed.cent20 += 1;
        return changeDue;
    }

    // 10 cents
    if(changeDue >= 10){
        changeDue -= 10;
        machineCoins.cent10 -= 1;
        coinsDispensed.cent10 += 1;
        return changeDue;
    }

    // 5 cents
    if(changeDue >= 5){
        changeDue -= 5;
        machineCoins.cent5 -= 1;
        coinsDispensed.cent5 += 1;
        return changeDue;
    }

    // 2 cents
    if(changeDue >= 2){
        changeDue -= 2;
        machineCoins.cent2 -= 1;
        coinsDispensed.cent2 += 1;
        return changeDue;
    }

    // 1 cent
    changeDue -= 1;
    machineCoins.cent1 -= 1;
    coinsDispensed.cent1 += 1;
    return changeDue;
}