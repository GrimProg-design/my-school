import { Link } from "react-router-dom";
import "../style/header.css"
import Mode from "./Mode";

export default function Header() {
    return (
        <header className="header-wrapper">
            <Link to="/get" className="links">Get</Link>
            <Link to="/post" className="links">Post</Link>
            <Link to="/users" className="links">Users</Link>
            <Mode/>
        </header>
    )
}