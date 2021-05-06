import "./css/ItemDisplay.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function ItemDisplay(props) {
  const editText = <FontAwesomeIcon icon={faEdit} />;
  const deleteIcon = <FontAwesomeIcon icon={faTrashAlt} />;

  const editDetail = (itemType, itemID, detailName, details) => {
    if (!itemType) return;
    if (itemType === "Anime") {
      if (detailName === "Name") {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName} => Name\nDetails . . . \n${details}`
        );
      }
      if (detailName === "Media Type") {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName} => Media Type\nDetails . . . \n${details}`
        );
      }
      if (detailName === "Release Date") {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName} => Release Date\nDetails . . . \n${details}`
        );
      }
      if (detailName === "Publisher") {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName} => Publisher\nDetails . . . \n${details}`
        );
      }
      if (detailName === "Limited Edition") {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName} => Limited Edition\nDetails . . . \n${details}`
        );
      }
      if (detailName === "Condition") {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName} => Condition\nDetails . . . \n${details}`
        );
      }
      if (detailName === "Genres") {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName} => Genres\nDetails . . . Size: ${details.length} \n${details}`
        );
      }
    }
    if (itemType === "Figure") {
      if (detailName === "Type") {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
      }
      if (detailName === "Name") {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
      }
      if (detailName === "From") {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
      }
      if (detailName === "Condition") {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
      }
      if (detailName === "Sealed") {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
      }
      if (detailName === "Age Restricted") {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
      }
      if (detailName === "Collection") {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
      }
    }
    if (itemType === "Manga") {
      if (detailName === "Name") {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
      }
      if (detailName === "Volume") {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
      }
      if (detailName === "Publisher") {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
      }
      if (detailName === "Author") {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
      }
      if (detailName === "Condition") {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
      }
    }
    if (itemType === "VideoGame") {
      if (detailName === "Name") {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
      }
      if (detailName === "Platform") {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
      }
      if (detailName === "Publisher") {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
      }
      if (detailName === "Condition") {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
      }
      if (detailName === "Release Date") {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
      }
      if (detailName === "Genres") {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
      }
      if (detailName === "Sealed") {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
      }
      if (detailName === "Has A Case") {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
      }
    }
    return;
  };

  const formatDetail = (itemType, itemID, detailName, detailData) => {
    //If detail data is a boolean value will display "yes" for true and "No" for false
    if (detailData === true) detailData = "Yes";
    if (detailData === false) detailData = "No";
    //Handles Age Restricted
    if (detailName === "Age Restricted") {
      return (
        <div className="detailDiv" style={{ display: "flex" }}>
          {props.loggedIn ? (
            <button
              className={`editButton ${
                props.mode ? "dark" : "light"
              }EditButton`}
              onClick={() =>
                editDetail(itemType, itemID, detailName, detailData)
              }
              style={{ marginTop: "auto" }}
            >
              {editText}
            </button>
          ) : (
            <></>
          )}
          <div className="detailName">
            18<sup>+</sup>
            {" : "}
          </div>
          <div className="detailData" style={{ marginTop: "auto" }}>
            {detailData}
          </div>
        </div>
      );
    }
    // Handles Genres
    if (detailName === "Genres") {
      return (
        <div className="detailDiv" style={{ display: "flex" }}>
          {props.loggedIn ? (
            <button
              className={`editButton ${
                props.mode ? "dark" : "light"
              }EditButton`}
              onClick={() =>
                editDetail(itemType, itemID, detailName, detailData)
              }
            >
              {editText}
            </button>
          ) : (
            <></>
          )}
          <div className="detailName">Genres : </div>
          <div className="detailData">
            {detailData.map((value, index) => {
              return (
                <span key={index} style={{ whiteSpace: "pre" }}>
                  {`${index ? "\n" : ""}${value}`}
                </span>
              );
            })}
          </div>
        </div>
      );
    }
    // Handles Everything Else that doesn't need a special format
    return (
      <div className="detailDiv" style={{ display: "flex" }}>
        {props.loggedIn ? (
          <button
            className={`editButton ${props.mode ? "dark" : "light"}EditButton`}
            onClick={() => editDetail(itemType, itemID, detailName, detailData)}
          >
            {editText}
          </button>
        ) : (
          <></>
        )}
        <div className="detailName">{`${detailName} : `}</div>
        <div className="detailData">{`${detailData}`}</div>
      </div>
    );
  };

  const formatDetails = (itemType, itemID, details) => {
    return (
      <div>
        {details.type ? (
          formatDetail(itemType, itemID, "Type", details.type)
        ) : (
          <></>
        )}
        {details.platform ? (
          formatDetail(itemType, itemID, "Platform", details.platform)
        ) : (
          <></>
        )}
        {details.series ? (
          formatDetail(itemType, itemID, "Collection", details.series)
        ) : (
          <></>
        )}
        {details.name ? (
          formatDetail(itemType, itemID, "Name", details.name)
        ) : (
          <></>
        )}
        {details.volume !== undefined ? (
          formatDetail(itemType, itemID, "Volume", details.volume)
        ) : (
          <></>
        )}
        {details.from ? (
          formatDetail(itemType, itemID, "From", details.from)
        ) : (
          <></>
        )}
        {details.mediaType ? (
          formatDetail(itemType, itemID, "Media Type", details.mediaType)
        ) : (
          <></>
        )}
        {details.releaseDate ? (
          formatDetail(itemType, itemID, "Release Date", details.releaseDate)
        ) : (
          <></>
        )}
        {details.author ? (
          formatDetail(itemType, itemID, "Author", details.author)
        ) : (
          <></>
        )}
        {details.publisher ? (
          formatDetail(itemType, itemID, "Publisher", details.publisher)
        ) : (
          <></>
        )}
        {details.limitedEdition ? (
          formatDetail(
            itemType,
            itemID,
            "Limited Edition",
            details.limitedEdition
          )
        ) : (
          <></>
        )}
        {details.hasCase !== undefined ? (
          formatDetail(itemType, itemID, "Has A Case", details.hasCase)
        ) : (
          <></>
        )}
        {details.condition ? (
          formatDetail(itemType, itemID, "Condition", details.condition)
        ) : (
          <></>
        )}
        {details.sealed !== undefined ? (
          formatDetail(itemType, itemID, "Sealed", details.sealed)
        ) : (
          <></>
        )}
        {details.ageRestricted !== undefined ? (
          formatDetail(
            itemType,
            itemID,
            "Age Restricted",
            details.ageRestricted
          )
        ) : (
          <></>
        )}
        {details.genres ? (
          formatDetail(itemType, itemID, "Genres", details.genres)
        ) : (
          <></>
        )}
      </div>
    );
  };

  return (
    <fieldset className="itemDisplay" style={{ position: "relative" }}>
      <legend>{props.item.type}</legend>
      {props.loggedIn ? (
        <div
          unselectable="on"
          className={`deleteItem ${
            props.mode ? "dark" : "light"
          }Mode clickableDiv`}
          onClick={async () => {
            let del = window.confirm(
              `Are you sure you wish to delete the ${props.item.type}, ${props.item.details.name}`
            );
            console.log(
              `${props.APISERVER}${props.item.type}/${props.item._id}`
            );
            console.log(`${props.item}`);
            if (del) {
              await axios.delete(
                `${props.APISERVER}${props.item.type}/${props.item._id}`
              );
              props.reloadList();
            }
          }}
        >
          {deleteIcon}
        </div>
      ) : (
        <></>
      )}
      <img src={props.item.imgPath} alt={props.alt} />
      <div className={`itemDetails ${props.mode ? "dark" : "Light"}Details`}>
        {formatDetails(props.item.type, props.item._id, props.item.details)}
      </div>
    </fieldset>
  );
}
