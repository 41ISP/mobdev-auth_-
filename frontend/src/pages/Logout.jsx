import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Logout = () => {
    const navigate = useNavigate()
    useEffect(() => {
        clearSession()
        navigate("/")
    }, [])
    return <></>
}

export default Logout