import React, { useRef, useState, useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import { toAbsoluteUrl } from "../../_helpers/AssetsHelpers";
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/scale-out-animation/scale-out-animation.scss';
import {
    withNavigationHandlers,
    withNavigationContext
} from "react-awesome-slider/dist/navigation";
import { media } from "./media";
import Solutions from "../Solutions/Solutions";
import "./css/master.scss"
import SplashScreen from "../Layout/SplashScreen";

const Slider = withNavigationHandlers(AwesomeSlider);



export default withNavigationContext(() => {
    const [styleLineColor, setStyleLineColor] = useState("blue");
    const isFirstLoad = useRef(true);

    const [slug, setSlug] = useState("/");
    useEffect(() => {
        setSlug(window.location.pathname);
    }, [window.location.pathname]);



    if (slug == '/solutions') {



        const buttonStyle = {
            marginTop: '0.5rem',
            fontSize: '20px',
            color: 'black'
        };

        return (
            <Slider
                className="awesome-slider"
                animation="scaleOutAnimation"
                cssModule={[CoreStyles, AwesomeSliderStyles]}
                organicArrows={false}
                buttonContentRight={[<p className="buttonStyleRight" style={buttonStyle}>WEITER</p>, <hr className="lineStyleRight lineColor1"></hr>]}
                buttonContentLeft={[<hr className="lineStyleLeft lineColor1" ></hr>, <p className="buttonStyleLeft" style={buttonStyle}>ZURÜCK</p>,]}
                media={media}
                startupScreen={<SplashScreen />}
                startupDelay={500}
                transitionDelay={100}
            // onTransitionEnd={(e) => {
            //     var video = e.currentSlide.querySelector("video");
            //     if (video !== null) {
            //         video.load();
            //     }
            // }}
            />
        );
    } else {



        const buttonStyle = {
            marginTop: '0.5rem',
            fontSize: '20px',
            color: 'white'

        };

        return (
            <Slider
                className="awesome-slider"
                animation="scaleOutAnimation"
                cssModule={[CoreStyles, AwesomeSliderStyles]}
                organicArrows={false}
                buttonContentRight={[<p className="buttonStyleRight" style={buttonStyle}>WEITER</p>, <hr className=" lineColor2 lineStyleRight"></hr>]}
                buttonContentLeft={[<hr className="lineColor2 lineStyleLeft" ></hr>, <p className="buttonStyleLeft" style={buttonStyle}>ZURÜCK</p>,]}
                media={media}
                startupScreen={<SplashScreen />}
                startupDelay={500}
                transitionDelay={100}
            // onTransitionEnd={(e) => {
            //     var video = e.currentSlide.querySelector("video");
            //     if (video !== null) {
            //         video.load();
            //     }
            // }}
            />
        );


    }
});
