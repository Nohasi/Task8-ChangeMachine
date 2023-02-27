import React, { useState } from "react";
import { FormProps } from "../prop_types/formProps";

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

    const getResult = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                    <h2>Select number of Dice, Flips, and Players</h2>
                    <form>
                        <div className="row">
                            <div className="col">
                                <label> 
                                    Price
                                    <input 
                                        type="text"
                                        placeholder="Enter Price"
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
                                        placeholder="Enter amount paid"
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
                </div>
            </div>
        </div>
    );
}