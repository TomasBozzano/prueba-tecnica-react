import { useState } from "react"
import {getPersonData} from "../service/email.service"

export const UsePerson = () => {
    
    const [email, setEmail] = useState('')

    const handleChange = (e) => {
        const inputEmail = e.target.value.trim().toLocaleLowerCase()
        setEmail(inputEmail)
    }

    const handleSubmit = () => {
        let emailToLower = email.toLocaleLowerCase()
        return getPersonData(emailToLower)
    }

    return {
        email,
        handleChange,
        handleSubmit
    }
}