import React, { useState, useEffect, useRef } from 'react';
import './css/nav_component.scss';
import { Link } from "react-awesome-slider/dist/navigation";

import { toAbsoluteUrl } from '../../_helpers/AssetsHelpers';

function NavComponent(props) {
    const [slug, setSlug] = useState("/");
    let textClass = props.theme === 'dark' ? 'nav_text_dark' : 'nav_text_light';
    let navTheme = props.theme === 'dark' ? 'theme_dark' : 'theme_light';



    const [hoveredPort, setHoveredPort] = useState(false);
    const toggleHoverPort = () => setHoveredPort(!hoveredPort);
    let visOne = hoveredPort === true ? 'visible' : '';
    let visSol2 = hoveredPort === true ? 'dontvisible' : '';



    const [hoveredSolution, setHoveredSolution] = useState(false);
    const toggleHoverSolution = () => setHoveredSolution(!hoveredSolution);
    let visPort = hoveredSolution === true ? 'dontvisible' : '';


    const [hoveredAgency, setHoveredAgency] = useState(false);
    const toggleHoverAgency = () => setHoveredAgency(!hoveredAgency);
    let visSol = hoveredAgency === true ? 'dontvisible' : '';

    const [hoveredContact, setHoveredContact] = useState(false);
    const toggleHoverContact = () => setHoveredContact(!hoveredContact);
    let visAge = hoveredContact === true ? 'dontvisible' : '';

    useEffect(() => {
        setSlug(window.location.pathname);
    }, [window.location.pathname]);



    const PortRef = useRef(0);
    function toggleAccordion() {
        /** */



        // @ts-ignore
        //`${contentSpace.current.scrollHeight}px`

    }
    return (
        <div className="nav_links_div">
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn"><span className={`${navTheme} navicon`}></span></label>

            <ul className={`${textClass} menu`}>
                <li className="nav_logo_li"  >
                    <Link href="/">
                        <img className="logo_img" src={`${toAbsoluteUrl(`/media/images/icon_dark.svg`)}`} alt={process.env.REACT_APP_NAME} />
                    </Link>
                </li>

                <li className="liPortfolio">
                    <Link
                        href="/"
                        className={(slug === "" || slug === "/" || slug === "/portfolio-two" || slug === "/portfolio-three") ? "selected" : null}
                    >
                        Portfolio
                    </Link>

                    <ul onMouseOver={toggleHoverPort} onMouseLeave={toggleHoverPort} className={`${visPort}  dropdown`}>
                        <li><a href="/projects">Showreel</a><img className='pfeil_links' src={`${toAbsoluteUrl(`/media/icons/linker-pfeil-schwarze-dreiecksform.svg`)}`} alt="Right" /></li>
                        <li><a href="/projects-three">Jagdschule</a></li>
                        <li><a href="/projects-two">Will&Apel</a></li>
                    </ul>
                </li>


                <li onMouseOver={toggleHoverSolution} onMouseLeave={toggleHoverSolution} className="liSolution">
                    <Link
                        href="/solutions"
                        className={slug === "/solutions" ? "selected" : null}
                    >
                        <span className='pfeil-span'>Solutions</span>
                    </Link>
                    <ul className={`${visSol}  dropdown2`}>

                        <li><a href="/imagefilm">Imagefilm</a><img className='pfeil_links' src={`${toAbsoluteUrl(`/media/icons/linker-pfeil-schwarze-dreiecksform.svg`)}`} alt="Right" /></li>
                        <li><a href="/jagdfilm">Jagdfilm</a></li>
                        <li><a href="/imagefilm">Productfilm</a></li>
                        <li><a href="/marketing">Marketing</a></li>
                        <li><a href="/drohne">Drohnen</a></li>
                        <li><a href="/webdesign">Webdesign</a></li>
                    </ul>
                </li>

                <li onMouseOver={toggleHoverAgency} onMouseLeave={toggleHoverAgency} className="liAgency">
                    <Link
                        href="/agency"
                        className={slug === "/agency" ? "selected" : null}
                    >
                        Our Agency
                    </Link>

                </li>
                <li onMouseEnter={toggleHoverContact} onMouseLeave={toggleHoverContact} className="liContact">
                    <Link
                        href="/contact-us"
                        className={slug === "/contact-us" ? "selected" : null}
                    >
                        Contact Us
                    </Link>

                </li>
            </ul>
        </div>
    );
}

export default NavComponent;