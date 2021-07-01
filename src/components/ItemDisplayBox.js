import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, animated, config } from "@react-spring/web";
import {
  faArrowAltCircleDown,
  faArrowAltCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import "./css/ItemDisplayBox.css";
import ItemDisplay from "./ItemDisplay";

const lessDarkColor = "rgba(100, 100, 100, .2)";
const lessLightColor = "rgba(200, 200, 200, .2)";

export default function ItemDisplayBox(props) {
  const upArrow = <FontAwesomeIcon icon={faArrowAltCircleUp} />;
  const downArrow = <FontAwesomeIcon icon={faArrowAltCircleDown} />;
  //Number of items to display
  const numberOfDisplays = 3;
  //Number of items in list
  const numberOfItems = props.itemList.length;
  //Location of first item to display in list
  const [displayOffset, setDisplayOffset] = useState(0);
  const [fade, setFade] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const divState = useSpring({
    to: { height: "100%", opacity: "1" },
    from: { height: "0%", opacity: "0" },
    config: { velocity: fade ? 0.01 : 0, ...config.default },
    reverse: fade,
    onRest: () => {
      props.setDisableButtons(fade);
      setFade(false);
    },
    delay: fade ? 0 : 400,
  });

  //Increment displayOffset by one keeping in range
  const incrementOffset = () => {
    setDisplayOffset(
      displayOffset === numberOfItems - (numberOfItems % numberOfDisplays)
        ? 0
        : (displayOffset + numberOfDisplays) % numberOfItems
    );
  };
  //Decrement displayOffset by one keeping it in range
  const decrementOffset = () => {
    setDisplayOffset(
      displayOffset
        ? displayOffset - numberOfDisplays
        : numberOfItems -
            (numberOfItems % numberOfDisplays === 0
              ? numberOfDisplays
              : numberOfItems % numberOfDisplays)
    );
  };

  const reloadList = () => {
    props.reloadList();
  };
  /**
   * Gets an item from list based on the display offset
   * @param {number} n The 0 based position after the offset to return
   * @returns The item n places after the offset position
   */
  const getItem = (n) => {
    return displayOffset + n < numberOfItems
      ? props.itemList[displayOffset + n]
      : null;
  };

  /**
   * Gets a slice of the array wraps the end to the start of the array
   * @returns An array of items to be displayed
   */
  const getSubArray = () => {
    const subArray = [];
    for (let i = 0; i < Math.min(numberOfDisplays, numberOfItems); i++) {
      if (getItem(i)) subArray.push(getItem(i));
    }
    return subArray;
  };

  useEffect(() => {
    if (isLoad) setFade(true);
    else setIsLoad(true);
    setDisplayOffset(0);
  }, [props.selectedItemType, props.searchName]);
  return (
    <fieldset id="itemDisplayBox">
      <legend>{` Showing Items ${displayOffset + 1}${
        displayOffset + 1 < numberOfItems
          ? `, ${((displayOffset + 1) % numberOfItems) + 1}`
          : ""
      }${
        displayOffset + 2 < numberOfItems
          ? `, ${((displayOffset + 2) % numberOfItems) + 1}`
          : ""
      }. Of a total of ${numberOfItems} items.`}</legend>
      <div id="itemsWrapper">
        <animated.div
          style={{ display: "flex", opacity: 0, height: 0, ...divState }}
        >
          <div className="items">
            {getSubArray().map((item, index) => {
              return (
                <ItemDisplay
                  key={index}
                  item={item}
                  mode={props.mode}
                  reloadList={reloadList}
                  APISERVER={props.APISERVER}
                  loggedIn={props.loggedIn}
                  displayOffset={displayOffset}
                  selectedItemType={props.selectedItemType}
                  fade={fade}
                />
              );
            })}
          </div>
        </animated.div>
      </div>
      <div
        id="itemDisplayController"
        style={{
          borderColor: props.mode ? lessDarkColor : lessLightColor,
        }}
      >
        <button
          id="incrementButton"
          className={`controlButton ${props.mode ? "dark" : "light"}Button`}
          style={props.disableButtons ? { opacity: 0.5 } : {}}
          disabled={props.disableButtons}
          onClick={() => {
            props.setDisableButtons(true);
            setFade(true);
            setTimeout(() => incrementOffset(), 300);
          }}
        >
          {upArrow}
        </button>
        <button
          id="decrementButton"
          className={`controlButton ${props.mode ? "dark" : "light"}Button`}
          style={props.disableButtons ? { opacity: 0.5 } : {}}
          disabled={props.disableButtons}
          onClick={() => {
            props.setDisableButtons(true);
            setFade(true);
            setTimeout(() => decrementOffset(), 300);
          }}
        >
          {downArrow}
        </button>
      </div>
    </fieldset>
  );
}
