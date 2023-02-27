import React from "react";

export const ChangeForm = () => {

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
                                        pattern="[0-9]*"
                                        placeholder="Enter Price" 
                                    />
                                </label>
                            </div>
                            <div className="col">
                                <label> 
                                    Amount
                                    <input 
                                        type="text"
                                        pattern="[0-9]*"
                                        placeholder="Enter amount paid" 
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="row" style={{paddingTop: "10px"}}>
                            <button type="submit" className="btn btn-success">Pay</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}