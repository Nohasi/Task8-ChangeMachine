import React from "react";
import displayResultProps from "../prop_types/displayResultProps";

export const DisplayResult = (props: displayResultProps) => {
    props.setColor("#50C878");
    return(
        <div style={{textAlign: "center"}}>
        <h4 style={{color: 'black'}}>Change Returned:</h4>
        <div className="result">
            {`$${props.changeReturned}`}
        </div>
    </div>
    );
}