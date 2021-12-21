import React, { useState, useEffect } from 'react';
import { toAbsoluteUrl } from '../../_helpers/AssetsHelpers';
import { Link } from "react-router-dom";
import './css/header.scss';

function Header(props) {
    const [slug, setSlug] = useState("/");

    const [active, setActive] = useState(false);
    const toggle = () => setActive(!active);
    let visPort = active === false ? 'dontvisible' : '';

    const [activeSol, setActiveSol] = useState(false);
    const toggleSol = () => setActiveSol(!activeSol);
    let visSol = activeSol === false ? 'dontvisible' : '';



    let navTheme = props.theme === 'dark' ? 'theme_dark' : 'theme_light';
    let visLogo = props.vis === 'notvisible' ? 'notvisible' : null;




    useEffect(() => {
        setSlug(window.location.pathname);
    }, [window.location.pathname]);

    return (
        <div className="navBar">
            <span>

                <a href="/"> <img className={`${visLogo} logo_img`} src={`${toAbsoluteUrl('/media/images/icon_dark.svg')}`} alt={process.env.REACT_APP_NAME} /></a>

            </span>
            <span>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn"><span className={`${navTheme} navicon`}></span></label>
                <ul className="menu">
                    <li className="nav_logo_li">
                        <Link to="/">
                            <img className="" src={`${toAbsoluteUrl(`/media/images/icon_dark.svg`)}`} alt={process.env.REACT_APP_NAME} />
                        </Link>
                    </li>
                    <li onClick={toggle}>

                        <span className='icon_hover'> Portfolio</span>

                        <ul className={`${visPort} mobiledropPort `}  >
                            <li><a href="/projects">Showreel</a></li>
                            <li><a href="/projects-two">Retailer</a></li>
                            <li><a href="/projects-three">Jagdschule</a></li>

                        </ul>
                    </li>
                    <li onClick={toggleSol}>


                        <span className='icon_hover'> Solutions</span>

                        <ul className={`${visSol} mobiledropPort `}>
                            <li><a href="/imagefilm">Imagefilm</a></li>
                            <li><a href="/jagdfilm">Jagdfilm</a></li>
                            <li><a href="/productfilm">Produktfilm</a></li>
                            <li><a href="/marketing">Marketing</a></li>
                            <li><a href="/drohne">Drohnen</a></li>
                            <li><a href="/webdesign">Webdesign</a></li>
                        </ul>
                    </li>
                    <li>
                        <Link
                            to="/agency"
                        >
                            Our Agency
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact-us"
                        >
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </span>
        </div>
    );
}

export default Header;