import StaticHeader from "../StaticHeader";
import useEventbrite from "react-eventbrite-popup-checkout";
import { useCallback } from "react";

export default function About() {
  // const handleOrderCompleted = useCallback(() => {
  //   console.log("Order was completed successfully");
  // }, []);
  const modalButtonCheckout = useEventbrite({
    eventId: "1085764523919",
    modal: true,
    // onOrderComplete: handleOrderCompleted,
  });
  return (
    <div>
      <StaticHeader />

      <div className="content">
        
        <div className="nav">
          <p style={{ width: "400px" }}>
            CONVERGE HEALTH is set for March 14th, 2025! Join us and witness how
            cutting-edge research in Biology, Computer Science, and Engineering
            converge in healthcare.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.027671352137!2d-87.6745952!3d41.8707511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2d139027b3a3%3A0x99bfe35c7cdec414!2sStudent%20Center%20West%2C%20828%20S%20Wolcott%20Ave%2C%20Chicago%2C%20IL%2060612!5e0!3m2!1sen!2sus!4v1731688726169!5m2!1sen!2sus"
            width="400px"
            height="400px"
            style={{ border: 0, backgroundColor: "white" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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
