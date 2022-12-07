import "./cartPage.scss";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, cartQuantity, reomoveProductFromCart, clearCart } from "../../Redux/cartSlice";
import MainTemplate from "../../Main Template/mainTemplate";


const CartPage = () => {

    const dispatch = useDispatch();
    const [cartProducts, setCartProducts] = useState([])


    const emptyCartMsg = <h4 className='text-red fw-6'>No items found!</h4>;

    const onSubmitHandler = (dat) => {
        dispatch(addToCart(dat))
        const data = JSON.parse(localStorage.getItem('cartData'))
        if (data) {
            setCartProducts(data.data)
        }
    }
    const onSubmitQuantity = (dat) => {
        dispatch(cartQuantity(dat))
        const data = JSON.parse(localStorage.getItem('cartData'))
        if (data) {
            setCartProducts(data.data)
        }
    }
    const onRemoveCart = (id) => {
        dispatch(reomoveProductFromCart(id))
        const data = JSON.parse(localStorage.getItem('cartData'))
        if (data) {
            setCartProducts(data.data)
        }
    }
    const onClearCart = () => {
        dispatch(clearCart())
        const data = JSON.parse(localStorage.getItem('cartData'))
        if (data) {
            setCartProducts(data.data)
        }
    }
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('cartData'))
        if (data) {
            setCartProducts(data.data)
        }
    }, [])
    return (
        <MainTemplate>
            <div className="cart-page">
                <div className="container">
                    <div className="breadcrumb">
                        <ul className="breadcrumb-items flex">
                            <li className="breadcrumb-item">
                                <Link to="/">
                                    <i className="fas fa-home"></i>
                                    <span className="breadcrumb-separator">
                                        <i className="fas fa-chevron-right"></i>
                                    </span>
                                </Link>
                            </li>
                            <li>Cart</li>
                        </ul>
                    </div>
                </div>
                <div className='bg-ghost-white py-5'>
                    <div className='container'>
                        <div className='section-title bg-ghost-white'>
                            <h3 className="text-uppercase fw-7 text-regal-blue ls-1">My Cart</h3>
                        </div>
                        {
                            cartProducts?.length === 0 || cartProducts == undefined ? emptyCartMsg : (
                                <div className="cart-content grid">
                                    <div className='cart-left'>
                                        <div className="cart-items grid">
                                            {
                                                cartProducts?.map(cartProduct => (
                                                    <div className='cart-item grid'
                                                        key={cartProduct.id}
                                                    >
                                                        <div className='cart-item-img flex flex-column bg-white'>
                                                            <img src={cartProduct.images[0]} alt={cartProduct.title} />
                                                            <button type="button" className='btn-square rmv-from-cart-btn'
                                                                onClick={() => onRemoveCart(cartProduct.id)}
                                                            >
                                                                <span className='btn-square-icon'><i className='fas fa-trash'></i></span>
                                                            </button>
                                                        </div>

                                                        <div className='cart-item-info'>
                                                            <h6 className='fs-16 fw-5 text-light-blue'>
                                                                {cartProduct.title}
                                                            </h6>
                                                            <div className="qty flex">
                                                                <span className="text-light-blue qty-text">Qty: </span>
                                                                <div className="qty-change flex">
                                                                    <button type="button" className='qty-dec fs-14'
                                                                        // onClick={decreaseQty(cartProduct.quantity)}
                                                                        onClick={() => onSubmitQuantity({ type: "DEC", cartProduct })}
                                                                    >
                                                                        <i className="fas fa-minus text-light-blue"></i>
                                                                    </button>
                                                                    <span className="qty-value flex flex-center">
                                                                        {cartProduct.cartQuantity}
                                                                    </span>
                                                                    <button type="button" className='qty-inc fs-14 text-light-blue'
                                                                        onClick={() => onSubmitQuantity({ type: "INC", cartProduct })}
                                                                    // onClick={increaseQty(cartProduct.quantity)}
                                                                    >
                                                                        <i className="fas fa-plus"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-between">
                                                                <div className='text-pine-green fw-4 fs-15 price'>{`Price : ${cartProduct.price}.00`}</div>
                                                                <div className='sub-total fw-6 fs-18 text-regal-blue'>
                                                                    <span>Sub Total: </span>
                                                                    <span className=''>
                                                                        {cartProduct.totalPrice}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <button type="button" className='btn-danger'
                                            onClick={() => onClearCart()}
                                        >
                                            <span className="fs-16">Clear Cart</span>
                                        </button>
                                    </div>
                                    <div className='cart-right bg-white'>
                                        <div className='cart-summary text-light-blue'>
                                            <div className='cart-summary-title'>
                                                <h6 className='fs-20 fw-5'>Order Summary</h6>
                                            </div>
                                            <ul className='cart-summary-info'>
                                                <li className="flex flex-between">
                                                    <span className='fw-4'>Selected
                                                        {/* {totalItems}  */}
                                                        100
                                                        items(s) Price</span>
                                                    <span className='fw-7'>
                                                        {/* {formatPrice(totalAmount)} */}
                                                        100
                                                    </span>
                                                </li>
                                                <li className='flex flex-between'>
                                                    <span className='fw-4'>Discount</span>
                                                    <span className='fw-7'>
                                                        <span className='fw-5 text-red'>-&nbsp;</span>
                                                        {/* {formatPrice(0)} */}
                                                        100
                                                    </span>
                                                </li>
                                                <li className='flex flex-between'>
                                                    <span className='fw-4'>Delivery Cost</span>
                                                    <span className='fw-7'>
                                                        <span className='fw-5 text-gold'>+&nbsp;</span>
                                                        {/* {formatPrice(deliveryCharge)} */}
                                                        100
                                                    </span>
                                                </li>
                                            </ul>
                                            <div className='cart-summary-total flex flex-between fs-18'>
                                                <span className='fw-6'>Grand Total: </span>
                                                <span className='fw-6'>
                                                    {/* {formatPrice(totalAmount + deliveryCharge)} */}
                                                    100
                                                </span>
                                            </div>
                                            <div className='cart-summary-btn'>
                                                <button type="button" className='btn-secondary'>Proceed to Checkout</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </MainTemplate>
    )
}


export default CartPage