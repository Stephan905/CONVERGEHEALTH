import convergelogo from "./images/convergehealth.png";

export default function Abstract() {
  return (
    <div className="abstract-page">
      <div className="side-space">
        <div className="header side">
          <img src={convergelogo} />
        </div>
      </div>
      
      <div className="form">
        <div>SUBMIT ABSTRACT</div>
        <div style={{ margin: "auto" }}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdSF4H7L3YvSNH19S8Q6Fd7zAFYUr11_VV-dTmqv8ysCd9Yww/viewform?embedded=true"
            width="640"
            height="1788"
            frameBorder="0"
            marginHeight="0"
            marginWidth="auto"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
}
