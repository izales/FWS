import React, { useRef, useState } from 'react';
import { toAbsoluteUrl } from '../../_helpers/AssetsHelpers';
import Header from '../Layout/Header';
import LogoComponent from '../Layout/LogoComponent';
import NavComponent from '../Layout/NavComponent';
import './css/team.scss';
import { Link } from "react-awesome-slider/dist/navigation";
import ImprintLink from "../Layout/ImprintLink";
function Team(props) {

    //First we get the viewport height and we multiple it by 1% to get a value for a vh unit

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


    const [slug, setSlug] = useState("/contact-us");




    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    // We listen to the resize event
    window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
    return (
        <div className="solutions_div_team">

            <div className="solutions_body_div">


                <div className="icons_div">
                    <div className="icons_div_one space-right">
                        <span className="icon_span">
                            <img onClick={toggleClass} className={`round ${active ? 'showImg' : null}`} src={`${toAbsoluteUrl('/media/images/basti.jpeg')}`} alt="Sebastian" />
                            <p className="icon_label_team ">Sebastian</p>
                            <p ref={ref} className={`icon_description ${active ? 'hidden' : null}`}>
                                <a onClick={toggleClass} className="close_team"></a>
                                <span className="description_title">Sebastian</span>
                                <span className="description_text">Verantwortlich für Marketing, Kundenbetreuung und alles Organisatorische. </span>
                            </p>
                        </span>

                        <span className="icon_span space-right">
                            <a onClick={openPop}></a> <img onClick={toggleClass} className={`round ${active ? 'showImg' : null}`} src={`${toAbsoluteUrl('/media/images/max3.jpg')}`} alt="Luia" />
                            <p className="icon_label_team ">Maximilian</p>
                            <p ref={ref} className={`icon_description ${active ? 'hidden' : null}`}>
                                <a onClick={toggleClass} className="close_team"></a>
                                <span className="description_title">Maximilian</span>
                                <span className="description_text">Verantwortlich für die Planung und Durchführung von Videoprojekten sowie für allen jagdlichen Content.</span>
                            </p>
                        </span>

                    </div>

                    <div className="icons_div_two space-right">
                        <span className="icon_span ">
                            <a onClick={openPop}> <img onClick={toggleClass} className={` round ${active ? 'showImg' : null}`} src={`${toAbsoluteUrl('/media/images/wesley.jpeg')}`} alt="Wesley" /> </a>
                            <p className={`icon_label_team ${active ? 'showLabel' : null}`}>Wesley</p>
                            <p ref={ref} className={`icon_description ${active ? 'hidden' : null}`}>
                                <a onClick={toggleClass} className="close_team"></a>
                                <span className="description_title">Wesley</span>
                                <span className="description_text">Berufsjäger aus England mit 30 Jahren Erfahrung. Er verbindet Waidmännisches Denken mit moderner Kameraarbeit.</span>

                            </p>

                        </span>

                        <span className="icon_span">
                            <img onClick={toggleClass} className={` round ${active ? 'showImg' : null}`} src={`${toAbsoluteUrl('/media/images/julia.jpg')}`} alt="Mathis" />
                            <p className={`icon_label_team ${active ? 'showLabel' : null}`}>Julia</p>
                            <p ref={ref} className={`icon_description ${active ? 'hidden' : null}`}>
                                <a onClick={toggleClass} className="close_team"></a>
                                <span className="description_title">Julia</span>
                                <span className="description_text ">Verantwortlich für das Marketing, die Planung und Durchführung von Webdesign Projekten. Julia plant nutzerzentrierte Vorgehen und sorgt für eine optimale User Experience. </span>
                            </p>
                        </span>



                        {/* <span className="icon_span">
                            <div><img src={`${toAbsoluteUrl('/media/icons/advice.svg')}`} alt="advice" /></div>
                            <div className="mt-2 mx-2"><label>Erstgespräch</label></div>
                        </span> */}
                    </div>
                </div>

            </div>


        </div>
    );
}

export default Team;