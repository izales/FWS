import React, { useRef, useState } from 'react';
import { toAbsoluteUrl } from '../../_helpers/AssetsHelpers';
import Header from '../Layout/Header';
import LogoComponent from '../Layout/LogoComponent';
import NavComponent from '../Layout/NavComponent';
import './css/solutions.scss';
import { Link } from "react-awesome-slider/dist/navigation";
import ImprintLink from "../Layout/ImprintLink";
function Solutions(props) {

    //First we get the viewport height and we multiple it by 1% to get a value for a vh unit
   
const ref = useRef(null);




const [active, setActiveState] = useState(false);
console.log(active)

function toggleClass() {
    const currentState = active;
    setActiveState(!active);
    console.log(currentState)
};




function openPop(){
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
        <div className="solutions_div">
            <LogoComponent 
                theme="dark" 
                pageTitle="How we operate" 
            />

            <div className="solutions_body_div">
                <div className="title_div">
                    <span className="sub_title">Full Service Agency</span>
                    <span className="title">Our Solutions</span>
                </div>

                <div className="icons_div">
                    <div className="icons_div_one">
                        <span className="icon_span">
                            <img onClick={toggleClass} className={` ${active ? 'showImg': null}`} src={`${toAbsoluteUrl('/media/icons/advice.svg')}`} alt="Erstgespräch" />
                            <p   className={`icon_label ${active ? 'showLabel': null}`}>First Contact</p>
                            <p ref={ref} className={`icon_description ${active ? 'hidden': null}`}>
                            <a   onClick={toggleClass} className="close"></a>
                                <span className="description_title">First Contact</span>
                                <span className="description_text">In our first meeting we'd like to get to know you and your business. We determine the goals of your campaign and gather first ideas for your video. To ensure the measurement of the campaign we need some business insights. Everything is confidential.</span>
                            </p>
                        </span>

                        <span className="icon_span">
                           <a onClick={openPop}></a> <img onClick={toggleClass} className={` ${active ? 'showImg': null}`} src={`${toAbsoluteUrl('/media/icons/creativity.svg')}`} alt="Konzept" />
                            <p   className={`icon_label ${active ? 'showLabel': null}`}>Concept design</p>
                            <p ref={ref} className={`icon_description ${active ? 'hidden': null}`}>
                            <a   onClick={toggleClass} className="close"></a>
                                <span className="description_title">Concept design</span>
                                <span className="description_text">Our creative and marketing department creates a draft of your business, tailored to the goals and values of your company. The goal: To stand out in a loud and connected online world. You receive an offer with the various drafts.</span>
                            </p>
                        </span>

                        <span className="icon_span">
                            <a onClick={openPop}><img  onClick={toggleClass} className={` ${active ? 'showImg': null}`}  src={`${toAbsoluteUrl('/media/icons/video.svg')}`} alt="Produktion" /> </a>
                            <p   className={`icon_label ${active ? 'showLabel': null}`}>Production</p>
                            <p ref={ref} className={`icon_description ${active ? 'hidden': null}`}>
                            <a   onClick={toggleClass} className="close"></a>
                                <span className="description_title">Production</span>
                              
                                <span  className="description_text">After you decided to work with us, we begin to schedule the shoots, gather all the information required for your video and start booking actors and speakers. You are in the loop of all steps, nothing happens without your consent.</span>
                            </p>
                        </span>
                    </div>

                    <div className="icons_div_two">
                        <span className="icon_span">
                        <a onClick={openPop}> <img onClick={toggleClass} className={` ${active ? 'showImg': null}`}  src={`${toAbsoluteUrl('/media/icons/film-editing.svg')}`} alt="Post-Produktion" /> </a>
                            <p   className={`icon_label ${active ? 'showLabel': null}`}>Post-production</p>
                            <p ref={ref} className={`icon_description ${active ? 'hidden': null}`}>
                            <a   onClick={toggleClass} className="close"></a>
                                <span className="description_title">Post-production</span>
                                <span className="description_text">If you opted in for marketing services, we will begin to optimize your already existing social media presence, or create it from scratch.
Now its all about post-production: the various scenes get cut, animations are getting created and your video becomes reality. After you approved the raw cut, we optimize the colors and scene appearance to ensure your film stands out!
This step can be the most time consuming, but it is really worth the effort!</span>
                                
                            </p>
                           
                        </span>

                        <span className="icon_span">
                            <img onClick={toggleClass} className={` ${active ? 'showImg': null}`}  src={`${toAbsoluteUrl('/media/icons/cloud-computing.svg')}`} alt="Übergabe" />
                            <p   className={`icon_label ${active ? 'showLabel': null}`}>Delivery</p>
                            <p ref={ref} className={`icon_description ${active ? 'hidden': null}`}>
                            <a   onClick={toggleClass} className="close"></a>
                                <span className="description_title">Delivery</span>
                                <span className="description_text">After everything is done and you approved the video, it gets adapted to all the common social media platforms: Instagram, YouTube, Facebook, LinkedIn. We make sure that your message gets transported on any medium.
If you booked marketing services, we start the campaigns and monitor them.</span>
                            </p>
                        </span>

                        <span className="pagination_span">
                            <p className="mb-0">Start today</p>
                            <p className="contact_email">{process.env.REACT_APP_EMAIL}</p>
                            <Link 
                        href="/contact-us"
                        className={slug === "/contact-us" ? "selected" : null}
                    > <img src={`${toAbsoluteUrl('/media/icons/arrow-right.svg')}`}  alt="Right" /></Link>
                        </span>

                        {/* <span className="icon_span">
                            <div><img src={`${toAbsoluteUrl('/media/icons/advice.svg')}`} alt="advice" /></div>
                            <div className="mt-2 mx-2"><label>Erstgespräch</label></div>
                        </span> */}
                    </div>
                </div>
                <ImprintLink  theme="dark"></ImprintLink>
            </div>

            <NavComponent theme="dark" />
        </div>
    );
}

export default Solutions;