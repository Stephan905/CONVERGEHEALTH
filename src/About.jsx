import StaticHeader from "./StaticHeader";

export default function About() {
  return (
    <div>
      <StaticHeader />

      <div className="content">
        <div className="nav">
          <p style={{width: "400px"}}>
            CONVERGE HEALTH is set for March 14th, 2025! Join us and witness how
            cutting-edge research in Biology, Computer Science, and Engineering
            converge in healthcare.
          </p>
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.027671352137!2d-87.6745952!3d41.8707511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2d139027b3a3%3A0x99bfe35c7cdec414!2sStudent%20Center%20West%2C%20828%20S%20Wolcott%20Ave%2C%20Chicago%2C%20IL%2060612!5e0!3m2!1sen!2sus!4v1731688726169!5m2!1sen!2sus"
          width="400px"
          height="400px"
          style={{ border: 0, margin:"0 40px", backgroundColor: "white"}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
      </div>
    </div>
  );
}
