import { useEffect, useState } from "react";
import "./app.css";
import ItemDisplayBox from "./components/ItemDisplayBox";
import ItemTypeSelectBar from "./components/ItemTypeSelectBar";

//Test Items Delete later
const testItems = ["All", "Manga", "Anime", "Figures", "Video Games"];
const testManga = {
  type: "Manga",
  imgPath:
    "https://images-na.ssl-images-amazon.com/images/I/51OiveuWrSL._SX331_BO1,204,203,200_.jpg",
  details: {
    volume: 1,
    name: "Nora",
    publisher: "ViZ",
    condition: "Very Good",
  },
};
const testAnime = {
  type: "Anime",
  imgPath:
    "https://upload.wikimedia.org/wikipedia/en/5/5c/Bleach_01_-_The_Substitute.jpg",
  details: {
    name: "Bleach Season 1",
    mediaType: "DVD",
    publisher: "ViZ",
    condition: "Like New",
    limitedEdition: true,
    genres: ["Shonen,Magic,Battle"],
  },
};
const testVideoGame = {
  type: "Video Game",
  imgPath:
    "https://images-na.ssl-images-amazon.com/images/I/51UTQTqkPaL._AC_SY445_.jpg",
  details: {
    name: "Persona 4",
    platform: "PS2",
    publisher: "Atlus",
    condition: "Fair",
    genres: ["RPG", "Dating Sim", "JRPG"],
    sealed: false,
    hasCase: true,
  },
};
const testFigure = {
  type: "Figure",
  imgPath:
    "https://images.goodsmile.info/cgm/images/product/20101104/3012/11913/large/5853bfbe3206658c12ee0eb7a5125e78.jpg",
  details: {
    name: "Kousaka Kirino",
    condition: "Like New",
    from: "OreImo",
    type: "Nendroid",
    sealed: false,
    ageRestricted: false,
  },
};

const itemTypes = ["All", "Manga", "Anime", "Figure", "Video Game"];

const testCollection = [testAnime, testManga, testVideoGame, testFigure];
//End of test items

function App() {
  const [mode, setMode] = useState(1);
  const [selectedItemType, setSelectedItemType] = useState(0);
  const [itemList, setItemList] = useState(testCollection);
  const [filteredItemList, setFilterdItemList] = useState(itemList);
  /**
   * Filters list by selected item type
   * @param {Array<CollectionItem>} itemList
   * @param {String} itemType
   * @returns The list with a filter applied
   */
  const applyFilter = (itemList, itemType) => {
    console.log("Item Type", itemType, itemTypes[itemType]);
    if (itemType === 0) return itemList;
    return [...itemList].filter(
      (item) => item.type.toUpperCase() === itemTypes[itemType].toUpperCase()
    );
  };
  useEffect(() => {
    setFilterdItemList(applyFilter(itemList, selectedItemType));
  }, [selectedItemType, itemList]);
  return (
    <div id="app" className={`${mode ? "dark" : "light"}Mode`}>
      <header>
        <h1 id="title">My Collection</h1>
        <button
          id="modeButton"
          onClick={() => setMode(mode ? 0 : 1)}
          className={`${mode ? "dark" : "light"}Mode`}
          style={{ marginLeft: "1em" }}
        >{`${mode ? "Dark" : "Light"} Mode`}</button>
      </header>
      <ItemTypeSelectBar
        items={testItems}
        mode={mode}
        selectedItemType={selectedItemType}
        setSelectedItemType={setSelectedItemType}
      />
      <ItemDisplayBox
        itemList={filteredItemList}
        mode={mode}
        selectedItemType={selectedItemType}
      />
    </div>
  );
}

export default App;
