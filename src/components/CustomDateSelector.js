import { useEffect, useState } from "react";
import { useSpring, config, animated } from "@react-spring/web";
import CustomSelect from "./CustomSelect";
import TextInput from "./TextInput";
import "./css/customDateSelector.css";
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Nov",
  "Dec",
];

export default function CustomDateSelector(props) {
  const [showDateSelector, setShowDateSelector] = useState(false);
  const [slide, setSlide] = useState(false);
  const [year, setYear] = useState(
    props.defaultDate ? Number.parseInt(props.defaultDate.substr(7)) : 1999
  );
  const [month, setMonth] = useState(
    props.defaultDate ? props.defaultDate.substr(0, 3) : "Jan"
  );
  const [day, setDay] = useState(
    props.defaultDate ? Number.parseInt(props.defaultDate.substr(4, 2)) : 1
  );

  const selectStyle = { width: "9ch", margin: "auto 0" };

  useEffect(() => {
    props.onChangeFunction(`${month} ${day} ${year}`);
  }, [day, month, year]);

  const fadeSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.slow,
    reverse: showDateSelector,
  });

  const slideSpring = useSpring({
    from: { left: "-35ch" },
    to: { left: "1ch" },
    config: config.slow,
    reverse: !slide,
  });
  const slideSpringRev = useSpring({
    from: { left: "1ch" },
    to: { left: "-35ch" },
    config: config.slow,
    reverse: !slide,
  });
  const dayString = (dayNum) => {
    if (dayNum < 10) return `0${dayNum}`;
    return `${dayNum}`;
  };

  /**
   * Finds the number of days in a month in a particular year
   * @param {String} aMonth The Month of the date
   * @param {number} aYear The year of the date
   * @returns {object[]} An Array of day number objects for custom selects
   */
  const getDays = (aMonth, aYear) => {
    let leap = aYear % 400 === 0 || (aYear % 4 === 0 && aYear % 100 !== 0);
    let index = MONTHS.indexOf(aMonth) + 1;
    //Feb
    if (index === 2)
      return Array.from({ length: leap ? 29 : 28 }, (_, i) => {
        return { name: dayString(i + 1), value: i + 1 };
      });
    //April june sept nov
    if ([4, 6, 9, 11].indexOf(index))
      return Array.from({ length: 30 }, (_, i) => {
        return { name: dayString(i + 1), value: i + 1 };
      });
    //Jan mar may july aug oct dec
    return Array.from({ index: 31 }, (_, i) => {
      return { name: dayString(i + 1), value: i + 1 };
    });
  };

  const [days, setDays] = useState(getDays(month, year));
  return (
    <div
      className={`customDateSelectContainer`}
      onFocus={() => setShowDateSelector(true)}
      onClick={() => setShowDateSelector(!showDateSelector)}
    >
      <animated.div
        style={{
          ...slideSpringRev,
          position: "absolute",
          top: 0,
          height: "100%",
          display: "grid",
          placeItems: "center",
        }}
      >
        <div
          className="dateDisplay"
          onClick={() => setSlide(true)}
        >{`${month} ${dayString(day)} ${year}`}</div>
      </animated.div>
      <animated.div style={{ position: "absolute", top: 0, ...slideSpring }}>
        <div className="dateSelectInputBar">
          <CustomSelect
            mode={props.mode}
            onChangeFunction={setMonth}
            name={month || "Month"}
            value={month}
            style={selectStyle}
            items={Array.from(MONTHS, (v) => {
              return { name: v, value: v };
            })}
          />
          <CustomSelect
            mode={props.mode}
            onChangeFunction={setDay}
            name={dayString(day) || "day"}
            items={days}
            value={day}
            style={selectStyle}
          />
          <CustomSelect
            mode={props.mode}
            onChangeFunction={setYear}
            name={year || "year"}
            value={year}
            style={selectStyle}
            items={Array.from(
              { length: new Date().getFullYear() - 1969 },
              (_, i) => {
                return { name: "" + (i + 1970), value: i + 1970 };
              }
            )}
          />
          <button
            style={{ margin: 0 }}
            className={`${props.mode ? "dark" : "light"}Mode ${
              props.mode ? "dark" : "light"
            }Button`}
            onClick={() => setSlide(false)}
          >
            OK
          </button>
        </div>
      </animated.div>
    </div>
  );
}
