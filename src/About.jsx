import { Link } from "react-router-dom";
import StaticHeader from "./StaticHeader";

export default function About() {
  return (
    <div>
      <StaticHeader />

      <div className="content">
        <div className="nav">
          <p>Learn More text</p>
          <Link to={"/about"}>
            <button className="learn-more">
              <div className="overlay">
                <div className="learn-button">Download the PDF</div>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
