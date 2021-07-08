import { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown as caratDown,
  faCaretUp as caratUp,
} from "@fortawesome/free-solid-svg-icons";
import "./css/customSelect.css";
/**
 * This will make a custom select tag
 * params explanation
 * Required
 * mode: The display mode of the site 0=Dark, 1=Light
 * onChangeFunction: A function to be called when the content of the select changes
 * items: List of selections to change the value into names should be strings values can be anything, must be in the form [{name:"name 1",value:"value1"},...,{name:"name n",value:n}]
 * Optional
 * name: The name to be displayed initially
 * value: The initial value for the selection
 * className: Will add a class name to the div to allow custon classes
 * classes: an array of classNames just to give the option if it's easyer to read
 * id: an id for the div like all id's if you give it one please make it unique
 * style: Gives the div a custom style allowing inline styling
 * @param {*} props propertys passed to the select tag
 * @returns A custom Select tag
 */
export default function CustomSelect(props) {
  const selectRef = useRef(null);
  const [showDropDownMenu, setShowDropDownMenu] = useState(false);
  const [items] = useState(
    props.items.map((item, index) => {
      return {
        id: index,
        name: item.name,
        value: item.value,
        selected: (props.value !== null ? props.value : null) === item.value,
      };
    })
  );
  const [selected, setSelected] = useState(() => {
    for (let item of items) {
      if (item.selected) return item.id;
    }
    return null;
  });
  const [value, setValue] = useState(props.value ? props.value : null);
  const [name, setName] = useState(props.name ? props.name : null);
  useEffect(() => {
    console.log("Value Changed", value);
    props.onChangeFunction(value);
  }, [value, props]);
  const dropDownButton = (
    <FontAwesomeIcon icon={showDropDownMenu ? caratUp : caratDown} />
  );
  const mode = () => {
    return props.mode ? "dark" : "light";
  };
  const setFocus = () => {
    selectRef.current.focus();
  };
  const setBlur = () => {
    selectRef.current.blur();
  };
  return (
    <div
      className={`customSelectWrapper`}
      style={props.style ? props.style : {}}
    >
      <div
        className={`customSelectContainer`}
        ref={selectRef}
        tabIndex={0}
        onBlur={() => {
          setShowDropDownMenu(false);
        }}
      >
        <div
          className={`customSelect`}
          onClick={() => {
            setShowDropDownMenu(!showDropDownMenu);
          }}
        >
          <div className={`customSelectValue`}>{name ? name : ""}</div>
          <div className={`customSelectDropDownButton`}>{dropDownButton}</div>
        </div>
        {
          //DropDownMenu
          showDropDownMenu ? (
            <div className={`dropDownMenu ${mode()}DropDownMenu`}>
              {items.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`dropDownMenuItem ${mode()}DropDownMenuItem ${mode()}${
                      item.selected ? "Selected" : ""
                    }`}
                    onClick={() => {
                      if (selected !== null) items[selected].selected = false;
                      item.selected = true;
                      setSelected(item.id);
                      setValue(item.value);
                      setName(item.name);
                      setBlur();
                    }}
                  >
                    {item.name}
                  </div>
                );
              })}
            </div>
          ) : (
            <></>
          )
        }
      </div>
    </div>
  );
}
