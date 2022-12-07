import { useEffect, useState } from "react"
import { register } from "../../Redux/authSlice"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { auth: { isLoggedIn } } = useSelector((state) => state)
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        contactNo: ''
    })

    useEffect(() => {
        if (isLoggedIn) {
            toast("Logged In")
            setTimeout(() => {
                navigate('/checkout')
            }, 2000);
        }
    }, [isLoggedIn])

    const onChangeHandler = (e) => {
        const { value, name } = e.target
        setData({ ...data, [name]: value })
    }
    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(register(data))

    }

    return (
        <div style={{
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
            height: '100vh'
        }}>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                theme="light"
            />
            <div style={{
                textAlign: 'center',
                height: '50%',
                alignItems: 'center',
                display: 'grid'
            }}>
                <div>
                    <h2>Sign Up</h2>
                </div>
                <div style={{
                    borderStyle: 'solid',
                    borderWidth: 'thin'
                }}>
                    <input onChange={onChangeHandler} type='text' name="name" placeholder="FullName" value={data.name} />
                </div>
                <div style={{
                    borderStyle: 'solid',
                    borderWidth: 'thin'
                }}>
                    <input onChange={onChangeHandler} type='text' name="email" value={data.email} placeholder="Email" />
                </div>
                <div style={{
                    borderStyle: 'solid',
                    borderWidth: 'thin'
                }}>
                    <input onChange={onChangeHandler} type='text' name="password" value={data.password} placeholder="Password" />
                </div>
                <div style={{
                    borderStyle: 'solid',
                    borderWidth: 'thin'
                }}>
                    <input onChange={onChangeHandler} type='text' name="contactNo" value={data.contactNo} placeholder="ContactNo" />
                </div>
                <div style={{
                    borderStyle: 'solid',
                    borderWidth: 'thin'
                }}>
                    <button style={{
                        width: '100%'
                    }}
                        onClick={onSubmitHandler}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SignupPage