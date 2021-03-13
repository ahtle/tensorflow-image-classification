import { Link } from 'react-router-dom';
import './project-card.scss';

type Props = {
    name: string,
    description: string,
    image: string
    path: string
}

const ProjectCard = (props: Props) => {
    return (
        <Link className="project-card mx-8 my-4 rounded overflow-hidden cursor-pointer transition group shadow hover:shadow-lg"
            to={props.path}
        >
            <div className="img-wrapper flex items-center border-b border-gray-200 bg-blue-50">
                <img src={`${process.env.PUBLIC_URL}/images/${props.image}`} alt={props.name}/>
            </div>
            <div className='card-body p-4 group-hover:bg-yellow-600 transition'>
                <p className="text-bold text-blue-900 text-lg mb-2 group-hover:text-white">{props.name}</p>
                <p className="text-gray-400 group-hover:text-white transition">{props.description}</p>
            </div>
        </Link>
    )
}

export default ProjectCard;