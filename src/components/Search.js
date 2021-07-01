import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./css/search.css";

export default function Search(props) {
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;

  const clearSearch = () => {
    searchRef.current.innerText = "";
    setSearchDivFocus("searchEmpty");
  };

  useEffect(() => {
    clearSearch();
  }, [props.selectedItemType]);

  const [searchDivFocus, setSearchDivFocus] = useState("searchEmpty");
  const searchRef = useRef(null);
  return (
    <div className="searchContainer">
      <div
        className={`searchDivWrapper ${
          props.mode ? "dark" : "light"
        }SearchDivWrapper`}
      >
        <div
          id="searchDiv"
          className={`searchDiv ${
            props.mode ? "dark" : "light"
          }SearchDiv ${searchDivFocus}`}
          contentEditable="true"
          ref={searchRef}
          onFocus={() => {
            setSearchDivFocus("");
          }}
          onBlur={() => {
            if (!document.querySelector("#searchDiv").textContent)
              setSearchDivFocus("searchEmpty");
          }}
          onPaste={(e) => {
            e.preventDefault();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              props.setSearchName(
                document.querySelector("#searchDiv").textContent
              );
            }
          }}
        ></div>
      </div>
      <button
        disabled={!props.disableButtons}
        style={{ opacity: props.disableButtons ? 0.5 : 1 }}
        className={`${props.mode ? "dark" : "light"}Mode ${
          props.mode ? "dark" : "light"
        }Button`}
        onClick={() => {
          props.setSearchName(document.querySelector("#searchDiv").textContent);
        }}
      >
        {searchIcon}
      </button>
    </div>
  );
}
