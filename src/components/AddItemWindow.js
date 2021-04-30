import { useState } from "react";
import AddItem from "./AddItem";
import "./css/addItemWindow.css";

export default function AddItemWindow(props) {
  const [itemType, setItemType] = useState(props.itemType || "Anime");
  const [imgPath, setImagePath] = useState("");
  const [name, setName] = useState("");
  const [mediaType, setMediaType] = useState("DVD");
  const [releaseDate, setReleaseDate] = useState(null);
  const [publisher, setPublisher] = useState("");
  const [limitedEdition, setLimitedEdition] = useState(false);
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
  return (
    <div
      id={"addItemWindow"}
      className={`${props.mode ? "dark" : "light"}Window`}
    >
      <form
        id="addItemForm"
        className={`${props.mode ? "dark" : "light"}Window`}
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <AddItem
          itemType={itemType}
          setItemType={setItemType}
          imgPath={imgPath}
          setImagePath={setImagePath}
          name={name}
          setName={setName}
          mediaType={mediaType}
          setMediaType={setMediaType}
          releaseDate={releaseDate}
          setReleaseDate={setReleaseDate}
          publisher={publisher}
          setPublisher={setPublisher}
          limitedEdition={limitedEdition}
          setLimitedEdition={setLimitedEdition}
          genres={genres}
          setGenres={setGenres}
          sealed={sealed}
          setSealed={setSealed}
          type={type}
          setType={setType}
          from={from}
          setFrom={setFrom}
          condition={condition}
          setCondition={setCondition}
          ageRestricted={ageRestricted}
          setAgeRestricted={setAgeRestricted}
          series={series}
          setSeries={setSeries}
          volume={volume}
          setVolume={setVolume}
          author={author}
          setAuthor={setAuthor}
          platform={platform}
          setPlatform={setPlatform}
          hasCase={hasCase}
          setHasCase={setHasCase}
        />
        <input type="submit" value="ADD" style={{ width: "15ch" }} />
        <button
          style={{ width: "15ch" }}
          onClick={() => props.setShowAddItem(false)}
        >
          CANCEL
        </button>
      </form>
    </div>
  );
}
