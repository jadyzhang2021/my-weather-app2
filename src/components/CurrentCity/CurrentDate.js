import { useEffect, useState } from "react";
import { format } from "date-fns";

const CurrentDate = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  const currentTimeFormat = format(currentTime, "dd MMM yyyy, HH:mm");

  return <div>{currentTimeFormat}</div>;
};

export default CurrentDate;
