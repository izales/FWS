import React from 'react';
import { toAbsoluteUrl } from '../../_helpers/AssetsHelpers';
import './css/splash_screen.scss';

function SplashScreen(props) {
    return (
        <div className="splash_screen_div">
            <img
                src={toAbsoluteUrl("/media/images/icon_light.svg")}
                alt={process.env.REACT_APP_NAME}
            />
        </div>
    );
}

export default SplashScreen;