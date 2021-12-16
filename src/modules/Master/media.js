import React from "react";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import { toAbsoluteUrl } from "../../_helpers/AssetsHelpers";
import Agency from "../Agency/Agency";
import ContactUs from "../ContactUs/ContactUs";
import ImprintLink from "../Layout/ImprintLink";
import LogoComponent from "../Layout/LogoComponent";
import NavComponent from "../Layout/NavComponent";
import Solutions from "../Solutions/Solutions";
import Team from "../Team/Team";
export const PortFolioTwo = withNavigationContext(() => {
    return (
        <div className="homepage_content p1" style={{ width: '100%', height: `100vh` }}>
            <LogoComponent
                theme="light"
                showBottomNav={true}
                pageTitle="Portfolio"
                subTitle="Werbefilm "
                title={["Werbefilm für jagdlichen ", <br></br>, "Einzelhandel"]}
            />

            <div id="p1" className="video_div">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        position: "absolute",
                        width: "100%",
                        left: "50%",
                        top: "50%",
                        height: "100%",
                        objectFit: "cover",
                        transform: "translate(-50%,-50%)",
                        // opacity: 0.5
                        // zIndex: "-1"
                    }}>
                    <source src={toAbsoluteUrl("/media/video/Will&Apel_Reel.mp4")} type="video/mp4"></source>
                </video>
                <ImprintLink theme="light"

                ></ImprintLink>
            </div>

            <NavComponent theme="light" />
        </div>
    );
});

export const PortFolioOne = withNavigationContext(() => {
    return (
        <div className="homepage_content" style={{ width: '100%', height: `100vh` }}>
            <LogoComponent
                theme="light"
                showBottomNav={true}
                pageTitle="Portfolio"
                subTitle="Showreel"
                title={["FSW Media Showreel 2021"]}


            />

            <div className="video_div">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        position: "absolute",
                        width: "100%",
                        left: "50%",
                        top: "50%",
                        height: "100%",
                        objectFit: "cover",
                        transform: "translate(-50%,-50%)",
                    }}>
                    <source src={toAbsoluteUrl("/media/video/homepage-banner-reel2.mp4")} type="video/mp4"></source>
                </video>
                <ImprintLink theme="light"></ImprintLink>
            </div>

            <NavComponent theme="light" />
        </div>
    );
});

export const PortFolioThree = withNavigationContext(() => {
    return (
        <div className="homepage_content" style={{ width: '100%', height: `100vh` }}>
            <LogoComponent
                theme="light"
                showBottomNav={true}
                pageTitle="Portfolio"
                subTitle="Imagefilm"
                title={["Imagefilm für Jagdschule"]}


            />

            <div className="video_div">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        position: "absolute",
                        width: "100%",
                        left: "50%",
                        top: "50%",
                        height: "100%",
                        objectFit: "cover",
                        transform: "translate(-50%,-50%)",
                    }}>
                    <source src={toAbsoluteUrl("/media/video/Rainer Wiese Werbeclip (comprimiert).mp4")} type="video/mp4"></source>
                </video>
                <ImprintLink theme="light"></ImprintLink>
            </div>

            <NavComponent theme="light" />
        </div>
    );
});

export const media = [
    {
        slug: "",
        className: "slide",
        children: <PortFolioOne />
    },
    {
        slug: "portfolio-two",
        className: "slide",
        children: <PortFolioTwo />
    },
    {
        slug: "portfolio-three",
        className: "slide",
        children: <PortFolioThree />
    },
    {
        slug: "solutions",
        className: "solutions",
        children: <Solutions />
    },

    {
        slug: "agency",
        className: "agency",
        children: <Agency />
    },
    {
        slug: "contact-us",
        className: "contact_us",
        children: <ContactUs />
    }
];
