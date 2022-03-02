import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    let [error, setError] = useState<string>('')

    let errorString = "Name is required!";

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const validateName = e.currentTarget.value.trim()
        if (validateName) {
            setName(validateName)
            error && setError("")
        } else {
            setName("")
            setError(errorString)
        }
    }

    const addUser = () => {
        addUserCallback(name)
        alert(`Hello ${name} !`)
        setName("")
    }

    const totalUsers = users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
