import { useEffect, useState } from "react";

export default function Countdown({ goalDate }) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [eventOccured, setEventOccured] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      let diff = goalDate.getTime() - now.getTime();
      if (diff < 0) {
        setEventOccured(true);
        clearInterval(interval);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        return;
      }
      console.log(diff);
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff -= d * (1000 * 60 * 60 * 24);

      const h = Math.max(0, Math.floor(diff / (1000 * 60 * 60)));
      diff -= h * (1000 * 60 * 60);

      const m = Math.max(0, Math.floor(diff / (1000 * 60)));
      diff -= m * (1000 * 60);

      const s = Math.floor(diff / 1000);

      setDays(Math.max(d, 0));
      setHours(Math.max(h, 0));
      setMinutes(Math.max(m, 0));
      setSeconds(Math.max(s, 0));

      if (diff <= 0) {
        clearInterval(interval);
      }
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {(
        <>
          {/* <div className="countdown">
            <span>{days} Days </span>
            <span>{hours} Hours </span>
            <span>{minutes} Minutes </span>
            <span>{seconds} Seconds </span>
          </div> */}
          <div className="countdown">
            <div style={{ display: "inline-block", padding: "0 5px" }}>
              COUNTDOWN
            </div>
            <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
          </div>
        </>
      )}
    </div>
  );
}
