import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://verpelis.gratis/wp-content/uploads/2020/11/verpelis-logo.png" /></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
                <Link to="/movies/favorites" style={{textDecoration: "none"}}><span>Favorites</span></Link>
                <Link to="/movies/watch_later" style={{textDecoration: "none"}}><span>Watch Later</span></Link>
            </div>
        </div>
    )
}

export default Header