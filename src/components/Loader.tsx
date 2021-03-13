type Props = {
    loading: boolean
}

const Loader = (props: Props) => {
    if (props.loading) {
        return (
            <div className="absolute w-full h-full top-0 flex justify-center items-center bg-gray-300 bg-opacity-50">
                <h1 className="">Loading...</h1>
            </div>
        )
    }
    return <></>
}

export default Loader;