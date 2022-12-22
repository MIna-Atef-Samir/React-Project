import { Link, useParams } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import Loading from './Loading';
import { useDispatch } from 'react-redux';
import { addToCart } from "./rtk/slices/cart-slice";

function SinglePage() {

    const apiProduct = "https://fakestoreapi.com/products"
    const [mySingle, getSingle] = useState({})
    const prams = useParams()

    const fetchSingle = () => {
        fetch(`${apiProduct}/${prams.proid}`)
            .then(res => res.json())
            .then(data => getSingle(data))
    }
    useEffect(() => {
        return fetchSingle()
    }, [])
    const dispatch = useDispatch();


    return (
        <div className="Home pt-5">
            {mySingle === null ? <Loading /> :
                <div className="container pt-5 my-0">
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <h3 className="my-5 text-light color">{mySingle.title}</h3>
                            <div className="text-center">
                                <img width="300px" className="mb-5" src={mySingle.image} alt="" />
                            </div>
                            <p className="">Price: ${mySingle.price}</p>
                            <button className="btn btn-warning mx-3" onClick={() => dispatch(addToCart(mySingle))}>Add to Cart</button>
                            <Link to={`/pay/${mySingle.id}`} className="btn btn-success mx-3">Buy</Link>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-4 my-5 color text-center">
                            <p>Tags goes here ..</p>
                            <p>Tage_1</p>
                            <p>Tage_2</p>
                            <p>Tage_3</p>
                            <p>Tage_4</p>
                            <p>Tage_5</p>
                        </div>
                        <hr className="my-3" />
                    </div>

                    <div className="row mt-5 pb-5">
                        <div className="col-md-6 color">

                            <h3>Description</h3>
                            <p>{mySingle.description}</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
export default SinglePage