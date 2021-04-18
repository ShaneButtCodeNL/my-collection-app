import { useEffect, useState } from "react";
import "./css/ItemDisplayBox.css";
import ItemDisplay from "./ItemDisplay";

const lessDarkColor = "rgba(100, 100, 100, .2)";
const lessLightColor = "rgba(200, 200, 200, .2)";

export default function ItemDisplayBox(props) {
  //Number of items to display
  const numberOfDisplays = 3;
  //Number of items in list
  const numberOfItems = props.itemList.length;
  //Location of first item to display in list
  const [displayOffset, setDisplayOffset] = useState(0);
  //Increment displayOffset by one keeping in range
  const incrementOffset = () => {
    setDisplayOffset((displayOffset + 1) % numberOfItems);
  };
  //Decrement displayOffset by one keeping it in range
  const decrementOffset = () => {
    setDisplayOffset(displayOffset ? displayOffset - 1 : numberOfItems - 1);
  };
  /**
   * Gets an item from list based on the display offset
   * @param {number} n The 0 based position after the offset to return
   * @returns The item n places after the offset position
   */
  const getItem = (n) => {
    return props.itemList[(displayOffset + n) % numberOfItems];
  };

  /**
   * Gets a slice of the array wraps the end to the start of the array
   * @returns An array of items to be displayed
   */
  const getSubArray = () => {
    const subArray = [];
    for (let i = 0; i < Math.min(numberOfDisplays, numberOfItems); i++) {
      subArray.push(getItem(i));
    }
    return subArray;
  };
  useEffect(() => {
    setDisplayOffset(0);
  }, [props.selectedItemType]);
  return (
    <fieldset id="itemDisplayBox">
      <legend>{`Showing Items ${displayOffset + 1}${
        numberOfItems > 1
          ? `, ${((displayOffset + 1) % numberOfItems) + 1}`
          : ""
      }${
        numberOfItems > 2
          ? `, ${((displayOffset + 2) % numberOfItems) + 1}`
          : ""
      }. Of a total of ${numberOfItems} items.`}</legend>
      <div id="items">
        {getSubArray().map((item) => {
          return <ItemDisplay item={item} />;
        })}
      </div>
      <div
        id="itemDisplayController"
        style={{ borderColor: props.mode ? lessDarkColor : lessLightColor }}
      >
        <button
          id="incrementButton"
          className="controlButton"
          onClick={() => {
            incrementOffset();
          }}
        >
          &uarr;
        </button>
        <button
          id="decrementButton"
          className="controlButton"
          onClick={() => {
            decrementOffset();
          }}
        >
          &darr;
        </button>
      </div>
    </fieldset>
  );
}