import { ReactNode } from 'react';

type Props = {
    children: ReactNode,
    class?: string
}

const Section = (props: Props) => {
    return (
        <div className={`py-10 ${props.class}`}>
            <div className="container mx-auto">
                {props.children}
            </div>
        </div>
    )
}

export default Section;