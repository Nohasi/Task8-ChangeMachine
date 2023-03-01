import coins from "../prop_types/coins";

export const buildTableBody = (coinsDispensed: coins, changeReturned: string) => {
    if(Number(changeReturned) === 0){
        return (
            [
            <tr key={0}>
                <td>None</td>
                <td>None</td>
            </tr>
            ]
        );
    }
    console.log(changeReturned);
    const coinValues = ["1 Dollar", "50 Cents", "20 Cents", "10 Cents", "5 Cents", "2 Cents", "1 Cent"];
    let rows: JSX.Element[] = [];
    let valueIndex = 0;
    let rowKey = 0;
    for(const [k, v] of Object.entries(coinsDispensed)){
        if(v !== 0){
            rows.push(
            <tr key={rowKey}>
                <td>{coinValues[valueIndex]}</td>
                <td>{v}</td>
            </tr>
            );
            rowKey++; valueIndex++
        }
        else {
            valueIndex++;
        }
    }

    return rows;
}