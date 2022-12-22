import './Footer.css'
function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 footer-col">
                            <h4>company</h4>
                            <ul>
                                <li><a href="/#">about us</a></li>
                                <li><a href="/#">our services</a></li>
                                <li><a href="/#">privacy policy</a></li>
                                <li><a href="/#">affiliate program</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 footer-col">
                            <h4>get help</h4>
                            <ul>
                                <li><a href="/#">FAQ</a></li>
                                <li><a href="/#">shipping</a></li>
                                <li><a href="/#">returns</a></li>
                                <li><a href="/#">order status</a></li>
                                <li><a href="/#">payment options</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 footer-col">
                            <h4>online shop</h4>
                            <ul>
                                <li><a href="/#">watch</a></li>
                                <li><a href="/#">bag</a></li>
                                <li><a href="/#">shoes</a></li>
                                <li><a href="/#">dress</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='row text-center pt-5'>
                        <p className='text-light'>All rights are preserved to &copy;Mina Atef 😎 19/12/2022</p>
                    </div>
                </div>
            </footer>

        </>
    )
}
export default Footer