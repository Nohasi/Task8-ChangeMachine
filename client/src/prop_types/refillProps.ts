export default interface refillProps {
    setFundsRemaining: React.Dispatch<React.SetStateAction<string>>,
    setErrorStatus: React.Dispatch<React.SetStateAction<boolean>>,
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
    setPageInteraction: React.Dispatch<React.SetStateAction<boolean>>
}