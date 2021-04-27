import { useState } from "react";
import AddItem from "./AddItem";
import "./css/addItemWindow.css";

export default function AddItemWindow(props) {
  const [itemType, setItemType] = useState(props.itemType || "Anime");
  const [imgPath, setImagePath] = useState("");
  const [details, setDetails] = useState({
    anime: {
      name: null,
      mediaType: "DVD",
      releaseDate: null,
      publisher: null,
      genres: [],
      limitedEdition: false,
    },
    figure: {
      name: null,
      condition: null,
      from: null,
      ageRestricted: false,
      type: null,
      sealed: false,
      series: null,
    },
    manga: {
      name: null,
      volume: 0,
      publisher: null,
      author: null,
      condition: null,
    },
    videoGame: {
      name: null,
      platform: null,
      publisher: null,
      condition: null,
      releaseDate: null,
      genres: [],
      sealed: false,
      hasCase: true,
    },
  });
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
          details={details}
          setDetails={setDetails}
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
