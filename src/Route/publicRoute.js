import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const PublicRoute = (props) => {
    const {Component} = props
    const navigate = useNavigate()
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user?.token) {
            navigate('/checkout')
        }
    })
    return(
        <Component />
    )
}

export default PublicRoute

 