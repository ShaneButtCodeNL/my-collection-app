import { useEffect, useState } from "react";
import axios from "axios";
import "./app.css";
import ItemDisplayBox from "./components/ItemDisplayBox";
import ItemTypeSelectBar from "./components/ItemTypeSelectBar";
import LoginWindow from "./components/LoginWindow";
import AddItemWindow from "./components/AddItemWindow";

const fiveMin = 300000;
//Just for building and testing
const APISERVER = "http://localhost:8000/";

//Types of Items
const itemTypes = ["All", "Manga", "Anime", "Figure", "Video Game"];
function App() {
  const [mode, setMode] = useState(1);
  const [selectedItemType, setSelectedItemType] = useState(0);
  const [itemList, setItemList] = useState([]);
  const [filteredItemList, setFilterdItemList] = useState(itemList);
  const [showLogin, setShowLogin] = useState(false);
  const [showAddItem, setShowAddItem] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const login = async (loginInfo) => {
    const config = {
      params: loginInfo,
    };
    const res = await axios.get(`${APISERVER}login`, config);
    setLoggedIn(res.data.success);
    if (res.data.success) console.log("Logged In");
    setTimeout(() => {
      setLoggedIn(false);
    }, fiveMin);
  };

  /**
   * Filters list by selected item type
   * @param {Array<CollectionItem>} itemList
   * @param {String} itemType
   * @returns The list with a filter applied
   */
  const applyFilter = (itemList, itemType) => {
    if (itemType === 0) return itemList;
    return [...itemList].filter(
      (item) =>
        item.type.toUpperCase() ===
        (itemTypes[itemType] === "Video Game"
          ? "videogame"
          : itemTypes[itemType]
        ).toUpperCase()
    );
  };

  /**
   * Fetches item List from server sorts by type
   */
  const apiList = async () => {
    const res = await axios.get(APISERVER);
    if (res.data) {
      console.log("Fetch Successful");
      setItemList(
        res.data.sort((a, b) => {
          return a.type.localeCompare(b.type);
        })
      );
    }
  };

  useEffect(() => {
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
      {showAddItem ? (
        <AddItemWindow
          mode={mode}
          setShowAddItem={setShowAddItem}
          reloadList={apiList}
          APISERVER={APISERVER}
        />
      ) : (
        <></>
      )}
      <header>
        {loggedIn ? (
          <button
            id="addItemButton"
            className={`${mode ? "dark" : "light"}Mode ${
              mode ? "dark" : "light"
            }Button`}
            onClick={() => {
              console.log("Clicked add Item");
              setShowAddItem(true);
            }}
          >
            Add Item
          </button>
        ) : (
          <button
            id="loginButton"
            className={`${mode ? "dark" : "light"}Mode ${
              mode ? "dark" : "light"
            }Button`}
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
          className={`${mode ? "dark" : "light"}Mode ${
            mode ? "dark" : "light"
          }Button`}
          style={{ marginLeft: "1em" }}
        >{`${mode ? "Dark" : "Light"} Mode`}</button>
      </header>
      <ItemTypeSelectBar
        items={itemTypes}
        mode={mode}
        selectedItemType={selectedItemType}
        setSelectedItemType={setSelectedItemType}
      />
      <div className="itemBoxContainer">
        {filteredItemList.length ? (
          <ItemDisplayBox
            itemList={filteredItemList}
            mode={mode}
            selectedItemType={selectedItemType}
            APISERVER={APISERVER}
            reloadList={apiList}
            loggedIn={loggedIn}
          />
        ) : (
          <p>No Items To Display.</p>
        )}
      </div>
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
