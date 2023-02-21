import { invalidRequest } from "./modules/invalidRequest";

import express = require('express');
import coins from "./types/coins";

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
// 3 params: dice, throws, players
app.get('/change', (req: express.Request, res: express.Response) => {
    let errorMessage: string | null = invalidRequest(req);
    // not null: an error exists, hence is returned
    if(errorMessage != null){
        res.status(406);
        res.send({
            status: 406,
            error: errorMessage
        })
        return;
    }

    res.status(200);
    res.send({
        status: 200,
        // TODO: Results
    });
});

const port: number = 4090;
const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = server;