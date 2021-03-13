import React, { useState } from 'react';
import Section from '../../components/Section';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
// import * as mobilenet from '@tensorflow-models/mobilenet';

const ImageClassificationPage = () => {
    const [urlString, setUrlString] = useState('https://media4.s-nbcnews.com/j/newscms/2016_36/1685951/ss-160826-twip-05_8cf6d4cb83758449fd400c7c3d71aa1f.fit-760w.jpg');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrlString(e.target.value);
    };

    const onClick = async () => {
        let res = await fetch('https://picsum.photos/300');;
        if (res.status === 200) {
            setUrlString(res.url);
        }
    };

    return (
        <div id="ImageClassificationPage" className="px-4 md:px-0">
            <Section>
                <h1 className="text-center mb-10">Image Classification</h1>
                <h2 className="text-center text-bold text-tensorflow-color" >Classify images with labels from the ImageNet database</h2>

            </Section>

            <Section>
                <div className="grid md:grid-cols-2 gap-4">
                    {/* col 1 */}
                    <div className="flex flex-col items-center">
                        <label>Paste in an image URL</label>
                        <div className="mt-4 mb-10 w-full md:w-2/3">
                            <InputText
                                placeholder="https://..."
                                value={urlString}
                                onChange={onChange}
                            />
                        </div>

                        <p className="mb-10">Or</p>

                        <Button
                            text="Get random image"
                            theme="tf"
                            onClick={onClick}
                        />

                    </div>
                    
                    {/* col 2 */}
                    <div className="flex flex-col items-center">
                        <div className="w-full md:w-2/3">
                            <img src={urlString} />
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}

// things to do:
// input box to get image url
// or use an api to get a random image: https://picsum.photos/300
// display image
// run image classification and display result


// Note: you do not need to import @tensorflow/tfjs here.

// const mobilenet = require('@tensorflow-models/mobilenet');

// const img = document.getElementById('img');

// // Load the model.
// const model = await mobilenet.load();

// // Classify the image.
// const predictions = await model.classify(img);

// console.log('Predictions: ');
// console.log(predictions);

export default ImageClassificationPage;