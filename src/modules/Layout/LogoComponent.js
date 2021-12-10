import React, { useEffect, useState } from 'react';
import { toAbsoluteUrl } from '../../_helpers/AssetsHelpers';
import './css/logo_component.scss';

function LogoComponent(props) {

    const [slug, setSlug] = useState("/");
    useEffect(() => {
        setSlug(window.location.pathname);
    }, [window.location.pathname]);
    const [project, setProject] = useState("projects")
    const [displayBottomNav, setDisplayBottomNav] = useState(false);
    const [componentWidth, setComponentWidth] = useState('775px');

    useEffect(() => {
        let showBottomNav = props.showBottomNav ? true : false;
        if (!showBottomNav) {
            setComponentWidth('10%');
        }
        setDisplayBottomNav(showBottomNav);


        if(slug === "/") {
            console.log("port1");
           
          
        } else if (slug === "/portfolio-two")
        {   console.log("port2");
        setProject("projects-two") 
       
      
        } else if (slug === "/portfolio-three") {
            console.log("port3");
          setProject("/projects-three")
           
        }
    });
    
  

   
    //          <span className="page_title">{"props.pageTitle" || ""}</span> rausgenommen 18 Okt.
    return (
        <div className="logo_div" style={{ width: `${componentWidth}` }}>
            <div className="">
                <a href="/"><img   className="logo_img"  src={`${toAbsoluteUrl(`/media/images/icon_${props.theme}.svg`)}`} alt={process.env.REACT_APP_NAME} /></a>
                <span className="">{"" || ""}</span>
            </div>

            {displayBottomNav && <a href={project} className="title_section">
                <span className="sub_title">{props.subTitle}</span>
                <span className="title">{props.title}</span>
                <span className="link_title">
                    <span>Explore Project</span>
                    <img src={`${toAbsoluteUrl(`/media/icons/path.svg`)}`} alt="Right" />
                </span>
            </a>}
        </div>
    );
}

export default LogoComponent;