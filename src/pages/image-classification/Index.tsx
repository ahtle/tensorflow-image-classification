import React, { useState, useRef, useEffect } from 'react';
import Section from '../../components/Section';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';

const ImageClassificationPage = () => {
    const [urlString, setUrlString] = useState('https://media4.s-nbcnews.com/j/newscms/2016_36/1685951/ss-160826-twip-05_8cf6d4cb83758449fd400c7c3d71aa1f.fit-760w.jpg');
    const [model, setModel] = useState<mobilenet.MobileNet>();
    const [predictions, setPredictions] = useState<{className: string, probability: number}[]>();
    const imgRef = useRef<HTMLImageElement>(null);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrlString(e.target.value);
    };

    const onClick = async () => {
        try {
            const res = await fetch('https://picsum.photos/400');
            console.log(res);
            setUrlString(res.url);
        } catch(e) {
            console.log(e);
        }
    }

    const classifyModel = async () => {
        if (model && imgRef.current) {
            try {
                const p = await model.classify(imgRef.current);
                setPredictions(p);
            }  catch(e) {
                console.log(e);
            }
        }
    };
    
    useEffect(() => {
        setPredictions(undefined);
        setTimeout(() => {
            classifyModel();
        }, 500);
    }, [urlString]);

    useEffect(() => {
        classifyModel();
    }, [model]);
    
    useEffect( () => {
        async function loadModel() {
            tf.getBackend();
            const net = await mobilenet.load();
            setModel(net);
        }
        loadModel();
    }, []);

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
                        <div className="flex flex-col items-center  w-full md:w-2/3">
                            <img src={urlString} ref={imgRef} crossOrigin="anonymous"/>
                            
                            {
                                predictions ? (
                                    <div className="w-full bg-gray-100 py-4 px-8 mt-10">
                                        {predictions.map(p => {
                                            return (
                                                <div key={p.className} className="mb-4">
                                                    <p><strong>{p.className}</strong></p>
                                                    <p>Possibility: { (p.probability * 100).toFixed(2) }%</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                ) : <p className="mt-10">Loading</p>
                            }
                        </div>


                    </div>
                </div>
            </Section>
        </div>
    )
}

export default ImageClassificationPage;