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
                <video
                    autoPlay
                    loop
                    muted
                // style={{
                //     position: "relative",
                //     width: "1440px",
                //     left: "50%",
                //     top: "50%",
                //     height: "900px",
                //     objectFit: "cover",
                //     transform: "translate(-50%,-50%)",
                //     // opacity: 0.5
                //     // zIndex: "-1"
                // }}
                >
                    <source src={toAbsoluteUrl("/media/video/FSW-Media-Promo.mp4")} type="video/mp4"></source>
                </video>
            </div>

            <div className="section_two">
                <div className="nav_button_div">
                    <div className="left_nav_span ">
                        <img className="left_nav_img" src={`${toAbsoluteUrl(`/media/icons/arrow-left-grey.svg`)}`} alt="Left" />
                        <Link to="/" > <span className="left_nav_label">Zurück zur Startseite</span></Link>
                    </div>
                    <div className="right_nav_span">
                        <Link to="/projects-two" ><span className="right_nav_label">nächstes Projekt</span></Link>
                        <img className="right_nav_img" src={`${toAbsoluteUrl(`/media/icons/arrow-right-grey.svg`)}`} alt="Right" />
                    </div>
                </div>

                <div className="title_div">
                    <span className="sub_title">Showreel</span>
                    <span className="title">Unsere Projekte</span>
                </div>




            </div>

            <div className="section_three">
                <img className="line_break" src={`${toAbsoluteUrl(`/media/icons/line.svg`)}`} alt="Image" />
            </div>

            <div className="section_four">
                <div className="row_four">
                    <p> Imagefilm, Werbefilm, Marketingstrategie oder Webdesign: Bei uns erhält Ihr Unternehmen kompetenteste Beratung, angepasst an die Jagd und die Zielgruppe der Jäger.
                        Profitieren Sie von unserer breiten Palette verschiedenster Produkte, denn wir setzen auf eine ganzheitliche Marketinglösung.
                        Auf den nächsten Seiten finden Sie einige unserer besten Arbeiten.
                        Wir sind überzeugt davon, Sie begeistern zu können!</p>
                </div>

            </div>

            <div className="section_five">
                <img src={`${toAbsoluteUrl(`/media/images/pfeil.jpg`)}`} alt="Image" />
                <img src={`${toAbsoluteUrl(`/media/images/pfeil-2.jpg`)}`} alt="Image" />
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
                    <Link className="footer-link" to="/contact-us">   Contact</Link>
                    <Link className="footer-link" to="/imprint">  Impressum</Link>
                    <Link className="footer-link" to="/imprint">Datenschutz</Link>
                </span>
            </div>
        </div>
    );
}

export default Projects;