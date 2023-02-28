export default interface FormProps {
    setChangeReturned: React.Dispatch<React.SetStateAction<string>>
    setPageInteraction: React.Dispatch<React.SetStateAction<boolean>>
    setErrorStatus: React.Dispatch<React.SetStateAction<boolean>>
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>
    setFundsRemaining: React.Dispatch<React.SetStateAction<string>>
}