import { Link } from "react-router-dom"
import log from './assets/logo.png'
import { useSelector } from 'react-redux';
import './Landing.css'
function Navbar() {
    const myCart = useSelector((state) => state.cart)
    return (
        <>
            <nav className="navbar-dark navbar navbar-expand-lg bg-dark fixed-top ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img width="170px" src={log} alt='' /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 light">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">Cart <span id="cart">{myCart.length}</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar