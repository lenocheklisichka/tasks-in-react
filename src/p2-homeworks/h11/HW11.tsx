import React, {ChangeEvent, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(30)
    const [value2, setValue2] = useState(70)

    const changeValue1 = (e: ChangeEvent<HTMLInputElement>) => {
        setValue1(+e.currentTarget.value)
    }

    const changeValue2 = (e: ChangeEvent<HTMLInputElement>) => {
        setValue2(+e.currentTarget.value)
    }

    return (
        <div>
            <hr/>
            homeworks 11
            <div>
                <span>{value1}</span>
                <SuperRange
                    min={0}
                    max={100}
                    value={value1}
                    onChange={changeValue1}
                />
            </div>

            <div style={{display: 'flex'}}>
                <span>{value1}</span>
                <SuperDoubleRange
                    min={0}
                    max={100}
                    value={[value1, value2]}
                    // onChangeRange={[changeValue1,changeValue2]}
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
