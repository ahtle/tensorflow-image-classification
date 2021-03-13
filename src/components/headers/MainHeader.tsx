import { Link } from 'react-router-dom';

const MainHeader = () => {
    return (
        <div id="MainHeader" className="bg-black text-white">
            <div className="container mx-auto p-2">
                <div id="logo-container">
                    <Link className="flex items-center" to='/'>
                        <img src={`${process.env.PUBLIC_URL}/images/logo192.png`} alt="React logo" width="25"/>
                        <p className="text-xl mx-2"><span className="text-react-color">React</span> x <span className="text-tensorflow-color">TensorFlow</span></p>
                        <img src={`${process.env.PUBLIC_URL}/images/tf-logo.png`} alt="TensorFlow logo" width="25"/>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default MainHeader;