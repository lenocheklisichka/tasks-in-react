import React, {ChangeEvent} from 'react'
import s from './SuperDoubleRange.module.css'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: number
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    min: number
    max: number
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {onChangeRange, onChange, value, min, max, ...restProps}) => {



    const onChangeDoubleRange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeRange && onChangeRange([30, 70])
    }

    return (
        <>
            <div>
                <input min={0}
                       max={100}
                       value={value}
                       type={'range'}
                       onChange={onChangeDoubleRange}
                       className={s.inputDoubleRange1}
                       {...restProps}
                />
            </div>
        </>
    )
}

export default SuperDoubleRange
