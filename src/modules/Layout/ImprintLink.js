import React, { useState, useEffect } from 'react';
import './css/imprint_link.scss';
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from '../../_helpers/AssetsHelpers';



function ImprintLink(props) {
    let textClass = props.theme === 'dark' ? 'nav_text_dark' : 'nav_text_light';
  
    return (
        <div className="imprint-pos">

                    <div>
                    <Link className={`${textClass} firstLink`} to="/imprint"   onClick={() => {window.location.href="/imprint"}}>
                       Imprint 
                    </Link>
                    
                    </div>
                    <div>
                    <Link className={`${textClass}`}
                        to="/imprint"   onClick={() => {window.location.href="/imprint"}}
                       
                    >
                       Secure
                    </Link>
                    </div>

   
        </div>
    );
}

export default ImprintLink;