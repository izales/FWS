import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Provider } from "react-awesome-slider/dist/navigation";
import FullpageSlider from './fullpage';
import './css/master.scss';
// import withAutoplay from 'react-awesome-slider/dist/autoplay';
// import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
// const AutoplaySlider = withAutoplay(AwesomeSlider);



function Master(props) {
    
    const location = useLocation();
  //x  const slug = location.pathname || "";  
    
    const [slug, setSlug] = useState("/");


    useEffect(() => {
        setSlug(window.location.pathname);
    }, [window.location.pathname]);
    
    console.log(slug);
    // JAVASCRIPT FOR Scroll
    
    if (slug === 'projects' || slug === 'projects-two' || slug === 'projects-three' || slug ===  'imprint' || slug === 'imprint' ) {
        console.log("solutions");
    
    console.log(window.location.href);
    
    
    } else {
        console.log("whell");
    
        console.log(window.location.href);
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
    
        var wheel_timer = 0
    
        window.addEventListener('wheel', function (e) {
            clearTimeout(wheel_timer);
            wheel_timer = setTimeout(function () {
                wheel(e)
            }, 50)
        });
    
        function wheel(e) {
    
            var delta = e.deltaY;
            if (delta > 0) {
                var sl = document.querySelector('[aria-label="next"]');
                sl.click();
                console.log("clcik")
                console.log('scrolled down')
            } else {
                var sl = document.querySelector('[aria-label="previous"]');
    
                sl.click();
                console.log("clcik")
                console.log('scrolled up')
            }
        }
    
    
        window.addEventListener('touchmove', function (event) {
            if (event.deltaY < 0) {
                var sl1 = document.querySelector('[aria-label="previous"]');
                sl1.click();
            }
            else if (event.deltaY > 0) {
                var sl2 = document.querySelector('[aria-label="next"]');
                sl2.click();
    
            }
    
    
        });
    
    
    
    }
    
    

  // slug(page) at which website should begin
    return (<>
        <Provider slug={slug}>
            <div className=" homepage_div">
                <FullpageSlider />
            </div>
        </Provider>
    </>);
}

export default Master;