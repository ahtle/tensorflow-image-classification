import Section from '../../components/Section';
import Webcam from 'react-webcam';


const ObjectDetectionPage = () => {

    // *********** START renders **************
    return (
        <div id="ObjectDetectionPage">
            <Section>
                <h1 className="text-center mb-10">Object Detection</h1>
                <h2 className="text-center text-bold text-tensorflow-color mb-10" >Localize and identify objects in a image/video</h2>

                <div className="flex flex-col items-center">
                    <h3 className="mb-6">This demo needs a webcam</h3>

                    <div className="relative mt-12">
                        <Webcam 
                            muted={true}
                        />

                        <canvas 
                            className="absolute top-0 w-full h-full"
                        />
                    </div>
                </div>

        
            </Section>
        </div>
    )
}

export default ObjectDetectionPage;