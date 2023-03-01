import React from "react";
import coins from "../prop_types/coins";
import detailsProps from "../prop_types/detailsProps";
import { CoinsTable } from "./CoinsTable";
import { ErrorMessage } from "./ErrorMessage";

export const DetailsPanel = (props: detailsProps) => {
    return (
        <div className="container">
            {props.errorStatus
            ?<ErrorMessage errorMessage={props.errorMessage} />
            : <CoinsTable coinsDispensed={props.coinsDispensed} />
            }
        </div>
    );
}