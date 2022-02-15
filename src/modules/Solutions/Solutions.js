import React, { useRef, useState } from 'react';
import { toAbsoluteUrl } from '../../_helpers/AssetsHelpers';
import Header from '../Layout/Header';
import LogoComponent from '../Layout/LogoComponent';
import NavComponent from '../Layout/NavComponent';
import './css/solutions.scss';
import { Link } from "react-awesome-slider/dist/navigation";
import ImprintLink from "../Layout/ImprintLink";
import MediaQuery from 'react-responsive';



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
        <div className="solutions_div">
            <LogoComponent
                theme="dark"
                pageTitle="How we operate"
            />

            <div className="solutions_body_div">
                <div className="title_div">
                    <span className="sub_title">Full Service Agency</span>
                    <span className="title">Unsere Lösungen</span>
                </div>

                <div className="icons_div">
                    <div className="icons_div_one">
                        <span className="icon_span">
                            <img onClick={toggleClass} className={` ${active ? 'showImg' : null}`} src={`${toAbsoluteUrl('/media/icons/advice.svg')}`} alt="Erstgespräch" />
                            <p className={`icon_label ${active ? 'showLabel' : null}`}>Erstkontakt</p>
                            <p ref={ref} className={`icon_description ${active ? 'hidden' : null}`}>
                                <a onClick={toggleClass} className="close"></a>
                                <span className="description_title">Erstkontakt</span>
                                <span className="description_text">Bei unserem ersten Treffen möchten wir Sie und Ihr Unternehmen kennenlernen. Wir legen die Ziele Ihrer Kampagne fest und sammeln erste Ideen für Ihr Video. Um die Messung der Kampagne zu gewährleisten, benötigen wir einige Geschäftseinblicke. Alles ist vertraulich.</span>
                            </p>
                        </span>

                        <span className="icon_span">
                            <a onClick={openPop}></a> <img onClick={toggleClass} className={` ${active ? 'showImg' : null}`} src={`${toAbsoluteUrl('/media/icons/creativity.svg')}`} alt="Konzept" />
                            <p className={`icon_label ${active ? 'showLabel' : null}`}>Konzeptdesign</p>
                            <p ref={ref} className={`icon_description ${active ? 'hidden' : null}`}>
                                <a onClick={toggleClass} className="close"></a>
                                <span className="description_title">Konzeptdesign</span>
                                <span className="description_text">Unsere Kreativ- und Marketingabteilung erstellt einen Entwurf für Ihr Unternehmen, der auf die Ziele und Werte Ihres Unternehmens zugeschnitten ist. Das Ziel: Auffallen in einer lauten und vernetzten Online-Welt. Sie erhalten ein Angebot mit den verschiedenen Entwürfen.</span>
                            </p>
                        </span>

                        <span className="icon_span">
                            <a onClick={openPop}><img onClick={toggleClass} className={` ${active ? 'showImg' : null}`} src={`${toAbsoluteUrl('/media/icons/video.svg')}`} alt="Produktion" /> </a>
                            <p className={`icon_label ${active ? 'showLabel' : null}`}>Produktion</p>
                            <p ref={ref} className={`icon_description ${active ? 'hidden' : null}`}>
                                <a onClick={toggleClass} className="close"></a>
                                <span className="description_title">Produktion</span>

                                <span className="description_text">Nachdem Sie sich für eine Zusammenarbeit mit uns entschieden haben, beginnen wir mit der Planung der Dreharbeiten, sammeln alle für Ihr Video erforderlichen Informationen und beginnen mit der Buchung von Schauspielern und Sprechern. Sie sind bei allen Schritten dabei, nichts geschieht ohne Ihre Zustimmung.</span>
                            </p>
                        </span>
                    </div>

                    <div className="icons_div_two">
                        <span className="icon_span">
                            <a onClick={openPop}> <img onClick={toggleClass} className={` ${active ? 'showImg' : null}`} src={`${toAbsoluteUrl('/media/icons/film-editing.svg')}`} alt="Post-Produktion" /> </a>
                            <p className={`icon_label ${active ? 'showLabel' : null}`}>Post-Produktion</p>
                            <p ref={ref} className={`icon_description ${active ? 'hidden' : null}`}>
                                <a onClick={toggleClass} className="close"></a>
                                <span className="description_title">Post-Produktion</span>
                                <span className="description_text">Wenn Sie sich für Marketingdienste entschieden haben, beginnen wir mit der Optimierung Ihrer bereits bestehenden Social-Media-Präsenz oder erstellen sie von Grund auf neu. Nun geht es an die Postproduktion: Die verschiedenen Szenen werden geschnitten, Animationen werden erstellt und Ihr Video wird Realität. Nachdem Sie dem Rohschnitt zugestimmt haben, optimieren wir die Farben und das Erscheinungsbild der Szenen, um sicherzustellen, dass Ihr Film heraussticht! Dieser Schritt kann der zeitaufwendigste sein, aber er ist die Mühe wert!</span>

                            </p>

                        </span>

                        <span className="icon_span">
                            <img onClick={toggleClass} className={` ${active ? 'showImg' : null}`} src={`${toAbsoluteUrl('/media/icons/cloud-computing.svg')}`} alt="Übergabe" />
                            <p className={`icon_label ${active ? 'showLabel' : null}`}>Auslieferung</p>
                            <p ref={ref} className={`icon_description ${active ? 'hidden' : null}`}>
                                <a onClick={toggleClass} className="close"></a>
                                <span className="description_title">Auslieferung</span>
                                <span className="description_text">Nachdem alles erledigt ist und Sie das Video genehmigt haben, wird es an alle gängigen Social-Media-Plattformen angepasst: Instagram, YouTube, Facebook, LinkedIn. Wir sorgen dafür, dass Ihre Botschaft auf jedem Medium ankommt. Wenn Sie Marketingdienstleistungen gebucht haben, starten wir die Kampagnen und überwachen sie.</span>
                            </p>
                        </span>

                        <span className="pagination_span">
                            <p className="mb-0">Schreib uns</p>
                            <p className="contact_email">{process.env.REACT_APP_EMAIL}</p>
                            <Link
                                href="/contact-us"
                                className={slug === "/contact-us" ? "selected" : null}
                            > <img src={`${toAbsoluteUrl('/media/icons/arrow-right.svg')}`} alt="Right" /></Link>
                        </span>

                        {/* <span className="icon_span">
                            <div><img src={`${toAbsoluteUrl('/media/icons/advice.svg')}`} alt="advice" /></div>
                            <div className="mt-2 mx-2"><label>Erstgespräch</label></div>
                        </span> */}
                    </div>
                </div>
                <ImprintLink theme="dark"></ImprintLink>
            </div>

            <MediaQuery minWidth={756}>
                <NavComponent theme="dark" />
            </MediaQuery>
            <MediaQuery maxWidth={755}>
                <Header theme="dark" vis="notvisible"></Header>
            </MediaQuery>
        </div>
    );
}

export default Solutions;