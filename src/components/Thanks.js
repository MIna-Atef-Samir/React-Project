import thank from './assets/thanks.gif'
import { Link } from 'react-router-dom';
function Thanks() {
    return (
        <>
            <div className='container'>
                <div className='h-100'>
                    <div className='img-fluid d-flex justify-content-center'>
                        <img className='img-fluid' width={'fit-content'} src={thank} alt="" />
                    </div>
                    <div>

                        <Link to="/home" className='btn btn-success'>Continue Shopping</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Thanks