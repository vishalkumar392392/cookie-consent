import React from "react";
import CookieConsent from "react-cookie-consent";
import "./CustomCookieConsent.css"; // Import your custom CSS file

const CustomCookieConsent = () => {
  const expirationTime = new Date();
  expirationTime.setSeconds(expirationTime.getSeconds() + 10);
  return (
    <div className="cookie-consent-wrapper">
      <CookieConsent
        location="bottom"
        buttonText="I accept"
        declineButtonText="I decline"
        onAccept={() => console.log("accepted.....")}
        expires={expirationTime}
        cookieName="myCookieConsent"
        style={{
          background: "#333",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bottom: 0,
          position: "relative",
          // Ensure relative positioning for absolute positioning of the close button
        }}
        contentStyle={{
          flexBasis: 0,
        }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        declineButtonStyle={{ color: "#c3d2b2", fontSize: "13px" }}
        buttonClasses="custom-button"
        declineButtonClasses="custom-decline-button"
        // debug={true}
        enableDeclineButton
      >
        <div
          style={{
            position: "absolute",
            top: "5px",
            right: "5px",
            cursor: "pointer",
          }}
        >
          ❌
        </div>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </div>
  );
};

export default CustomCookieConsent;
