import "./css/ItemDisplay.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import EditDetail from "./EditDetail";

const DETAIL_NAMES = {
  name: "Name",
  mediaType: "Media Type",
  releaseDate: "Release Date",
  publisher: "Publisher",
  limitedEdition: "Limited Edition",
  condition: "Condition",
  genres: "Genres",
  type: "Type",
  from: "From",
  sealed: "Sealed",
  ageRestricted: "Age Restricted",
  series: "Collection",
  volume: "Volume",
  author: "Author",
  platform: "Platform",
  hasCase: "Has A Case",
};

export default function ItemDisplay(props) {
  const [showName, setShowName] = useState();
  const [showMediaType, setShowMediaType] = useState(false);
  const [showReleaseDate, setShowReleaseDate] = useState(false);
  const [showPublisher, setShowPublisher] = useState(false);
  const [showLimitedEdition, setShowLimitedEdition] = useState(false);
  const [showCondition, setShowCondition] = useState(false);
  const [showGenres, setShowGenres] = useState(false);
  const [showType, setShowType] = useState(false);
  const [showFrom, setShowFrom] = useState(false);
  const [showSealed, setShowSealed] = useState(false);
  const [showAgeRestricted, setShowAgeRestricted] = useState(false);
  const [showSeries, setShowSeries] = useState(false);
  const [showVolume, setShowVolume] = useState(false);
  const [showAuthor, setShowAuthor] = useState(false);
  const [showPlatform, setShowPlatform] = useState(false);
  const [showHasCase, setShowHasCase] = useState(false);

  const resetStates = () => {
    setShowAgeRestricted(false);
    setShowAuthor(false);
    setShowCondition(false);
    setShowFrom(false);
    setShowGenres(false);
    setShowHasCase(false);
    setShowLimitedEdition(false);
    setShowMediaType(false);
    setShowName(false);
    setShowPlatform(false);
    setShowPublisher(false);
    setShowReleaseDate(false);
    setShowSealed(false);
    setShowSeries(false);
    setShowType(false);
    setShowVolume(false);
  };

  //Keeps states from transfering to different items
  useEffect(() => resetStates(), [props.displayOffset, props.selectedItemType]);
  useEffect(() => {
    if (!props.loggedIn) resetStates();
  }, [props.loggedIn]);

  const editText = <FontAwesomeIcon icon={faEdit} />;
  const deleteIcon = <FontAwesomeIcon icon={faTrashAlt} />;

  /**
   * Checks if we can show edit fields for an item detail
   * @param {String} detailName Name of the detail
   * @returns Show Edit field for selected detail
   */
  const canShow = (detailName) => {
    switch (detailName) {
      case DETAIL_NAMES.name:
        return showName;
      case DETAIL_NAMES.mediaType:
        return showMediaType;
      case DETAIL_NAMES.releaseDate:
        return showReleaseDate;
      case DETAIL_NAMES.publisher:
        return showPublisher;
      case DETAIL_NAMES.limitedEdition:
        return showLimitedEdition;
      case DETAIL_NAMES.condition:
        return showCondition;
      case DETAIL_NAMES.type:
        return showType;
      case DETAIL_NAMES.from:
        return showFrom;
      case DETAIL_NAMES.sealed:
        return showSealed;
      case DETAIL_NAMES.ageRestricted:
        return showAgeRestricted;
      case DETAIL_NAMES.author:
        return showAuthor;
      case DETAIL_NAMES.genres:
        return showGenres;
      case DETAIL_NAMES.hasCase:
        return showHasCase;
      case DETAIL_NAMES.platform:
        return showPlatform;
      case DETAIL_NAMES.series:
        return showSeries;
      case DETAIL_NAMES.volume:
        return showVolume;
      default:
        return false;
    }
  };

  /**
   * Sets flags for displaying inputs for editing
   * @param {String} detailName Name of a detail
   * @returns void
   */
  const editDetail = (detailName) => {
    console.log(detailName);
    if (!detailName) return;
    if (detailName === DETAIL_NAMES.ageRestricted)
      return setShowAgeRestricted(!showAgeRestricted);
    if (detailName === DETAIL_NAMES.author) return setShowAuthor(!showAuthor);
    if (detailName === DETAIL_NAMES.condition)
      return setShowCondition(!showCondition);
    if (detailName === DETAIL_NAMES.from) return setShowFrom(!showFrom);
    if (detailName === DETAIL_NAMES.genres) return setShowGenres(!showGenres);
    if (detailName === DETAIL_NAMES.hasCase)
      return setShowHasCase(!showHasCase);
    if (detailName === DETAIL_NAMES.limitedEdition)
      return setShowLimitedEdition(!showLimitedEdition);
    if (detailName === DETAIL_NAMES.mediaType)
      return setShowMediaType(!showMediaType);
    if (detailName === DETAIL_NAMES.name) return setShowName(!showName);
    if (detailName === DETAIL_NAMES.platform)
      return setShowPlatform(!showPlatform);
    if (detailName === DETAIL_NAMES.publisher)
      return setShowPublisher(!showPublisher);
    if (detailName === DETAIL_NAMES.releaseDate)
      return setShowReleaseDate(!showReleaseDate);
    if (detailName === DETAIL_NAMES.sealed) return setShowSealed(!showSealed);
    if (detailName === DETAIL_NAMES.series) return setShowSeries(!showSeries);
    if (detailName === DETAIL_NAMES.type) return setShowType(!showType);
    if (detailName === DETAIL_NAMES.volume) return setShowVolume(!showVolume);
  };

  const confirmEdit = (itemType, itemID, detailName, details) => {
    if (!itemType) return;
    if (itemType === "Anime") {
      if (detailName === DETAIL_NAMES.name) {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName} => Name\nDetails . . . \n${details}`
        );
        setShowName(true);
      }
      if (detailName === DETAIL_NAMES.mediaType) {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName} => Media Type\nDetails . . . \n${details}`
        );
        setShowMediaType(true);
      }
      if (detailName === DETAIL_NAMES.releaseDate) {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName} => Release Date\nDetails . . . \n${details}`
        );
        setShowReleaseDate(true);
      }
      if (detailName === DETAIL_NAMES.publisher) {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName} => Publisher\nDetails . . . \n${details}`
        );
        setShowPublisher(true);
      }
      if (detailName === DETAIL_NAMES.limitedEdition) {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName} => Limited Edition\nDetails . . . \n${details}`
        );
        setShowLimitedEdition(true);
      }
      if (detailName === DETAIL_NAMES.condition) {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName} => Condition\nDetails . . . \n${details}`
        );
        setShowCondition(true);
      }
      if (detailName === DETAIL_NAMES.genres) {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName} => Genres\nDetails . . . Size: ${details.length} \n${details}`
        );
        setShowGenres(true);
      }
    }
    if (itemType === "Figure") {
      if (detailName === DETAIL_NAMES.type) {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
        setShowType(true);
      }
      if (detailName === DETAIL_NAMES.name) {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
        setShowName(true);
      }
      if (detailName === DETAIL_NAMES.from) {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
        setShowFrom(true);
      }
      if (detailName === DETAIL_NAMES.condition) {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
        setShowCondition(true);
      }
      if (detailName === DETAIL_NAMES.sealed) {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
        setShowSealed(true);
      }
      if (detailName === DETAIL_NAMES.ageRestricted) {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
        setShowAgeRestricted(true);
      }
      if (detailName === DETAIL_NAMES.series) {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
        setShowSeries(true);
      }
    }
    if (itemType === "Manga") {
      if (detailName === DETAIL_NAMES.name) {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
        setShowName(true);
      }
      if (detailName === DETAIL_NAMES.volume) {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
        setShowVolume(true);
      }
      if (detailName === DETAIL_NAMES.publisher) {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
        setShowPublisher(true);
      }
      if (detailName === DETAIL_NAMES.author) {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
        setShowAuthor(true);
      }
      if (detailName === DETAIL_NAMES.condition) {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
        setShowCondition(true);
      }
    }
    if (itemType === "VideoGame") {
      if (detailName === DETAIL_NAMES.name) {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
        setShowName(true);
      }
      if (detailName === DETAIL_NAMES.platform) {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
        setShowPlatform(true);
      }
      if (detailName === DETAIL_NAMES.publisher) {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
        setShowPublisher(true);
      }
      if (detailName === DETAIL_NAMES.condition) {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
        setShowCondition(true);
      }
      if (detailName === DETAIL_NAMES.releaseDate) {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
        setShowReleaseDate(true);
      }
      if (detailName === DETAIL_NAMES.genres) {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
        setShowGenres(true);
      }
      if (detailName === DETAIL_NAMES.sealed) {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
        setShowSealed(true);
      }
      if (detailName === DETAIL_NAMES.hasCase) {
        console.log(
          `ID: ${itemID}\nType: ${itemType}\nDetail Name: ${detailName}\nDetails . . . \n${details}`
        );
        setShowHasCase(true);
      }
    }
    return;
  };

  const formatDetail = (itemType, itemID, detailName, detailData) => {
    //If detail data is a boolean value will display "yes" for true and "No" for false
    if (detailData === true) detailData = "Yes";
    if (detailData === false) detailData = "No";
    //Handles Age Restricted
    if (detailName === DETAIL_NAMES.ageRestricted) {
      return (
        <div className="detailDiv" style={{ display: "flex" }}>
          {props.loggedIn ? (
            <button
              className={`editButton ${
                props.mode ? "dark" : "light"
              }EditButton`}
              onClick={() => editDetail(detailName)}
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
            {showAgeRestricted ? (
              <EditDetail
                detailData={detailData}
                detailName={detailName}
                itemID={itemID}
                itemType={itemType}
                reloadList={props.reloadList}
                resetStates={resetStates}
                APISERVER={props.APISERVER}
              />
            ) : (
              detailData
            )}
          </div>
        </div>
      );
    }
    // Handles Genres
    if (detailName === DETAIL_NAMES.genres) {
      return (
        <div className="detailDiv" style={{ display: "flex" }}>
          {props.loggedIn ? (
            <button
              className={`editButton ${
                props.mode ? "dark" : "light"
              }EditButton`}
              onClick={() => editDetail(detailName)}
            >
              {editText}
            </button>
          ) : (
            <></>
          )}
          <div className="detailName">Genres : </div>
          <div className="detailData">
            {showGenres ? (
              <EditDetail
                detailData={detailData}
                detailName={detailName}
                itemID={itemID}
                itemType={itemType}
                APISERVER={props.APISERVER}
                resetStates={resetStates}
                reloadList={props.reloadList}
              />
            ) : (
              detailData.map((value, index) => {
                return (
                  <span key={index} style={{ whiteSpace: "pre" }}>
                    {`${index ? "\n" : ""}${value}`}
                  </span>
                );
              })
            )}
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
            onClick={() => editDetail(detailName)}
          >
            {editText}
          </button>
        ) : (
          <></>
        )}
        <div className="detailName">{`${detailName} : `}</div>
        <div className="detailData">
          {canShow(detailName) ? (
            <EditDetail
              detailData={detailData}
              detailName={detailName}
              itemID={itemID}
              itemType={itemType}
              APISERVER={props.APISERVER}
              reloadList={props.reloadList}
              resetStates={resetStates}
            />
          ) : (
            `${detailData}`
          )}
        </div>
      </div>
    );
  };

  const formatDetails = (itemType, itemID, details) => {
    return (
      <div>
        {details.type ? (
          formatDetail(itemType, itemID, DETAIL_NAMES.type, details.type)
        ) : (
          <></>
        )}
        {details.platform ? (
          formatDetail(
            itemType,
            itemID,
            DETAIL_NAMES.platform,
            details.platform
          )
        ) : (
          <></>
        )}
        {details.series ? (
          formatDetail(itemType, itemID, DETAIL_NAMES.series, details.series)
        ) : (
          <></>
        )}
        {details.name ? (
          formatDetail(itemType, itemID, DETAIL_NAMES.name, details.name)
        ) : (
          <></>
        )}
        {details.volume !== undefined ? (
          formatDetail(itemType, itemID, DETAIL_NAMES.volume, details.volume)
        ) : (
          <></>
        )}
        {details.from ? (
          formatDetail(itemType, itemID, DETAIL_NAMES.from, details.from)
        ) : (
          <></>
        )}
        {details.mediaType ? (
          formatDetail(
            itemType,
            itemID,
            DETAIL_NAMES.mediaType,
            details.mediaType
          )
        ) : (
          <></>
        )}
        {details.releaseDate ? (
          formatDetail(
            itemType,
            itemID,
            DETAIL_NAMES.releaseDate,
            details.releaseDate
          )
        ) : (
          <></>
        )}
        {details.author ? (
          formatDetail(itemType, itemID, DETAIL_NAMES.author, details.author)
        ) : (
          <></>
        )}
        {details.publisher ? (
          formatDetail(
            itemType,
            itemID,
            DETAIL_NAMES.publisher,
            details.publisher
          )
        ) : (
          <></>
        )}
        {details.limitedEdition !== undefined ? (
          formatDetail(
            itemType,
            itemID,
            DETAIL_NAMES.limitedEdition,
            details.limitedEdition
          )
        ) : (
          <></>
        )}
        {details.hasCase !== undefined ? (
          formatDetail(itemType, itemID, DETAIL_NAMES.hasCase, details.hasCase)
        ) : (
          <></>
        )}
        {details.condition ? (
          formatDetail(
            itemType,
            itemID,
            DETAIL_NAMES.condition,
            details.condition
          )
        ) : (
          <></>
        )}
        {details.sealed !== undefined ? (
          formatDetail(itemType, itemID, DETAIL_NAMES.sealed, details.sealed)
        ) : (
          <></>
        )}
        {details.ageRestricted !== undefined ? (
          formatDetail(
            itemType,
            itemID,
            DETAIL_NAMES.ageRestricted,
            details.ageRestricted
          )
        ) : (
          <></>
        )}
        {details.genres ? (
          formatDetail(itemType, itemID, DETAIL_NAMES.genres, details.genres)
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
