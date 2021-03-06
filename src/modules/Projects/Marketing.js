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
                <img className="ImageMarketing" src={`${toAbsoluteUrl(`/media/images/1.jpg`)}`} alt="Image" />
            </div>

            <div className="section_two">
                <div className="nav_button_div">
                    <div className="left_nav_span ">
                        <img className="left_nav_img" src={`${toAbsoluteUrl(`/media/icons/arrow-left-grey.svg`)}`} alt="Left" />
                        <Link to="/productfilm" > <span className="left_nav_label">vorheriges Projekt</span></Link>
                    </div>
                    <div className="right_nav_span">
                        <Link to="/drohne" ><span className="right_nav_label">Nächstes Projekt</span></Link>
                        <img className="right_nav_img" src={`${toAbsoluteUrl(`/media/icons/arrow-right-grey.svg`)}`} alt="Right" />
                    </div>
                </div>

                <div className="title_div">
                    <span className="sub_title">Marketing</span>
                    <span className="title">Steigern Sie die Aufmerksamkeit Ihres Unternehmens</span>
                </div>




            </div>

            <div className="section_three">
                <img className="line_break" src={`${toAbsoluteUrl(`/media/icons/line.svg`)}`} alt="Image" />
            </div>

            <div className="section_four">
                <div className="row_four">
                    <p> Wir lassen Sie nicht im Regen stehen! Wir helfen Ihnen bei der korrekten Einbindung und der effektiven Nutzung Ihres fertig produzierten Films. Auf Social Media, auf Ihrer Webseite oder bei lokalen Veranstaltungen.</p>
                </div>

            </div>

            <div className="section_five">
                <img src={`${toAbsoluteUrl(`/media/images/couple.jpg`)}`} alt="Image" />
                <img src={`${toAbsoluteUrl(`/media/images/tablet.jpg`)}`} alt="Image" />
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
                    <a href="/" className="anchorFour "><img className="icon-width" src={`${toAbsoluteUrl('/media/images/icon_dark.svg')}`} alt={process.env.REACT_APP_NAME} /></a>
                    <Link className="footer-link" to="/contact-us">   Kontakt</Link>
                    <Link className="footer-link" to="/imprint">  Impressum</Link>
                    <Link className="footer-link" to="/imprint">Datenschutz</Link>
                </span>
            </div>
        </div>
    );
}

export default Projects;