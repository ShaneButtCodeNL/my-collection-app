import { useEffect, useRef, useState } from "react";
import "./css/TextInput.css";

/**
 * This will make a custom text input box
 * params explanation
 * className: Will add a class name to the div to allow custon classes
 * classes: an array of classNames just to give the option if it's easyer to read
 * id: an id for the div like all id's if you give it one please make it unique
 * style: Gives the dive a custom style div allowing inline styling
 * onChangeFunction: A function to be called when the content in the div changes
 * text: Sets a default text for the div to start with is rewritable
 * @param {*} props props passed to the component on creation
 * @returns
 */
export default function TextInput(props) {
  const [focused, setFocused] = useState(false);
  const [text, setText] = useState("");
  const inputRef = useRef(props.ref ? props.ref : null);
  /**
   * Sets Focus to the inner div when wrapper is clicked
   */
  const setFocus = () => {
    inputRef.current.focus();
  };
  const styleing = {
    outline: focused ? "outset" : "none",
    ...(props.style ? props.style : ""),
  };
  //Sets initial text in div only on load
  useEffect(() => {
    setText(props.text);
  }, []);
  return (
    <div
      onClick={() => setFocus()}
      style={styleing}
      className={`customTextInputWrapper ${
        props.mode ? "dark" : "light"
      }CustomTextInputWrapper`}
    >
      <div
        id={props.id ? props.id : ""}
        ref={inputRef}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        onInput={() => {
          props.onChangeFunction(inputRef.current.innerText);
        }}
        onClick={() => {
          console.log(inputRef.current.childNodes[0]);
        }}
        className={`customTextInput ${props.mode ? "dark" : "light"}TextInput ${
          props.classes ? props.classes.join(" ") : ""
        } ${props.className ? props.className : ""}`}
        contentEditable
        onKeyDown={(e) => {
          if (e.key === "Enter") e.preventDefault();
        }}
        onPaste={(e) => e.preventDefault()}
      >
        {text}
      </div>
    </div>
  );
}
