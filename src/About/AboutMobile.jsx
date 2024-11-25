import "../mobile.css";
import { Link } from "react-router-dom";
import convergelogo from "../images/convergehealth.png"
import map from "../images/SCWmap.png"
import useEventbrite from "react-eventbrite-popup-checkout";

export default function AboutMobile() {
  const modalButtonCheckout = useEventbrite({
    eventId: "1085764523919",
    modal: true,
    // onOrderComplete: handleOrderCompleted,
  });
  return (
    <div className="mobile">
      <div className="mobile-header slim-view">
        <div className="logo">
          <Link to={"/"}>
            <img src={convergelogo} alt="Converge Health Logo" />
          </Link>
        </div>
      </div>
      <div className="mobile-nav">
        <div className="mobile-button">MORE INFORMATION</div>
        <a href="https://maps.app.goo.gl/Ais3LVyDmGw6fPuEA">
          <img src={map} width={"100%"}/>
        </a>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.027671352137!2d-87.6745952!3d41.8707511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2d139027b3a3%3A0x99bfe35c7cdec414!2sStudent%20Center%20West%2C%20828%20S%20Wolcott%20Ave%2C%20Chicago%2C%20IL%2060612!5e0!3m2!1sen!2sus!4v1731688726169!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> */}
        <div className="more-info slim-view">
          CONVERGE HEALTH is set for March 14th, 2025! Join us in SCW and witness how
          cutting-edge research in Biology, Computer Science, and Engineering
          converge in healthcare.
        </div>
        {modalButtonCheckout && (
          <button
            className="reserve-button"
            id={modalButtonCheckout.id}
            type="button"
          >
            RESERVE YOUR SPOT
          </button>
        )}
      </div>
    </div>
  );
}
