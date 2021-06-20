import { useRef, useState } from "react";
import "./css/addDetail.css";
import axios from "axios";

const AnimeGenres = [
  "None",
  "Kodomo",
  "Shonen",
  "Shojo",
  "Seinen",
  "Josei",
  "Harem",
  "Rev Harem",
  "Hentai",
  "Romance",
  "Horror",
  "Comedy",
  "Fanatsy",
  "Ecchi",
  "Mecha",
  "Loli",
  "Shota",
  "Isekai",
  "Yaoi",
  "Yuri",
  "Drama",
  "Supernatural",
  "Thriller",
  "Slice of Life",
  "Adventure",
  "Battle",
  "Magic",
];
const VideoGameGenres = [
  "None",
  "Platform",
  "Shooter",
  "Beat em Up",
  "Fighting",
  "RPG",
  "JRPG",
  "Sim",
  "Strategy",
  "Sports",
  "MMO",
  "Dating Sim",
  "Gatcha",
  "Idle",
  "Racing",
  "Tower Defense",
  "First-Person",
  "Thrid Person",
  "Real Time",
  "Rougelike",
  "Action",
  "Stealth",
  "Survival",
  "Rhythm",
  "Battle Royal",
];

export default function AddDetail(props) {
  //States
  const [id] = useState(props.item._id);
  const [type] = useState(props.item.type);
  //const [imgPath] = useState(props.item.imgPath);
  const [details, setDetails] = useState(props.item.details);
  //Refs
  const nameRef = useRef(null);
  const mediaTypeRef = useRef(null);
  const releaseDateRef = useRef(null);
  const publisherRef = useRef(null);
  const limitedEditionRef = useRef(null);
  const conditionRef = useRef(null);
  const [genre1Ref, genre2Ref, genre3Ref] = [
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const typeRef = useRef(null);
  const fromRef = useRef(null);
  const sealedRef = useRef(null);
  const ageRestrictedRef = useRef(null);
  const seriesRef = useRef(null);
  const volumeRef = useRef(null);
  const authorRef = useRef(null);
  const platformRef = useRef(null);
  const hasCaseRef = useRef(null);
  const [anime, videoGame, manga, figure] = [
    "Anime",
    "VideoGame",
    "Manga",
    "Figure",
  ];

  //Functions
  const isItemType = (types, type) => {
    for (let t of types) {
      if (type === t) return true;
    }
    return false;
  };
  const patch = async (details) => {
    const url = `${props.APISERVER}${type.toLowerCase()}/${id}`;
    console.log("URL", url, "\nDATA:", details);
    await axios.patch(url, { details: details });
    props.reloadList();
  };
  const makeDisplay = (item) => {
    return (
      <>
        {/*Name => All */}
        <>
          <label
            className={`addDetailLabel ${
              props.mode ? "dark" : "light"
            }AddDetailLabel`}
          >
            Name:
          </label>
          <input
            required
            type="text"
            name="addDetailName"
            id="addDetailName"
            className="inputEdit"
            ref={nameRef}
            defaultValue={details.name}
            onChange={() => {
              let newDetails = { ...details };
              newDetails.name =
                nameRef.current.value !== ""
                  ? nameRef.current.value
                  : undefined;
              setDetails(newDetails);
            }}
          />
        </>
        {/**Platform=>VideoGame */}
        <>
          {isItemType([videoGame], item.type) ? (
            <>
              <label
                className={`addDetailLabel ${
                  props.mode ? "dark" : "light"
                }AddDetailLabel`}
              >
                Platform
              </label>
              <select
                ref={platformRef}
                id="addDetailPlatform"
                name="addDetailPlatform"
                className="inputEdit"
                defaultValue={details.platform}
                onChange={() => {
                  const newDetails = { ...details };
                  newDetails.platform = platformRef.current.value;
                  setDetails(newDetails);
                }}
              >
                <option value="PS1">PS1</option>
                <option value="PS2">PS2</option>
                <option value="PS3">PS3</option>
                <option value="PS4">PS4</option>
                <option value="PS5">PS5</option>
                <option value="NES">NES</option>
                <option value="SNES">SNES</option>
                <option value="N64">N64</option>
                <option value="GC">GC</option>
                <option value="WII">WII</option>
                <option value="WIIU">WIIU</option>
                <option value="SWITCH">SWITCH</option>
                <option value="SEGAMS">SEGAMS</option>
                <option value="SEGAGEN">SEGAGEN</option>
                <option value="32X">32X</option>
                <option value="SEGADC">SEGADC</option>
                <option value="PC">PC</option>
                <option value="GB">GB</option>
                <option value="GBC">GBC</option>
                <option value="GBA">GBA</option>
                <option value="DS">DS</option>
                <option value="3DS">3DS</option>
              </select>
            </>
          ) : (
            <></>
          )}
        </>
        {/**Volume=>Manga */}
        <>
          {isItemType([manga], type) ? (
            <>
              <label
                className={`addDetailLabel ${
                  props.mode ? "dark" : "light"
                }AddDetailLabel`}
              >
                Volume
              </label>
              <input
                type="number"
                name="addDetailVolume"
                id="addDetailVolume"
                className="inputEdit"
                min={0}
                ref={volumeRef}
                defaultValue={
                  details.volume !== undefined ? details.volume : ""
                }
                onChange={() => {
                  let newDetails = { ...details };
                  newDetails.volume =
                    volumeRef.current.value !== ""
                      ? volumeRef.current.value
                      : undefined;
                  setDetails(newDetails);
                }}
              />
            </>
          ) : (
            <></>
          )}
        </>
        {/**Author=>Manga */}
        <>
          {isItemType([manga], type) ? (
            <>
              <label
                className={`addDetailLabel ${
                  props.mode ? "dark" : "light"
                }AddDetailLabel`}
              >
                Author
              </label>
              <input
                type="text"
                name="addDetailAuthor"
                id="addDetailAuthor"
                className="inputEdit"
                ref={authorRef}
                defaultValue={details.author ? details.author : ""}
                onChange={() => {
                  let newDetails = { ...details };
                  newDetails.author =
                    authorRef.current.value !== ""
                      ? authorRef.current.value
                      : undefined;
                  setDetails(newDetails);
                }}
              />
            </>
          ) : (
            <></>
          )}
        </>
        {/**Media type =>Anime*/}
        <>
          {isItemType([anime], type) ? (
            <>
              <label
                className={`addDetailLabel ${
                  props.mode ? "dark" : "light"
                }AddDetailLabel`}
              >
                Media Type:
              </label>
              <select
                ref={mediaTypeRef}
                name="addDetailMediaType"
                id="addDetailMediaType"
                className="inputEdit"
                defaultValue={details.mediaType ? details.mediaType : "DVD"}
                onChange={() => {
                  const newDetails = { ...details };
                  newDetails.mediaType = mediaTypeRef.current.value;
                  setDetails(newDetails);
                }}
              >
                <option value="DVD">DVD</option>
                <option value="BluRay">BluRay</option>
                <option value="VHS">VHS</option>
                <option value="Digital">Digital</option>
              </select>
            </>
          ) : (
            <></>
          )}
        </>
        {/**From=>Figure */}
        <>
          {isItemType([figure], type) ? (
            <>
              <label
                className={`addDetailLabel ${
                  props.mode ? "dark" : "light"
                }AddDetailLabel`}
              >
                From
              </label>
              <input
                type="text"
                name="addDetailFrom"
                id="addDetailFrom"
                className="inputEdit"
                ref={fromRef}
                defaultValue={details.from ? details.from : ""}
                onChange={() => {
                  let newDetails = { ...details };
                  newDetails.from =
                    fromRef.current.value !== ""
                      ? fromRef.current.value
                      : undefined;
                  setDetails(newDetails);
                }}
              />
            </>
          ) : (
            <></>
          )}
        </>
        {/**Series=>Figure */}
        <>
          {isItemType([figure], type) ? (
            <>
              <label
                className={`addDetailLabel ${
                  props.mode ? "dark" : "light"
                }AddDetailLabel`}
              >
                Series
              </label>
              <input
                type="text"
                name="addDetailSeries"
                id="addDetailSeries"
                className="inputEdit"
                ref={seriesRef}
                defaultValue={details.series ? details.series : ""}
                onChange={() => {
                  let newDetails = { ...details };
                  newDetails.series =
                    seriesRef.current.value !== ""
                      ? seriesRef.current.value
                      : undefined;
                  setDetails(newDetails);
                }}
              />
            </>
          ) : (
            <></>
          )}
        </>
        {/**Type=>Figure */}
        <>
          {isItemType([figure], type) ? (
            <>
              <label
                className={`addDetailLabel ${
                  props.mode ? "dark" : "light"
                }AddDetailLabel`}
              >
                Type
              </label>
              <input
                type="text"
                name="addDetailType"
                id="addDetailType"
                className="inputEdit"
                ref={typeRef}
                defaultValue={details.type ? details.type : ""}
                onChange={() => {
                  let newDetails = { ...details };
                  newDetails.type =
                    typeRef.current.value !== ""
                      ? typeRef.current.value
                      : undefined;
                  setDetails(newDetails);
                }}
              />
            </>
          ) : (
            <></>
          )}
        </>
        {/**Release Date =>Anime, VideoGame*/}
        <>
          {isItemType([anime, videoGame], type) ? (
            <>
              <label
                className={`addDetailLabel ${
                  props.mode ? "dark" : "light"
                }AddDetailLabel`}
              >
                Release Date:
              </label>
              <input
                ref={releaseDateRef}
                type="Date"
                name="addDetailReleaseDate"
                id="addDetailReleaseDate"
                className="inputEdit"
                onChange={() => {
                  let newDetails = { ...details };
                  let date = new Date(releaseDateRef.current.value);
                  date.setDate(date.getDate() + 1);
                  console.log("Date:", date, date.valueOf());
                  newDetails.releaseDate = Number.isNaN(date.valueOf())
                    ? undefined
                    : date;
                  console.log("NewDetails", newDetails);
                  setDetails(newDetails);
                }}
              />
            </>
          ) : (
            <></>
          )}
        </>
        {/**Publisher=>Anime,Manga,VideoGame*/}
        <>
          {isItemType([anime, manga, videoGame], type) ? (
            <>
              <label
                className={`addDetailLabel ${
                  props.mode ? "dark" : "light"
                }AddDetailLabel`}
              >
                Publisher:
              </label>
              <input
                ref={publisherRef}
                type="text"
                id="addDetailPublisher"
                name="addDetailPublisher"
                className="inputEdit"
                defaultValue={details.publisher ? details.publisher : ""}
                onChange={() => {
                  const newDetails = { ...details };
                  newDetails.publisher =
                    publisherRef.current.value !== ""
                      ? publisherRef.current.value
                      : undefined;
                  setDetails(newDetails);
                }}
              />
            </>
          ) : (
            <></>
          )}
        </>
        {/**Limited Edition=>Anime,VideoGame*/}
        <>
          {isItemType([anime, videoGame], item.type) ? (
            <>
              <label
                className={`addDetailLabel ${
                  props.mode ? "dark" : "light"
                }AddDetailLabel`}
              >
                Limited Edition:
              </label>
              <select
                ref={limitedEditionRef}
                id="addDetailLimitedEdition"
                name="addLimitedEdition"
                className="inputEdit"
                defaultValue={
                  details.limitedEdition === undefined
                    ? "unknown"
                    : details.limitedEdition
                    ? "yes"
                    : "no"
                }
                onChange={() => {
                  const newDetails = { ...details };
                  let d = limitedEditionRef.current.value;
                  newDetails.limitedEdition =
                    d === "unknown" ? undefined : d === "yes";
                  setDetails(newDetails);
                }}
              >
                <option value="unknown">Unknown</option>
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </>
          ) : (
            <></>
          )}
        </>
        {/**Condition =>All*/}
        <>
          <label
            className={`addDetailLabel ${
              props.mode ? "dark" : "light"
            }AddDetailLabel`}
          >
            Condition:
          </label>
          <input
            ref={conditionRef}
            type="text"
            id="addDetailCondition"
            name="addDetailCondition"
            className="inputEdit"
            required
            defaultValue={details.condition ? details.condition : ""}
            onChange={() => {
              const newDetails = { ...details };
              newDetails.condition =
                conditionRef.current.value !== ""
                  ? conditionRef.current.value
                  : undefined;
              setDetails(newDetails);
            }}
          />
        </>
        {/**Has a case=>VideoGame */}
        <>
          {isItemType([videoGame], type) ? (
            <>
              <label
                className={`addDetailLabel ${
                  props.mode ? "dark" : "light"
                }AddDetailLabel`}
              >
                Has A Case
              </label>
              <select
                ref={hasCaseRef}
                id="addDetailHasCase"
                name="addHasCase"
                className="inputEdit"
                defaultValue={
                  details.hasCase === undefined
                    ? "unknown"
                    : details.hasCase
                    ? "yes"
                    : "no"
                }
                onChange={() => {
                  const newDetails = { ...details };
                  let d = hasCaseRef.current.value;
                  newDetails.hasCase =
                    d === "unknown" ? undefined : d === "yes";
                  setDetails(newDetails);
                }}
              >
                <option value="unknown">Unknown</option>
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </>
          ) : (
            <></>
          )}
        </>
        {/**Sealed=>Figure,VideoGame */}
        <>
          {isItemType([figure, videoGame], type) ? (
            <>
              <label
                className={`addDetailLabel ${
                  props.mode ? "dark" : "light"
                }AddDetailLabel`}
              >
                Sealed
              </label>
              <select
                ref={sealedRef}
                id="addDetailSealed"
                name="addSealed"
                className="inputEdit"
                defaultValue={
                  details.sealed === undefined
                    ? "unknown"
                    : details.sealed
                    ? "yes"
                    : "no"
                }
                onChange={() => {
                  const newDetails = { ...details };
                  let d = sealedRef.current.value;
                  newDetails.sealed = d === "unknown" ? undefined : d === "yes";
                  setDetails(newDetails);
                }}
              >
                <option value="unknown">Unknown</option>
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </>
          ) : (
            <></>
          )}
        </>
        {/**Age Restricted=>Figure */}
        <>
          {isItemType([figure], type) ? (
            <>
              <label
                className={`addDetailLabel ${
                  props.mode ? "dark" : "light"
                }AddDetailLabel`}
              >
                18<sup>+</sup>
              </label>
              <select
                ref={ageRestrictedRef}
                id="addDetailAgeRestricted"
                name="addAgeRestricted"
                className="inputEdit"
                defaultValue={
                  details.ageRestricted === undefined
                    ? "unknown"
                    : details.ageRestricted
                    ? "yes"
                    : "no"
                }
                onChange={() => {
                  const newDetails = { ...details };
                  let d = ageRestrictedRef.current.value;
                  newDetails.ageRestricted =
                    d === "unknown" ? undefined : d === "yes";
                  setDetails(newDetails);
                }}
              >
                <option value="unknown">Unknown</option>
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </>
          ) : (
            <></>
          )}
        </>
        {/**Genres=>Anime,VideoGame */}
        <>
          {isItemType([anime, videoGame], item.type) ? (
            <>
              <label
                className={`addDetailLabel ${
                  props.mode ? "dark" : "light"
                }AddDetailLabel`}
              >
                Genres:
              </label>
              <div className="addItemGenresList">
                <select
                  ref={genre1Ref}
                  id="addDetailGenresOne"
                  name="addDetailGenresOne"
                  className="inputEdit"
                  defaultValue={
                    details.genres.length > 0 ? details.genres[0] : "None"
                  }
                  onChange={() => {
                    const newDetails = { ...details };
                    let g = [];
                    const [g1, g2, g3] = [
                      genre1Ref.current.value,
                      genre2Ref.current.value,
                      genre3Ref.current.value,
                    ];
                    if (g1 !== "None") g.push(g1);
                    if (g2 !== "None") g.push(g2);
                    if (g3 !== "None") g.push(g3);
                    newDetails.genres = g;
                    setDetails(newDetails);
                  }}
                >
                  {(item.type === anime ? AnimeGenres : VideoGameGenres).map(
                    (genreName, index) => {
                      return (
                        <option key={index} value={genreName}>
                          {genreName}
                        </option>
                      );
                    }
                  )}
                </select>
                <select
                  ref={genre2Ref}
                  id="addDetailGenresTwo"
                  name="addDetailGenresTwo"
                  className="inputEdit"
                  defaultValue={
                    details.genres.length > 1 ? details.genres[1] : "None"
                  }
                  onChange={() => {
                    const newDetails = { ...details };
                    let g = [];
                    const [g1, g2, g3] = [
                      genre1Ref.current.value,
                      genre2Ref.current.value,
                      genre3Ref.current.value,
                    ];
                    if (g1 !== "None") g.push(g1);
                    if (g2 !== "None") g.push(g2);
                    if (g3 !== "None") g.push(g3);
                    newDetails.genres = g;
                    setDetails(newDetails);
                  }}
                >
                  {(item.type === anime ? AnimeGenres : VideoGameGenres).map(
                    (genreName, index) => {
                      return (
                        <option key={index} value={genreName}>
                          {genreName}
                        </option>
                      );
                    }
                  )}
                </select>
                <select
                  ref={genre3Ref}
                  id="addDetailGenresThree"
                  name="addDetailGenresThree"
                  className="inputEdit"
                  defaultValue={
                    details.genres.length === 3 ? details.genres[2] : "None"
                  }
                  onChange={() => {
                    const newDetails = { ...details };
                    let g = [];
                    const [g1, g2, g3] = [
                      genre1Ref.current.value,
                      genre2Ref.current.value,
                      genre3Ref.current.value,
                    ];
                    if (g1 !== "None") g.push(g1);
                    if (g2 !== "None") g.push(g2);
                    if (g3 !== "None") g.push(g3);
                    newDetails.genres = g;
                    setDetails(newDetails);
                  }}
                >
                  {(item.type === anime ? AnimeGenres : VideoGameGenres).map(
                    (genreName, index) => {
                      return (
                        <option key={index} value={genreName}>
                          {genreName}
                        </option>
                      );
                    }
                  )}
                </select>
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      </>
    );
  };

  return (
    <div className="addDetailFormWrapper">
      <form
        id="addDetailForm"
        className={`${props.mode ? "dark" : "light"}AddDetailForm`}
        onSubmit={async (event) => {
          event.preventDefault();
          patch(details);
          props.setShowAddDetail(false);
        }}
      >
        {makeDisplay(props.item)}
        <input type="submit" style={{ height: "100%" }} value="Confirm" />
        <button
          onClick={() => {
            props.setShowAddDetail(false);
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
