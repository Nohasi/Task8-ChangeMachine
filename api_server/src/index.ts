import { invalidRequest } from "./modules/invalidRequest";

import express = require('express');
import coins from "./types/coins";
import { convertToCents } from "./modules/convertToCents";
import { dispenseCoins } from "./modules/dispenseCoins";
import valuesInCents from "./types/valuesInCents";
import dispensingResults from "./types/dispensingResults";
import { calculateAvailableFunds } from "./modules/calculateAvailableFunds";
import { calculateTotalChange } from "./modules/calculateTotalChange";

// Machine's coins stored in this object
let machineCoins: coins = {
    dollar1: 200,
    cent50: 200,
    cent20: 200,
    cent10: 200,
    cent5: 200,
    cent2: 200,
    cent1: 200
}

const app = express();

app.use(express.json());
app.get('/change', (req: express.Request, res: express.Response) => {
    let availableFunds = calculateAvailableFunds(machineCoins);
    let errorMessage: string | null = invalidRequest(req, machineCoins, availableFunds);

    // not null: an error exists, hence is returned
    if(errorMessage != null){
        res.status(406);
        res.send({
            status: 406,
            error: errorMessage
        })
        return;
    }

    let centsValue: valuesInCents = convertToCents(Number(req.query["price"]), Number(req.query["amount"]));
    let price: number = centsValue.priceInCents;
    let amount: number = centsValue.amountInCents;
    // comparing cent values to avoid javascript floating point shenanigans
    const changeReturned = calculateTotalChange(price, amount);
    const coinsDispensed = dispenseCoins(machineCoins, price, amount);
    res.status(200);
    res.send({
        status: 200,
        change_returned: changeReturned,
        funds_remaining: (availableFunds/100) - changeReturned,
        coins_dispensed: coinsDispensed,
        machine_coins: machineCoins
    });
});

app.get('/refill', (req: express.Request, res: express.Response) => {
    machineCoins = {
        dollar1: 200,
        cent50: 200,
        cent20: 200,
        cent10: 200,
        cent5: 200,
        cent2: 200,
        cent1: 200
    };
    res.status(200);
    res.send({
        status: 200,
        funds_remaining:calculateAvailableFunds(machineCoins)/100
    });
});

const port: number = 4090;
const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = server;