import { useEffect, useState } from "react";
import axios from "axios";
import "./app.css";
import ItemDisplayBox from "./components/ItemDisplayBox";
import ItemTypeSelectBar from "./components/ItemTypeSelectBar";
import LoginWindow from "./components/LoginWindow";

const thirtySecs = 30000;
const threeMin = 180000;

//Types of Items
const itemTypes = ["All", "Manga", "Anime", "Figure", "Video Game"];
function App() {
  const [mode, setMode] = useState(1);
  const [selectedItemType, setSelectedItemType] = useState(0);
  const [itemList, setItemList] = useState([]);
  const [filteredItemList, setFilterdItemList] = useState(itemList);
  const [showLogin, setShowLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = (un, pw) => {
    setUserName(un);
    setPassword(pw);
    setTimeout(() => {
      setUserName("");
      setPassword("");
    }, thirtySecs);
  };

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
    const apiList = async () => {
      const res = await axios.get("http://localhost:8000/");
      if (res.data) {
        console.log("Fetch Successful");
        setItemList(
          res.data.sort((a, b) => {
            return a.type.localeCompare(b.type);
          })
        );
      }
    };
    apiList();
  }, []);
  useEffect(() => {
    setFilterdItemList(applyFilter(itemList, selectedItemType));
  }, [selectedItemType, itemList]);
  return (
    <div id="app" className={`${mode ? "dark" : "light"}Mode`}>
      {showLogin ? (
        <LoginWindow mode={mode} setShowLogin={setShowLogin} login={login} />
      ) : (
        <></>
      )}
      <header>
        {userName.length ? (
          <></>
        ) : (
          <button
            id="loginButton"
            className={`${mode ? "dark" : "light"}Mode`}
            onClick={() => {
              setShowLogin(true);
            }}
          >
            Login
          </button>
        )}
        <h1 id="title">My Collection {process.env.TEST === "test"}</h1>
        <button
          id="modeButton"
          onClick={() => setMode(mode ? 0 : 1)}
          className={`${mode ? "dark" : "light"}Mode`}
          style={{ marginLeft: "1em" }}
        >{`${mode ? "Dark" : "Light"} Mode`}</button>
      </header>
      <ItemTypeSelectBar
        items={itemTypes}
        mode={mode}
        selectedItemType={selectedItemType}
        setSelectedItemType={setSelectedItemType}
      />
      {filteredItemList.length ? (
        <ItemDisplayBox
          itemList={filteredItemList}
          mode={mode}
          selectedItemType={selectedItemType}
        />
      ) : (
        <p>No Items To Display.</p>
      )}
      <footer className={`${mode ? "dark" : "light"}Footer`}>
        <span id="footerCredit" className="footerSpan">
          Created by{" "}
          <a
            href="mailto:shanebuttcode@gmail.com"
            className={`${mode ? "dark" : "light"}Link`}
          >
            Shane Butt
          </a>
        </span>
      </footer>
    </div>
  );
}

export default App;
