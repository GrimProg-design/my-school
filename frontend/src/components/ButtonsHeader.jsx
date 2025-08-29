import { Link } from "react-router-dom"
import "../style/header.css"

export default function Buttons({value, path, onClick, isActive}) {

    return(
        <Link to={path} className={isActive ? "active" : "not-active"} onClick={onClick}>{value}</Link>
    )
}