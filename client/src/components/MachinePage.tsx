import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useState } from 'react';

export const MachinePage = () => {
    return(
        <div className="App">
            {/* TODO: HEADER */}
            <div className="container mrgnbtm">
                <div className="row">
                    <div className="col-md-8">
                        {/* TODO: FORM DISPLAY */}
                    </div>
                    <div className="col-md-4">
                        {/* TODO: RESULTS PANEL */}
                    </div>
                </div>
            </div>
            <div className="container mrgnbtm">
                {/* TODO: TRANSACTIONS TABLE / ERROR DISPLAY */}
            </div>
        </div>
    );
}