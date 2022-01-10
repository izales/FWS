import React from 'react';
import { useRef, useState } from 'react';
import { toAbsoluteUrl } from '../../_helpers/AssetsHelpers';
import Header from '../Layout/Header';

import { Link } from "react-router-dom";

function NotFound(props) {
    const [slug, setSlug] = useState("/projects");
    return (
        <div className="projects_div">
            <Header />

            <div className="section_one">

            </div>

            <div className="section_two">
                <div className="nav_button_div">
                    <div className="left_nav_span ">

                    </div>
                    <div className="right_nav_span">

                    </div>
                </div>

                <div className="title_div">
                    <span className="sub_title">404 Error</span>
                    <span className="title">Site not Found<br></br> </span>
                </div>




            </div>

            <div className="section_three">

            </div>

            <div className="section_four">


            </div>

            <div className="section_five">

            </div>

            <div className="section_six">
                <p className="mb-0">Start today</p>
                <p className="contact_email">{process.env.REACT_APP_EMAIL}</p>
                <Link
                    to="/contact-us"
                    className={slug === "/contact-us" ? "selected" : null}
                > <img src={`${toAbsoluteUrl('/media/icons/arrow-right.svg')}`} alt="Right" /></Link>
            </div>

            <div className="section_seven">
                <span>
                    <Link className="footer-link" to="/">Portfolio</Link>


                    <Link className="footer-link" to="/solutions"> Unsere Lösung</Link>
                    <Link className="footer-link" to="/agency">   Über uns</Link>
                    <a href="/" className="anchorFour"><img src={`${toAbsoluteUrl('/media/images/icon_dark.svg')}`} alt={process.env.REACT_APP_NAME} /></a>
                    <Link className="footer-link" to="/contact-us">   Contact</Link>
                    <Link className="footer-link" to="/imprint">  Imprint</Link>
                    <Link className="footer-link" to="/imprint">Datasecure</Link>
                </span>
            </div>
        </div>
    );
}

export default NotFound;