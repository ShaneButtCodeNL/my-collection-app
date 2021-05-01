import { useState } from "react";
import axios from "axios";
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

  const addItem = async () => {
    const item = {
      type: itemType,
      imgPath: imgPath
        ? imgPath
        : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png",
    };
    if (itemType === "Anime") {
      const details = {
        name: name,
        mediaType: mediaType,
        publisher: publisher ? publisher : undefined,
        condition: condition ? condition : undefined,
        releaseDate: releaseDate ? releaseDate : undefined,
        genres: genres,
        limitedEdition: limitedEdition,
      };
      await axios.post(`${props.APISERVER}anime`, { ...item, details });
    }
    if (itemType === "Figure") {
      const details = {
        name: name,
        condition: condition ? condition : undefined,
        from: from ? from : undefined,
        ageRestricted: ageRestricted,
        type: type ? type : undefined,
        sealed: sealed,
        series: series ? series : undefined,
      };
      await axios.post(`${props.APISERVER}figure`, { ...item, details });
    }
    if (itemType === "Manga") {
      const details = {
        name: name,
        volume: volume ? volume : 0,
        publisher: publisher ? publisher : undefined,
        author: author ? author : undefined,
        condition: condition ? condition : undefined,
      };
      await axios.post(`${props.APISERVER}manga`, { ...item, details });
    }
    if (itemType === "Video Game") {
      const details = {
        name: name,
        platform: platform,
        publisher: publisher ? publisher : undefined,
        condition: condition ? condition : undefined,
        releaseDate: releaseDate ? releaseDate : undefined,
        genres: genres,
        sealed: sealed,
        hasCase: hasCase,
      };
      await axios.post(`${props.APISERVER}videogame`, { ...item, details });
    }
    props.setShowAddItem(false);
    props.reloadList();
  };

  return (
    <div
      id={"addItemWindow"}
      className={`${props.mode ? "dark" : "light"}Window`}
    >
      <form
        id="addItemForm"
        className={`${props.mode ? "dark" : "light"}Window`}
        onSubmit={async (event) => {
          event.preventDefault();
          await addItem();
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
