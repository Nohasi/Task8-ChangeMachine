import coins from "./coins";

export default interface detailsProps {
    errorStatus: boolean,
    errorMessage: string,
    changeReturned: string,
    coinsDispensed: coins
}