import "./App.css";
import { Link } from "react-router-dom";
import Countdown from "./Countdown";
import StaticHeader from "./StaticHeader";

function App() {
  // Goal date (you can change this as needed)
  const goalDate = new Date(2024, 11-1, 20, 18,0); // year, month, day, hours, minutes, seconds
  console.log(goalDate.toLocaleDateString())
  console.log(goalDate.toTimeString())

  return (
    <>
      <StaticHeader />
      <div className="content">

        <Countdown goalDate={goalDate}/>

        <div className="intro">
          MAIN BODY TEXT GOES HERE, INTRODUCTION INTO THE CONFRENCE
        </div>
        <div className="nav">
          <Link to={"/abstract"}>
            <button className="submit-abstract">
              <div className="overlay">
                <div className="abstract-button">SUBMIT ABSTRACT</div>
              </div>
            </button>
          </Link>
          <Link to={"/about"}>
            <button className="learn-more">
              <div className="overlay">
                <div className="learn-button">LEARN MORE</div>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;
