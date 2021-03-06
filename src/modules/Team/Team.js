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
                                <span className="description_text">Verantwortlich f??r Marketing, Kundenbetreuung und alles Organisatorische. </span>
                            </p>
                        </span>

                        <span className="icon_span space-right">
                            <a onClick={openPop}></a> <img onClick={toggleClass} className={`round ${active ? 'showImg' : null}`} src={`${toAbsoluteUrl('/media/images/max3.jpg')}`} alt="Max" />
                            <p className="icon_label_team ">Maximilian</p>
                            <p ref={ref} className={`icon_description ${active ? 'hidden' : null}`}>
                                <a onClick={toggleClass} className="close_team"></a>
                                <span className="description_title">Maximilian</span>
                                <span className="description_text">Verantwortlich f??r die Planung und Durchf??hrung von Videoprojekten sowie f??r allen jagdlichen Content.</span>
                            </p>
                        </span>

                    </div>

                    <div className="icons_div_two space-right">
                        <span className="icon_span ">
                            <a onClick={openPop}> <img onClick={toggleClass} className={` round ${active ? 'showImg' : null}`} src={`${toAbsoluteUrl('/media/images/mathis.jpeg')}`} alt="Wesley" /> </a>
                            <p className={`icon_label_team ${active ? 'showLabel' : null}`}>Mathis</p>
                            <p ref={ref} className={`icon_description ${active ? 'hidden' : null}`}>
                                <a onClick={toggleClass} className="close_team"></a>
                                <span className="description_title">Mathis</span>
                                <span className="description_text">Mathis hat mit seinen mehr als 10 Jahren Berufserfahrung ein Auge f??r Details wie kein anderer. In der Post-Produktion vermag er es jeden Pixel farblich anzupassen um so ein fesselndes Gesamtkunstwerk zu erschaffen.</span>

                            </p>

                        </span>

                        <span className="icon_span">
                            <img onClick={toggleClass} className={` round ${active ? 'showImg' : null}`} src={`${toAbsoluteUrl('/media/images/julia.jpg')}`} alt="Julia" />
                            <p className={`icon_label_team ${active ? 'showLabel' : null}`}>Julia</p>
                            <p ref={ref} className={`icon_description ${active ? 'hidden' : null}`}>
                                <a onClick={toggleClass} className="close_team"></a>
                                <span className="description_title">Julia</span>
                                <span className="description_text ">Verantwortlich f??r das Marketing, die Planung und Durchf??hrung von Webdesign Projekten. Julia plant nutzerzentrierte Vorgehen und sorgt f??r eine optimale User Experience. </span>
                            </p>
                        </span>



                        {/* <span className="icon_span">
                            <div><img src={`${toAbsoluteUrl('/media/icons/advice.svg')}`} alt="advice" /></div>
                            <div className="mt-2 mx-2"><label>Erstgespr??ch</label></div>
                        </span> */}
                    </div>
                </div>

            </div>


        </div>
    );
}

export default Team;