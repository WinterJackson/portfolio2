import React from 'react';
import "./headerSocials.css";

const HeaderSocials = () => {
    return (
        <div className="home__socials">
            <a href="https://www.instagram.com/kuzzi_wj/" className="home__social-link" target="_blank">
                <i class="fa-brands fa-instagram"></i>
            </a>

            <a href="https://twitter.com/kuzzi_wj" className="home__social-link" target="_blank">
                <i class="fa-brands fa-twitter"></i>
            </a>

            <a href="https://wa.me/0795213399" className="home__social-link" target="_blank">
                <i class="fa-brands fa-whatsapp"></i>
            </a>

            <a href="https://github.com/WinterJackson" className="home__social-link" target="_blank">
                <i class="fa-brands fa-github"></i>
            </a>

            <a href="https://www.linkedin.com/in/winter-jackson-454843178/" className="home__social-link" target="_blank">
                <i class="fa-brands fa-linkedin"></i>
            </a>
        </div>
    );
}

export default HeaderSocials;  