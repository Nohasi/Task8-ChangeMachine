import React, { useState } from "react";
import resultPanelProps from "../prop_types/resultPanelProps";
import { DisplayResult } from "./DisplayResult";
import { ErrorResult } from "./ErrorResult";

export const ResultPanel = (props: resultPanelProps) => {
    let [color, setColor] = useState("#50C878");

    return(
        <div style={{backgroundColor: color}} className="display-board">
            {props.errorStatus
            ? <ErrorResult setColor={setColor}/>
            :<DisplayResult setColor={setColor} changeReturned={props.changeReturned}/>
            }
        </div>
    );
}