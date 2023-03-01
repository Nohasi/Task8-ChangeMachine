import React from "react";
import coins from "../prop_types/coins";
import { buildTableBody } from "../services/buildTableBody";

export const CoinsTable = ({coinsDispensed}: {coinsDispensed: coins}) => {
    return (
        <div className="container">
        <table className="table table-bordered table-fixed table-sm same-col-widths" style={{textAlign:"center"}}>
            <thead>
            {/* Styling to make all columns the same width */}
            <tr className="same-col-widths">
                <th>Coin Value</th>
                <th>Frequency</th> 
            </tr>
            </thead>
            {/* Function to build table body using coinsDispensed */}
            <tbody>
                {buildTableBody(coinsDispensed)}
            </tbody>
        </table>
    </div>
    );
}