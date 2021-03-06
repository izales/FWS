import React from 'react';
import './css/contact_us.scss';
import LogoComponent from '../Layout/LogoComponent';
import NavComponent from '../Layout/NavComponent';
import { toAbsoluteUrl } from '../../_helpers/AssetsHelpers';
import ImprintLink from "../Layout/ImprintLink";
import MediaQuery from 'react-responsive';
import Header from "../Layout/Header";
function ContactUs(props) {



    return (
        <div className="contact_us_div">

            <LogoComponent
                theme="light"
                pageTitle="Kontakt"
            />


            <div className="contact_us_body_div">
                <div className="title_div">
                    <span className="sub_title">Kontakt</span>
                    <span className="title">Starten Sie Ihr nächstes Projekt mit uns</span>
                </div>

                <div className="contact_details_div">
                    <span className="icon_span">
                        <img src={`${toAbsoluteUrl('/media/icons/telephone.svg')}`} alt="telephone" />
                        <label><a className="contactus-link" href="tel:+4951181126860">+49 511 811 268 60</a></label>
                    </span>

                    <span className="icon_span">
                        <img src={`${toAbsoluteUrl('/media/icons/envelope.svg')}`} alt="envelope" />
                        <label><a className="contactus-link" href="mailto:info@fsw-media.com">info@fsw-media.com</a></label>
                    </span>

                    <span className="icon_span">
                        <img src={`${toAbsoluteUrl('/media/icons/marker.svg')}`} alt="marker" />
                        <label><a className="contactus-link" href="https://www.google.com/search?q=Gro%C3%9Fe+D%C3%BCwelstra%C3%9Fe+1&rlz=1C5CHFA_enDE904DE904&oq=Gro%C3%9Fe+D%C3%BCwelstra%C3%9Fe+1&aqs=chrome..69i57.12562j0j1&sourceid=chrome&ie=UTF-8#">Große Düwelstraße 1 <br />30171 Hannover</a></label>
                    </span>
                </div>
            </div>
            <MediaQuery minWidth={756}>
                <NavComponent theme="light" />
            </MediaQuery>
            <MediaQuery maxWidth={755}>
                <Header theme="light" vis="notvisible"></Header>
            </MediaQuery>
            <ImprintLink theme="light" ></ImprintLink>

        </div>
    );
}

export default ContactUs;