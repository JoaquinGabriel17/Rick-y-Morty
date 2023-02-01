import SearchBar from "./SearchBar.jsx";
import { Link } from "react-router-dom";
import style from "./Nav.module.css"
const { nave, link, image  } = style

const Nav = (prop) => {
    return (
        <nav className={nave}>
            <img className={image} alt="holanda" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ycPEVgOrN5lFTu4oOt_nlH2MPzxRoH1arw&usqp=CAU'></img>
            <Link className={link} to="/favorites" >FAVORITES</Link>
           <Link className={link} to="./about">ABOUT</Link>
           <Link className={link} to="/">LOGOUT</Link>
           <SearchBar onSearch={prop.onSearch}/>
           
        </nav>
    )
}

export default Nav