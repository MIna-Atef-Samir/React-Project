import Jess1 from './assets/jess1.jpg'
import './Landing.css';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <>
            <div className='baack'>
                <div className='land'>
                </div>
                <div className='filter'>
                    <div className='text'>
                        <h1 className='text-light'>Welcome To <span className='text-warning'>Mina's</span>  Stors</h1>
                        <div className='move'>
                            <Link to='/home' className='btn btn-warning boootn'>Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Landing