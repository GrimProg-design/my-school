import { Link } from "react-router-dom";
import "../style/header.css"

export default function Header() {
    return (
        <div className="header-wrapper">
            <Link to="/get" className="links">Get</Link>
            <Link to="/post" className="links">Post</Link>
        </div>
    )
}