import React from 'react';

type Props = {
    className?: string,
    placeholder?: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const InputText = (props: Props) => {
    return (
        <input type="text" className={`${props.className} border border-gray-200 rounded px-4 py-2 w-full`}
            placeholder={props.placeholder} 
            value={props.value}
            onChange={props.onChange}
        />
    )
}

export default InputText;