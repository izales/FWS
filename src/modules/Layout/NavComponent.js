import React, { useState, useEffect, useRef } from 'react';
import './css/nav_component.scss';
import { Link } from "react-awesome-slider/dist/navigation";

import { toAbsoluteUrl } from '../../_helpers/AssetsHelpers';

function NavComponent(props) {

    const [PortLink, setPortLink] = useState("/")



    const [slug, setSlug] = useState("/");
    let textClass = props.theme === 'dark' ? 'nav_text_dark' : 'nav_text_light';
    let navTheme = props.theme === 'dark' ? 'theme_dark' : 'theme_light';




    const [hoverRefPort, isHoveredPort] = useHover();
    const [hoverRefSol, isHoveredSol] = useHover();

   // Hook
function useHover() {
  const [value, setValue] = useState(false);
  const ref = useRef(null);
  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);
  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);
        return () => {
          node.removeEventListener("mouseover", handleMouseOver);
          node.removeEventListener("mouseout", handleMouseOut);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );
  return [ref, value];
}



    const [hoveredPort, setHoveredPort] = useState(false);
    const toggleHoverPort = () => setHoveredPort(!hoveredPort);
   // let visOne = hoveredPort === true ? 'visible' : '';
   // let visSol2 = hoveredPort === true ? 'dontvisible' : '';



    const [hoveredSolution, setHoveredSolution] = useState(false);
    const toggleHoverSolution = () => setHoveredSolution(!hoveredSolution);
    //let visPort = hoveredSolution === true ? 'dontvisible' : '';



    useEffect(() => {
        setSlug(window.location.pathname);
    }, [window.location.pathname]);

  

    const PortRef = useRef(0);
    function toggleAccordion() {
        /** */



        // @ts-ignore
        //`${contentSpace.current.scrollHeight}px`

    }
    return (
        <div className="nav_links_div">
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn"><span className={`${navTheme} navicon`}></span></label>

            <ul className={`${textClass} menu`}>
                <li className="nav_logo_li"  >
                    <Link href="/">
                        <img className="logo_img" src={`${toAbsoluteUrl(`/media/images/icon_dark.svg`)}`} alt={process.env.REACT_APP_NAME} />
                    </Link>
                </li>

                <li ref={hoverRefPort} className="liPortfolio">
                    <Link
                        href={PortLink}
                        className={(slug === "" || slug === "/" || slug === "/portfolio-two" || slug === "/portfolio-three") ? "selected" : null}
                    >
                        Portfolio
                    </Link>

                    <ul  className={`${isHoveredPort ? 'visible' : ''} ${isHoveredSol ? 'dontvisible' : ''}  dropdown`}>
                        <li><a href="/projects">Showreel</a><img className='pfeil_links' src={`${toAbsoluteUrl(`/media/icons/linker-pfeil-schwarze-dreiecksform.svg`)}`} alt="Right" /></li>
                        <li><a href="/projects-two">Retailer</a></li>
                        <li><a href="/projects-three">Jagdschulen</a></li>
                    </ul>
                </li>


                <li  ref={hoverRefSol} className="liSolution ">
                    <Link
                        href="/solutions"
                        className={slug === "/solutions" ? "selected" : null}
                    >
                        <span className='pfeil-span'>Lösungen</span>
                    </Link>
                    <ul  className={`${isHoveredSol ? 'visible' : ''}   dropdown2`}>

                        <li><a href="/imagefilm">Imagefilm</a><img className='pfeil_links' src={`${toAbsoluteUrl(`/media/icons/linker-pfeil-schwarze-dreiecksform.svg`)}`} alt="Right" /></li>
                        <li><a href="/jagdfilm">Jagdfilm</a></li>
                        <li><a href="/productfilm">Produktvideos</a></li>
                        <li><a href="/marketing">Marketing</a></li>
                        <li><a href="/drohne">Drohnen</a></li>
                        <li><a href="/webdesign">Webdesign</a></li>
                    </ul>
                </li>

                <li  className="liAgency">
                    <Link
                        href="/agency"
                        className={slug === "/agency" ? "selected" : null}
                    >
                        Über uns
                    </Link>

                </li>
                <li  className="liContact">
                    <Link
                        href="/contact-us"
                        className={slug === "/contact-us" ? "selected" : null}
                    >
                        Kontakt
                    </Link>

                </li>
            </ul>
        </div>
    );
}

export default NavComponent;