import {ChangeEvent} from "react"

type SuperSelectPropsType = {
    options?: any[]
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {options, onChange, onChangeOption, ...restProps}
) => {
    const mappedOptions: any[] = options ? options.map((o, i) =>
        (<option key={o + '-' + i} value={o}>{o}</option>)) : []

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
        <select onChange={onChangeCallback} {...restProps}
                style={{width: '300px', textAlign: 'center', padding: '5px', borderRadius: '5px'}}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
