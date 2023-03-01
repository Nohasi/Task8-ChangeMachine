import React from "react";
import refillProps from "../prop_types/refillProps";
import { requestRefill } from "../services/requestRefill";

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