
import React, { useRef, useState } from 'react';
import './css/agency.scss';
import LogoComponent from '../Layout/LogoComponent';
import NavComponent from '../Layout/NavComponent';
import { toAbsoluteUrl } from '../../_helpers/AssetsHelpers';
import ImprintLink from "../Layout/ImprintLink";
import Team from "../Team/Team";
import MediaQuery from 'react-responsive';
import Header from "../Layout/Header";
function Agency(props) {

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    // We listen to the resize event
    window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    const ref = useRef(null);

    const [active, setActiveState] = useState(false);
    console.log(active)

    function toggleClass() {
        const currentState = active;
        setActiveState(!active);
        console.log(currentState)
    };

    function openPop() {
        const p = ref.current;
        p.className = "show";
        p.className = "icon_description";




    }


    return (
        <div className="agency_div">
            <LogoComponent
                theme="light"
                pageTitle="Our Agency"
            />

            <div className="agency_body_div">
                <div className="title_div">
                    <span className="sub_title">Full Service Agency</span>
                    <span className="title">Über uns</span>
                </div>

                <div className="description_div">
                    <p className="description_one">
                        Wir verkaufen keine Videos, wir bieten Lösungen! Wir analysieren Ihre Ziele, Ihr Unternehmen und Ihre Produkte, um ein nachhaltiges und außergewöhnliches Erlebnis für Sie und Ihr Zielpublikum zu schaffen. Seite an Seite entwickeln wir die Botschaft, die Sie vermitteln wollen. Zögern Sie nicht und kontaktieren Sie uns jetzt für einen Termin.
                    </p>


                    {/*
                    <p className="description_two">
                        <span className="me-2">Team entdecken</span>
                        <img src={`${toAbsoluteUrl('/media/icons/arrow-right-small.svg')}`} alt="Right" />
                    </p>
                    */}
                </div>

                <Team></Team>


            </div>

            <MediaQuery minWidth={756}>
                <NavComponent theme="light" />
            </MediaQuery>
            <MediaQuery maxWidth={755}>
                <Header theme="light" vis="notvisible"></Header>
            </MediaQuery>
            <ImprintLink theme="light"></ImprintLink>
        </div>
    );
}

export default Agency;