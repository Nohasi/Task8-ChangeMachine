import coins from "../types/coins";

export const calculateAvailableFunds = (machineCoins: coins): number => {
    let availableFunds: number = 0;
    // adding values of all coins into funds pool
    availableFunds += (machineCoins.dollar1 * 100) + (machineCoins.cent50 * 50)
    + (machineCoins.cent20 * 20) + (machineCoins.cent10 * 10) 
    + (machineCoins.cent5 * 5) + (machineCoins.cent2 * 2) +(machineCoins.cent1 * 1);
    return availableFunds;
}