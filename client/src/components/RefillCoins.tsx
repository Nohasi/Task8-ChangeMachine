import React from "react";
import { requestRefill } from "../services/requestRefill";

interface refillProps {
    setFundsRemaining: React.Dispatch<React.SetStateAction<string>>,
    setErrorStatus: React.Dispatch<React.SetStateAction<boolean>>,
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
    setPageInteraction: React.Dispatch<React.SetStateAction<boolean>>
}

export const RefillCoins = (props: refillProps) => {

    const handleRefill = async (event:React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        const fetchedData = await requestRefill();
        if(fetchedData.status === "OK"){
            props.setFundsRemaining(fetchedData.response.funds_remaining);
        }
        else {
            props.setErrorStatus(true);
            props.setPageInteraction(true);
            props.setErrorMessage(fetchedData.response.error);
        }
    }

    return (
        <div className="container">
            <div className="col">
                <button className="btn btn-info" onClick={handleRefill}>Refill Coins</button>
            </div>
        </div>
    );
}