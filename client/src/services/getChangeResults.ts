export const getChangeResults = async (amount: string, price: string) => {
    try {
        const response = await fetch(`change?price=${price}&amount=${amount}`, {
            method: 'GET',
            mode: 'cors',
            headers: {'Accept': 'application/json'}
        });

        const resJson = await response.json();

        if(resJson.status === 200){
            return {status: "OK", response: resJson};
        }
        else {
            return {status: "Error", response: resJson}
        }
    }
    catch (error){
        console.log('error: Could not connect to API server');
        const errorObject = {error: "Could not connect to API server"};
        return {status: "Error", response: errorObject};
    }
}