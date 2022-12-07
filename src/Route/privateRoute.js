import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const PrivateRoute = (props) => {
    const {Component} = props
    const navigate = useNavigate()
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (!user?.token) {
            navigate('/login')
        }
    })
    return(
        <Component />
    )
}

export default PrivateRoute