import jess from './assets/jess1.jpg'
function About() {
    return (
        <div className='Home'>
            <div className="container mb-0 mt-5">
                <div className="row pt-5">
                    <div className="col-md-4 ps-5 pe-5 pb-5 d-flex align-items-center">
                        <img className='img-fluid' src={jess} alt="" />
                    </div>
                    <div className="col-md-7 mb-5 p-5" style={{
                        backgroundColor: "rgba(0,0,0,.5)",
                        height: "fit-content",
                        padding: '10px',
                        color: '#fff'
                    }}>
                        <h3>Where does it come from?</h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About