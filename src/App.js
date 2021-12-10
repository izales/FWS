import './App.css';
import Routes from './Routes';
import { BrowserRouter } from "react-router-dom";
import CookieConsent, {
	getCookieConsentValue,
	Cookies,
  } from "react-cookie-consent";
import ReactGA from "react-ga";
import { useEffect } from "react";
import ReactPixel from 'react-facebook-pixel';


function App() {
	ReactGA.pageview(window.location.pathname);
	const options = {
		autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
		debug: false, // enable logs
	  };
	const handleAcceptCookie = () => {
		ReactGA.initialize("G-1TYMEX2F3Y");
		ReactPixel.init('1313645692421651', options);
		ReactPixel.pageView();
		ReactPixel.track()
		
		
	  };
	  const handleDeclineCookie = () => {
		//remove google analytics cookies
		Cookies.remove("_ga");
		Cookies.remove("_gat");
		Cookies.remove("_gid");
	  };
	  useEffect(() => {
		const isConsent = getCookieConsentValue();
		if (isConsent === "true") {
		  handleAcceptCookie();
		  console.log("newload")
		}
	  }, []);
	

	return (
		<BrowserRouter>
			<Routes />
			<CookieConsent
        enableDeclineButton
        onAccept={handleAcceptCookie}
        onDecline={handleDeclineCookie}
		buttonText="Accept"
		buttonStyle={{ color: "#F1F6F8", fontSize: "16px" }}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
		</BrowserRouter>
		
	);
}

export default App;
