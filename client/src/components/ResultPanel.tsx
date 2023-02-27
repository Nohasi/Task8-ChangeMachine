import React, { useState } from "react";

export const ResultPanel = () => {
    let [color, setColor] = useState("#50C878");

    return(
        <div style={{backgroundColor: color}} className="display-board">

        </div>
    );
}