type Props = {
    text: string,
    theme?: string,
    onClick: () => void,
}

const Button = (props: Props) => {
    const dynamicClass = () => {
        let res;
        if (props.theme === 'tf') {
            res = 'border-tensorflow-color hover:border-red-700 hover:bg-red-700 hover:text-white';
        }
        return res;
    }

    return (
        <button className={`${dynamicClass()} border-2 px-8 py-2 rounded text-2xl transition`}  onClick={props.onClick}>{props.text}</button>
    )
}

export default Button;