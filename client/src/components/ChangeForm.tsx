import React, { useState } from "react";
import FormProps from "../prop_types/formProps";
import { getChangeResults } from "../services/getChangeResults";
import { RefillCoins } from "./RefillCoins";

export const ChangeForm = (props: FormProps) => {

    let [price, setPrice] = useState('');
    let [amount, setAmount] = useState('');

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.value.match(/^([0-9]{1,})?(\.)?([0-9]{1,2})?$/)){
            setPrice(event.target.value);
        }
    }

    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.value.match(/^([0-9]{1,})?(\.)?([0-9]{1,2})?$/)){
            setAmount(event.target.value);
        }
    }

    const getResult = async (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        const fetchedData = await getChangeResults(amount, price);
        if(fetchedData.status === "OK"){
            props.setChangeReturned(fetchedData.response.change_returned);
            props.setFundsRemaining(fetchedData.response.funds_remaining);
            props.setPageInteraction(true);
            props.setErrorMessage('');
            props.setErrorStatus(false);
            props.setCoinsDispensed(fetchedData.response.coins_dispensed);
        }
        else{
            props.setPageInteraction(true);
            props.setErrorStatus(true);
            props.setErrorMessage(fetchedData.response.error);
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                    <h2>Enter Price of Item & Amount Paid</h2>
                    <form>
                        <div className="row">
                            <div className="col">
                                <label> 
                                    Price
                                    <input 
                                        type="text"
                                        placeholder="Enter Price in USD"
                                        value={price}
                                        onChange={handlePriceChange}
                                    />
                                </label>
                            </div>
                            <div className="col">
                                <label> 
                                    Amount
                                    <input 
                                        type="text"
                                        placeholder="Enter amount paid in USD"
                                        value={amount}
                                        onChange={handleAmountChange}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="row" style={{paddingTop: "10px"}}>
                            <button type="submit" onClick={getResult} className="btn btn-success">Pay</button>
                        </div>
                    </form>
                    <div className="row" style={{paddingTop:"10px", textAlign:"center"}}>
                        <RefillCoins/>
                    </div>
                </div>
            </div>
        </div>
    );
}