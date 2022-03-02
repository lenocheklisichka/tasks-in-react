import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string;
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void;
    addUser: () => void;
    error: string;
    totalUsers: number;
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : s.input

    return (
        <div className={s.greeting}>
            <div>
                <input value={name}
                       onChange={setNameCallback}
                       className={inputClass}
                />
                <div className={s.error}>{error}</div>
            </div>
            <div>
                <button className={s.button} onClick={addUser} disabled={!name}>add</button>
                <span className={s.count}>{totalUsers}</span>
            </div>
        </div>
    )
}

export default Greeting
