import React from "react";

var date = new Date();
var currentYear = date.getFullYear();

function Footer(){
    return (
        <footer>
            <p className="footer-content">copyright by &copy; {currentYear}</p>
        </footer>
    )
}

export default Footer;