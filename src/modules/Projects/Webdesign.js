import React from 'react';
import { useRef, useState } from 'react';
import { toAbsoluteUrl } from '../../_helpers/AssetsHelpers';
import Header from '../Layout/Header';
import './css/projects.scss';
import { Link } from "react-router-dom";

function Projects(props) {
    const [slug, setSlug] = useState("/projects");
    return (
        <div className="projects_div">
            <Header theme="dark" vis=""></Header>

            <div className="section_one">
                <img className="ImageMarketing" src={`${toAbsoluteUrl(`/media/images/2.jpg`)}`} alt="Image" />
            </div>

            <div className="section_two">
                <div className="nav_button_div">
                    <div className="left_nav_span ">
                        <img className="left_nav_img" src={`${toAbsoluteUrl(`/media/icons/arrow-left-grey.svg`)}`} alt="Left" />
                        <Link to="/drohne" > <span className="left_nav_label">vorheriges Projekt</span></Link>
                    </div>
                    <div className="right_nav_span">
                        <Link to="/" ><span className="right_nav_label">Zurück zur Startseite</span></Link>
                        <img className="right_nav_img" src={`${toAbsoluteUrl(`/media/icons/arrow-right-grey.svg`)}`} alt="Right" />
                    </div>
                </div>

                <div className="title_div">
                    <span className="sub_title">Webdesign</span>
                    <span className="title">Design Ihrer Vorstellung</span>
                </div>




            </div>

            <div className="section_three">
                <img className="line_break" src={`${toAbsoluteUrl(`/media/icons/line.svg`)}`} alt="Image" />
            </div>

            <div className="section_four">
                <div className="row_four">
                    <p>Besucher einer Webseite treffen innerhalb von rund 3 Sekunden die Entscheidung, ob Sie die Seite wieder verlassen oder sich näher informieren. Wie auch im echten Leben zählt hier der erste Eindruck. Wir erarbeiten mit Ihnen zusammen ein ganzheitliches Marketingkonzept – wer ist Ihre Zielgruppe und wie können wir diese am besten überzeugen? Unsere Webseiten haben das Ziel neue Kunden für Sie zu generieren. </p>
                </div>

            </div>

            <div className="section_five">
                <img src={`${toAbsoluteUrl(`/media/images/design.jpg`)}`} alt="Image" />
                <img src={`${toAbsoluteUrl(`/media/images/design2.jpg`)}`} alt="Image" />
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


                    <Link className="footer-link" to="/solutions"> Our Solutions </Link>
                    <Link className="footer-link" to="/agency">   Our Agency</Link>
                    <a href="/" className="anchorFour "><img className="icon-width" src={`${toAbsoluteUrl('/media/images/icon_dark.svg')}`} alt={process.env.REACT_APP_NAME} /></a>
                    <Link className="footer-link" to="/contact-us">   Contact</Link>
                    <Link className="footer-link" to="/imprint">  Imprint</Link>
                    <Link className="footer-link" to="/imprint">Datasecure</Link>
                </span>
            </div>
        </div>
    );
}

export default Projects;