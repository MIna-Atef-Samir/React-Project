import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from './rtk/slices/cart-slice';
function SingleProduct(props) {
    const dispatch = useDispatch();

    return (
        <>
            <div className="card click" key={props.product.id}>
                <Link to={`/home/${props.product.id}`} className="single">
                    <div className="image_">
                        <img src={props.product.image} className="card-img-top myimg" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{props.product.title.slice(0, 44)}...</h5>
                        <p className="card-text">{props.product.description.slice(0, 55)} ...</p>
                    </div>
                </Link>
                <div className="bootn">
                    <div className="btn btn-success w-100" onClick={() => dispatch(addToCart(props.product))}>Add to Cart</div>
                </div>
            </div>
        </>
    )
}
export default SingleProduct