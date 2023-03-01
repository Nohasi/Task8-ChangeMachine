import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useState } from 'react';
import coins from '../prop_types/coins';
import { ChangeForm } from './ChangeForm';
import { DetailsPanel } from './DetailsPanel';
import { Header } from './Header';
import { ResultPanel } from './ResultPanel';

export const MachinePage = () => {

    // Output states
    let [changeReturned, setChangeReturned] = useState('');
    let [fundsRemaining, setFundsRemaining] = useState('');
    let [coinsDispensed, setCoinsDispensed] = useState({    
        dollar1: 0,
        cent50: 0,
        cent20: 0,
        cent10: 0,
        cent5: 0,
        cent2: 0,
        cent1: 0
    });

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
                {pageInteraction
                    ?<DetailsPanel 
                    errorStatus={errorStatus} 
                    errorMessage={errorMessage} 
                    coinsDispensed={coinsDispensed} 
                    />
                    :<div/>
                }

            </div>
        </div>
    );
}