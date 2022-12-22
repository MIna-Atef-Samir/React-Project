import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearCart, removeFromCart, addToCart, removeSingle } from './rtk/slices/cart-slice';
import { Link } from 'react-router-dom';
function Cart() {
    const myCart = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const totalPrice = myCart.reduce((acc, product) => {
        acc += product.price * product.quantity
        return acc
    }, 0)
    return (
        <>
            <div className="container pt-5">
                <h2>Your Cart</h2>
                <button className='btn btn-outline-danger' onClick={() => dispatch(clearCart())}>Clear</button>
                <h4 className='my-4'>Total price: ${totalPrice.toFixed(2)}</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Image</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myCart.map((m) => {
                            return (
                                <tr key={m.id}>
                                    <th scope="row">{m.id}</th>
                                    <td>{m.title}</td>
                                    <td><img src={m.image} style={{ width: '50px' }} alt="" /></td>
                                    <td>${m.price}</td>
                                    <td className='text-center'>
                                        <button className='btn btn-secondary' onClick={() => dispatch(addToCart(m))}>+</button>
                                        <button className='btn btn-secondary mx-2' onClick={() => dispatch(removeSingle(m))}>-</button>
                                        {m.quantity}
                                    </td>
                                    <td><button className='btn btn-danger' onClick={() => dispatch(removeFromCart(m))} >Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className='text-center m-5'>
                    <Link to={`/pay`} className='btn btn-success'>Purchase</Link>
                    <Link to={`/home`} className='btn btn-dark ms-3'>Continue to Shopping</Link>
                </div>
            </div>
        </>
    )
}
export default Cart