import { useState } from "react";
import { useDispatch } from "react-redux";
import "./singleProduct.scss";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../Redux/cartSlice";


const SingleProductComponent = ({state, m1}) => {

    const dispatch = useDispatch();
    const navigation = useNavigate()
    // let [quantity, setQuantity] = useState(0)
    // const decreaseQty = () => {
    //     if(quantity > 0){
    //         quantity = quantity - 1
    //         setQuantity(quantity)
    //     }
        
    // }
    // const increaseQty = () => {
    //         quantity = quantity + 1
    //         setQuantity(quantity)
        
    // }
    const addToCartHandler = () =>{
        // const price = quantity*state.price
        // const tempData = {
        //     ...state,
        //     quantity:1,
        //     total: state.price
        // }
        dispatch(addToCart(state))
        navigation('/cart')
    }

    return (
        <div className='overlay-bg'
        // onClick={modalOverla   fyHandler}
        >
            <div className="product-details-modal bg-white">
                <button type="button" className='modal-close-btn flex flex-center fs-14'
                onClick={() => m1(false)}
                >
                    <i className="fas fa-times"></i>
                </button>
                <div className="details-content grid">
                    {/* details left */}
                    <div className="details-right">
                        <div className="details-img">
                            <img src={state.images[0]} alt={state.title} />
                        </div>
                    </div>
                    {/* detials right */}
                    <div className='details-left'>
                        <div className="details-info">
                            <h3 className="title text-regal-blue fs-22 fw-5">{state.title}</h3>
                            <p className='description text-pine-green'>{state.description}</p>
                            <div className='price fw-7 fs-24'>{`Price: ${state.price}`} </div>
                            {/* <div className="qty flex">
                                <span className="text-light-blue qty-text">Qty: </span>
                                <div className="qty-change flex">
                                    <button type="button" className='qty-dec fs-14'
                                    // onClick={() => decreaseQty()}
                                    >
                                        <i className="fas fa-minus text-light-blue"></i>
                                    </button>
                                    <span className="qty-value flex flex-center">{quantity}</span>
                                    <button type="button" className='qty-inc fs-14 text-light-blue'
                                    onClick={() => dispatch(addToCart(state))}
                                    >
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </div>
                            </div> */}
                            <button type="button" className='btn-primary add-to-cart-btn'
                            onClick={() => addToCartHandler()}
                            >
                                <span className="btn-icon">
                                    <i className='fas fa-cart-shopping'></i>
                                </span>
                                <span className='btn-text'>Add To Cart</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SingleProductComponent