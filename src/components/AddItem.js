import { useRef, useState } from "react";

const AnimeGenres = [
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

export default function AddItem(props) {
  const itemTypeRef = useRef(null);
  const imgPathRef = useRef(null);
  const nameRef = useRef(null);
  const mediaTypeRef = useRef(null);
  const publisherRef = useRef(null);
  const genreRefs = [useRef(null), useRef(null), useRef(null)];
  const sealedRef = useRef(null);
  const typeRef = useRef(null);
  const fromRef = useRef(null);
  const conditionRef = useRef(null);
  const ageRestrictedRef = useRef(null);
  const seriesRef = useRef(null);
  const volumeRef = useRef(null);
  const authorRef = useRef(null);
  const platformRef = useRef(null);
  const hasCaseRef = useRef(null);

  const [itemType, setItemType] = useState(props.itemType);
  const [imgPath, setImgPath] = useState();
  const [name, setName] = useState("");
  const [mediaType, setMediaType] = useState("DVD");
  const [releaseDate, setReleaseDate] = useState(null);
  const [publisher, setPublisher] = useState("");
  const [genres, setGenres] = useState([]);
  const [sealed, setSealed] = useState(false);
  const [type, setType] = useState("");
  const [from, setFrom] = useState("");
  const [condition, setCondition] = useState("");
  const [ageRestricted, setAgeRestricted] = useState(false);
  const [series, setSeries] = useState("");
  const [volume, setVolume] = useState(0);
  const [author, setAuthor] = useState("");
  const [platform, setPlatform] = useState("PS2");
  const [hasCase, setHasCase] = useState("false");

  const makeDetails = (itemType) => {
    if (itemType === "Anime") {
      return (
        <>
          <label htmlFor="name">
            <div className="addItemLabel">Name:</div>
            <input id="name" name="name" />
          </label>
          <label htmlFor="mediaType">
            <div className="addItemLabel">Media Type:</div>
            <select id="mediaType" defaultValue="DVD">
              <option value="DVD">DVD</option>
              <option value="BluRay">BluRay</option>
              <option value="VHS">VHS</option>
              <option value="Digital">Digital</option>
            </select>
          </label>
          <label htmlFor="releaseDate">
            <div className="addItemLabel">Release Date:</div>
            <input id="releaseDate" name="releaseDate" type="date" />
          </label>
          <label htmlFor="publisher">
            <div className="addItemLabel">Publisher:</div>
            <input id="publisher" name="publisher" type="text" />
          </label>
          <label htmlFor="sealed">
            <div className="addItemLabel">Limited Edition:</div>
            <select id="sealed" defaultValue="no">
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </label>
        </>
      );
    }
    if (itemType === "Figure") {
      return (
        <>
          <label htmlFor="type">
            <div className="addItemLabel">Type:</div>
            <input id="type" name="type" type="text" />
          </label>
          <label htmlFor="name">
            <div className="addItemLabel">Name:</div>
            <input id="name" name="name" />
          </label>
          <label htmlFor="from">
            <div className="addItemLabel">From:</div>
            <input id="from" name="from" />
          </label>
          <label htmlFor="condition">
            <div className="addItemLabel">Condition:</div>
            <input id="condition" name="condition" />
          </label>
          <label htmlFor="sealed">
            <div className="addItemLabel">Sealed:</div>
            <select id="sealed" name="sealed" defaultValue="no">
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </label>
          <label htmlFor="ageRestricted">
            <div className="addItemLabel">Age Restricted:</div>
            <select id="ageRestricted" name="ageRestricted" defaultValue="no">
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </label>
          <label htmlFor="series">
            <div className="addItemLabel">Series:</div>
            <input id="series" name="series" />
          </label>
        </>
      );
    }
    if (itemType === "Manga") {
      return (
        <>
          <label htmlFor="Name">
            <div className="addItemLabel">Name:</div>
            <input id="name" name="name" />
          </label>
          <label htmlFor="volume">
            <div className="addItemLabel">Volume:</div>
            <input id="volume" name="volume" type="number" defaultValue="0" />
          </label>
          <label htmlFor="publisher">
            <div className="addItemLabel">Publisher:</div>
            <input id="publisher" name="publisher" />
          </label>
          <label htmlFor="author">
            <div className="addItemLabel">Author:</div>
            <input id="author" name="author" />
          </label>
          <label htmlFor="condition">
            <div className="addItemLabel">Condition:</div>
            <input id="condition" name="condition" />
          </label>
        </>
      );
    }
    if (itemType === "Video Game") {
      return (
        <>
          <label htmlFor="Name">
            <div className="addItemLabel">Name:</div>
            <input id="name" name="name" required />
          </label>
          <label htmlFor="mediaType">
            <div className="addItemLabel">Platform:</div>
            <select id="platform" defaultValue="PS2" required>
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
          </label>
          <label htmlFor="publisher">
            <div className="addItemLabel">Publisher:</div>
            <input id="publisher" name="publisher" />
          </label>
          <label htmlFor="condition">
            <div className="addItemLabel">Condition:</div>
            <input id="condition" name="condition" required />
          </label>
          <label htmlFor="releaseDate">
            <div className="addItemLabel">Release Date:</div>
            <input id="releaseDate" name="releaseDate" type="date" />
          </label>
          <label>
            <div className="addItemLabel">Genres:</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <select></select>
              <select></select>
              <select></select>
            </div>
          </label>
          <label htmlFor="sealed">
            <div className="addItemLabel">Sealed:</div>
            <select id="sealed" name="sealed" defaultValue="no">
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </label>
          <label htmlFor="hasCase">
            <div className="addItemLabel">Has Case:</div>
            <select id="hasCase" name="hasCase" defaultValue="no" required>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </label>
        </>
      );
    }
    return <></>;
  };
  return (
    <div id="addItemContainer">
      <label htmlFor="item">
        <div className="addItemLabel">Item:</div>
        <select
          id="addItemTypeSelect"
          name="item"
          value={props.itemType}
          ref={itemTypeRef}
          onChange={() => props.setItemType(itemTypeRef.current.value)}
          required
        >
          <option value="Anime">Anime</option>
          <option value="Figure">Figure</option>
          <option value="Manga">Manga</option>
          <option value="Video Game">Video Game</option>
        </select>
      </label>
      <label htmlFor="imagePath">
        <div className="addItemLabel">Image Path:</div>
        <input
          id="addImagePathInput"
          type="text"
          name="imagePath"
          ref={imgPathRef}
          onChange={() => {
            props.setImgPath(imgPathRef.current.value);
          }}
          required
        />
      </label>
      {makeDetails(props.itemType)}
    </div>
  );
}
