import { useEffect } from "react"
import Carsole from "./Carsole"
import SingleProduct from "./SingleProduct"
import './Home.css'
import Loading from "./Loading"
import { useDispatch, useSelector } from "react-redux"
import { fetchData } from './rtk/slices/products-slice.js'

function Home() {

    const products = useSelector((state) => state.products);
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchData())
    }, [])
    return (
        <div className="Home pt-5">
            <div className="container my-0 py-5">
                <div className="row mb-3">
                    <Carsole />
                </div>
                <div className="row">

                    {!products.length ? <Loading /> : products.map((p) => {
                        return (<>
                            <div className="col-md-4 my-3" key={p.id} >
                                <SingleProduct product={p} />
                            </div>
                        </>)
                    })}

                </div>
            </div>
        </div>
    )
}
export default Home