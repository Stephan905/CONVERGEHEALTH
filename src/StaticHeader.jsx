import { Link } from "react-router-dom";
import convergelogo from "./images/convergehealth.png";

export default function StaticHeader() {
  return (
    <div className="header">
      <Link to={"/"}>
        <img src={convergelogo} height={"90%"} />
      </Link>
    </div>
  );
}
