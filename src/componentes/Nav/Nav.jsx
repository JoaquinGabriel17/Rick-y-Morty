import SearchBar from "./SearchBar.jsx";
import { Link } from "react-router-dom";
import style from "./Nav.module.css"
const { nave, link  } = style

const Nav = (prop) => {
    return (
        <nav className={nave}>
            <Link className={link} to="/favorites" >FAVORITES</Link>
           <Link className={link} to="./about">ABOUT</Link>
           <Link className={link} to="/">FORM</Link>
           <SearchBar onSearch={prop.onSearch}/>
           
        </nav>
    )
}

export default Nav