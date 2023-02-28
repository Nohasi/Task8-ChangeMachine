import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useState } from 'react';
import coins from '../prop_types/coins';
import { ChangeForm } from './ChangeForm';
import { Header } from './Header';
import { ResultPanel } from './ResultPanel';

export const MachinePage = () => {

    // Output states
    let [changeReturned, setChangeReturned] = useState('');
    let [fundsRemaining, setFundsRemaining] = useState('');
    let [coinsDispensed, setCoinsDispensed] = useState({});

    // Page control / error handling states
    let [pageInteraction, setPageInteraction] = useState(false);
    let [errorStatus, setErrorStatus] = useState(false);
    let [errorMessage, setErrorMessage] = useState('');

    return(
        <div className="App">
            <Header/>
            <div className="container mrgnbtm">
                <div className="row">
                    <div className="col-md-8">
                        <ChangeForm
                            setChangeReturned={setChangeReturned}
                            setPageInteraction={setPageInteraction}
                            setErrorStatus={setErrorStatus}
                            setErrorMessage={setErrorMessage}
                            setFundsRemaining={setFundsRemaining}
                            setCoinsDispensed={setCoinsDispensed}
                        />
                    </div>
                    <div className="col-md-4">
                        {pageInteraction
                        ? <ResultPanel
                            changeReturned={changeReturned}
                            errorStatus={errorStatus}
                            fundsRemaining={fundsRemaining}
                        />
                        : <div/>
                        }
                    </div>
                </div>
            </div>
            <div className="container mrgnbtm">
                {/* TODO: TRANSACTIONS TABLE / ERROR DISPLAY */}
            </div>
        </div>
    );
}