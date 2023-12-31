import { Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import img from '../../assets/custom-images/lost.gif'


const LostPage = () => {
    return (
        <div className='relative'>
            <img className='w-screen h-screen' src={img} alt="" />
            <Link to="/">
                <button className="btn bg-white absolute inset-x-0 bottom-0 h-20 mx-[800px] normal-case mb-12 text-3xl text-blue-500">
                    <FaArrowCircleLeft className='mr-4'></FaArrowCircleLeft> Back to Home</button>
            </Link>
        </div>
    );
};

export default LostPage;