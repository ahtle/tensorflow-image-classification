import Section from '../components/Section';
import ProjectCard from '../components/home/ProjectCard';


const projects = [
    {name: 'Image classification', description: `Upload images and I'll tell you what it is!`, path: '/image-classification', image: 'tf-image-classification-logo.png'},
    {name: 'Object detection', description: 'Are you really a "person"? Turn on your webcam and find out!', path: '/object-detection', image: 'tf-object-detection-logo.png'},
]

const Home = () => {
    return (
        <div id="Home">
            
            {/* intro section */}
            <Section
                class="bg-gray-600 text-white"
            >
                <>
                    <h1 className="text-center mb-10">Practice site for...</h1>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div id="react-wrapper" className="flex flex-col items-center mb-5 md:mb-0">
                            <h1 className="text-react-color text-bold mb-5">React</h1>
                            <p className="text-center">A JavaScript library for building user interfaces</p>
                        </div>
                        <div className="flex flex-col items-center mb-5 md:mb-0">
                            <h1 className="text-tensorflow-color text-bold mb-5">Tensorflow</h1>
                            <p className="text-center">an end-to-end open source platform for machine learning</p>
                        </div>
                    </div>
                </>
            </Section>
            
            {/* topics section */}
            <Section>
                <>
                    <h1 className="text-center mb-14">Mini projects:</h1>
                    <div className="flex justify-center">
                        
                        {projects.map(p => {
                            return (
                                <ProjectCard 
                                    key={p.name}
                                    name={p.name}
                                    description={p.description}
                                    image={p.image}
                                    path={p.path}
                                />
                            )
                        })}


                    </div>
                </>
            </Section>

        </div>
    )
}

export default Home;