import { useRef, useState } from "react";
import axios from "axios";

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
const ITEM_TYPES = {
  anime: "Anime",
  manga: "Manga",
  videoGame: "Video Game",
  figure: "Figure",
};
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
export default function EditDetail(props) {
  const [detail, setDetail] = useState(props.detailData);
  const detailRef = useRef(null);
  const genreRefs = [useRef(null), useRef(null), useRef(null)];
  const updateGenres = (refs) => {
    const listOfGenres = [];
    refs.forEach((ref) => {
      if (ref) {
        if (ref.current.value !== "None") listOfGenres.push(ref.current.value);
      }
    });
    console.log(listOfGenres);
    setDetail([...listOfGenres]);
  };
  const renderInputs = (itemID, itemType, detailName, detailData) => {
    console.log(detailData);
    switch (detailName) {
      case DETAIL_NAMES.ageRestricted:
        return (
          <select
            id="ageRestricted"
            name="ageRestricted"
            defaultValue={detailData === "No" ? "no" : "yes"}
            ref={detailRef}
            onChange={() => {
              setDetail(detailRef.current.value);
            }}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        );
      case DETAIL_NAMES.author:
        return (
          <input
            type="text"
            ref={detailRef}
            onChange={() => {
              setDetail(detailRef.current.value);
            }}
            defaultValue={detail}
          />
        );
      case DETAIL_NAMES.condition:
        return (
          <input
            type="text"
            ref={detailRef}
            onChange={() => {
              setDetail(detailRef.current.value);
            }}
            defaultValue={detail}
          />
        );
      case DETAIL_NAMES.from:
        return (
          <input
            type="text"
            ref={detailRef}
            onChange={() => {
              setDetail(detailRef.current.value);
            }}
            defaultValue={detail}
          />
        );
      case DETAIL_NAMES.genres:
        return (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <select
              id="genreOne"
              defaultValue={detailData.length > 0 ? detailData[0] : "None"}
              ref={genreRefs[0]}
              onChange={() => updateGenres(genreRefs)}
            >
              {(itemType === ITEM_TYPES.anime
                ? AnimeGenres
                : VideoGameGenres
              ).map((genreName, index) => {
                return (
                  <option key={index} value={genreName}>
                    {genreName}
                  </option>
                );
              })}
            </select>
            <select
              id="genreTwo"
              defaultValue={detailData.length > 1 ? detailData[1] : "None"}
              ref={genreRefs[1]}
              onChange={() => updateGenres(genreRefs)}
            >
              {(itemType === ITEM_TYPES.anime
                ? AnimeGenres
                : VideoGameGenres
              ).map((genreName, index) => {
                return (
                  <option key={index} value={genreName}>
                    {genreName}
                  </option>
                );
              })}
            </select>
            <select
              id="genreThree"
              defaultValue={detailData.length === 3 ? detailData[2] : "None"}
              ref={genreRefs[2]}
              onChange={() => updateGenres(genreRefs)}
            >
              {(itemType === ITEM_TYPES.anime
                ? AnimeGenres
                : VideoGameGenres
              ).map((genreName, index) => {
                return (
                  <option key={index} value={genreName}>
                    {genreName}
                  </option>
                );
              })}
            </select>
          </div>
        );
      case DETAIL_NAMES.hasCase:
        return (
          <select
            id="ageRestricted"
            name="ageRestricted"
            defaultValue={detailData === "No" ? "no" : "yes"}
            ref={detailRef}
            onChange={() => {
              setDetail(detailRef.current.value);
            }}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        );
      case DETAIL_NAMES.limitedEdition:
        return (
          <select
            id="ageRestricted"
            name="ageRestricted"
            defaultValue={detailData === "No" ? "no" : "yes"}
            ref={detailRef}
            onChange={() => {
              setDetail(detailRef.current.value);
            }}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        );
      case DETAIL_NAMES.mediaType:
        return (
          <select
            id="mediaType"
            defaultValue={detailData}
            ref={detailRef}
            onChange={() => {
              setDetail(detailRef.current.value);
            }}
          >
            <option value="DVD">DVD</option>
            <option value="BluRay">BluRay</option>
            <option value="VHS">VHS</option>
            <option value="Digital">Digital</option>
          </select>
        );
      case DETAIL_NAMES.name:
        return (
          <input
            type="text"
            ref={detailRef}
            onChange={() => {
              setDetail(detailRef.current.value);
            }}
            defaultValue={detail}
          />
        );
      case DETAIL_NAMES.platform:
        return (
          <select
            id="platform"
            defaultValue="PS2"
            ref={detailRef}
            onChange={() => {
              setDetail(detailRef.current.value);
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
        );
      case DETAIL_NAMES.publisher:
        return (
          <input
            type="text"
            ref={detailRef}
            onChange={() => {
              setDetail(detailRef.current.value);
            }}
            defaultValue={detail}
          />
        );
      case DETAIL_NAMES.releaseDate:
        return (
          <input
            id="releaseDate"
            name="releaseDate"
            type="date"
            ref={detailRef}
            onChange={() => {
              let date = new Date(detailRef.current.value);
              date.setDate(date.getDate() + 1);
              setDetail(date);
            }}
          />
        );
      case DETAIL_NAMES.sealed:
        return (
          <select
            id="ageRestricted"
            name="ageRestricted"
            defaultValue={detailData === "No" ? "no" : "yes"}
            ref={detailRef}
            onChange={() => {
              setDetail(detailRef.current.value);
            }}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        );
      case DETAIL_NAMES.series:
        return (
          <input
            type="text"
            ref={detailRef}
            onChange={() => {
              setDetail(detailRef.current.value);
            }}
            defaultValue={detail}
          />
        );
      case DETAIL_NAMES.type:
        return (
          <input
            type="text"
            ref={detailRef}
            onChange={() => {
              setDetail(detailRef.current.value);
            }}
            defaultValue={detail}
          />
        );
      case DETAIL_NAMES.volume:
        return (
          <input
            type="number"
            ref={detailRef}
            onChange={() => {
              setDetail(detailRef.current.value);
            }}
            defaultValue={detail}
          />
        );
      default:
        return <></>;
    }
  };

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        let server = props.APISERVER;
        console.log("ITEM", props.itemType, props.detailName);
        switch (props.itemType) {
          case ITEM_TYPES.anime:
            server += "anime/";
            switch (props.detailName) {
              case DETAIL_NAMES.name:
                await axios.patch(`${server}name/${props.itemID}`, {
                  details: { name: detail },
                });
                break;
              case DETAIL_NAMES.condition:
                await axios.patch(`${server}condition/${props.itemID}`, {
                  details: { condition: detail },
                });
                break;
              case DETAIL_NAMES.mediaType:
                await axios.patch(`${server}media/${props.itemID}`, {
                  details: { mediaType: detail },
                });
                break;
              case DETAIL_NAMES.publisher:
                await axios.patch(`${server}publisher/${props.itemID}`, {
                  details: { publisher: detail },
                });
                break;
              case DETAIL_NAMES.genres:
                console.log(
                  "Submitted:",
                  detail,
                  `${server}genre/${props.itemID}`
                );
                await axios.patch(`${server}genres/${props.itemID}`, {
                  details: { genres: detail },
                });
                break;
              case DETAIL_NAMES.releaseDate:
                await axios.patch(`${server}releasedate/${props.itemID}`);
                break;
              case DETAIL_NAMES.limitedEdition:
                const b = detail === "yes";
                console.log("GOT IN LE", b);
                await axios.patch(`${server}limitededition/${props.itemID}`, {
                  details: { limitedEdition: b },
                });
                break;
              default:
                break;
            }
            break;
          default:
            break;
        }
      }}
    >
      {renderInputs(
        props.itemID,
        props.itemType,
        props.detailName,
        props.detailData
      )}
      <input type="submit" value="Change" />
    </form>
  );
}
