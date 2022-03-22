import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider/Slider';
import React, {ChangeEvent, useState} from 'react'
import s from './SuperDoubleRange.module.css'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    min: number
    max: number
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {onChangeRange, value, min, max, ...restProps}) => {

    const handleChangeDoubleRange = (event: any, newValue: any) => {
        onChangeRange && onChangeRange([30, 70])
    }

    return (
        <Box sx={{width: 500}}>
            <Slider
                min={0}
                max={100}
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChangeDoubleRange}
                valueLabelDisplay="auto"
                {...restProps}
            />
        </Box>
    );
}

export default SuperDoubleRange
