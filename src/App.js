import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope as MAIL } from "@fortawesome/free-solid-svg-icons";
import "./app.css";
import ItemDisplayBox from "./components/ItemDisplayBox";
import ItemTypeSelectBar from "./components/ItemTypeSelectBar";
import LoginWindow from "./components/LoginWindow";
import AddItemWindow from "./components/AddItemWindow";
import Search from "./components/Search";
//Test
//Test End
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
  const [loginTimer, setLoginTimer] = useState(null);
  const [searchName, setSearchName] = useState(null);

  const emailIcon = <FontAwesomeIcon icon={MAIL} />;
  /**
   * Sets the timer until system logs user out
   * @param {number} time
   */
  const loginTimeOut = (time) => {
    setLoginTimer(
      setTimeout(() => {
        setLoggedIn(false);
      }, time)
    );
  };

  /**
   * Stops the login timer
   * @param {*} timer
   */
  const stopLoginTime = (timer) => {
    clearTimeout(timer);
  };

  /**
   * Stops login timer then restarts the login timer
   * @param {*} timer
   * @param {*} time
   */
  const resetLoginTimer = (timer, time) => {
    console.log("Login timer reset");
    stopLoginTime(timer);
    loginTimeOut(time || fiveMin);
  };

  /**
   * Logs into system to allow editing of the database
   * @param {Object} loginInfo Login info
   */
  const login = async (loginInfo) => {
    const config = {
      params: loginInfo,
    };
    const res = await axios.get(`${APISERVER}login`, config);
    setLoggedIn(res.data.success);
    if (res.data.success) console.log("Logged In");
    loginTimeOut(fiveMin);
  };

  const logout = () => {
    setLoggedIn(false);
    stopLoginTime(loginTimer);
  };

  /**
   * Filters list by selected item type
   * @param {Array<CollectionItem>} itemList
   * @param {String} itemType
   * @returns The list with a filter applied
   */
  const applyItemFilter = (itemList, itemType) => {
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

  const applySearchName = () => {
    if (searchName) {
      console.log("APPLY SEARCHNAME");
      setTimeout(
        () =>
          setFilterdItemList(
            applyItemFilter(
              itemList.filter((item) => {
                return (
                  item.details.name
                    .toLowerCase()
                    .indexOf(searchName.toLowerCase()) !== -1
                );
              }),
              selectedItemType
            )
          ),
        350
      );
    }
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
      return itemList;
    }
    return;
  };

  useEffect(async () => {
    console.log("INITIAL LOAD OF LIST");
    await apiList();
  }, []);
  useEffect(() => {
    console.log("APPLY FILTER TO LIST");
    if (filteredItemList.length) {
      console.log("USE TIMEOUT");
      setTimeout(
        () => setFilterdItemList(applyItemFilter(itemList, selectedItemType)),
        350
      );
    } else {
      console.log("NOT USE TIMEOUT");
      setFilterdItemList(applyItemFilter(itemList, selectedItemType));
    }
  }, [selectedItemType, itemList]);
  useEffect(() => {
    applySearchName();
    setTimeout(() => setSearchName(null), 355);
  }, [searchName]);
  return (
    <div
      id="app"
      className={`${mode ? "dark" : "light"}Mode`}
      onMouseMove={() => {
        if (loggedIn) resetLoginTimer(loginTimer, fiveMin);
      }}
      onKeyDown={() => {
        if (loggedIn) resetLoginTimer(loginTimer, fiveMin);
      }}
    >
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
        <div id="headderButtonContainer">
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
          {loggedIn ? (
            <button
              id="logoutButton"
              className={`${mode ? "dark" : "light"}Mode ${
                mode ? "dark" : "light"
              }Button`}
              onClick={() => {
                logout();
              }}
            >
              LOGOUT
            </button>
          ) : (
            <></>
          )}
          <button
            id="modeButton"
            onClick={() => setMode(mode ? 0 : 1)}
            className={`${mode ? "dark" : "light"}Mode ${
              mode ? "dark" : "light"
            }Button`}
            style={{ marginLeft: "1em" }}
          >{`${mode ? "Dark" : "Light"} Mode`}</button>
        </div>
        <h1 id="title">My Collection </h1>

        <Search
          mode={mode}
          setSearchName={setSearchName}
          selectedItemType={selectedItemType}
        />
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
            searchName={searchName}
          />
        ) : itemList.length === 0 ? (
          <p>No Items To Display.</p>
        ) : (
          <div></div>
        )}
      </div>
      <footer className={`${mode ? "dark" : "light"}Footer`}>
        <span id="footerCredit" className="footerSpan">
          Created by {emailIcon}{" "}
          <a
            href="mailto:shanebuttcode@gmail.com"
            className={`${mode ? "dark" : "light"}Link`}
          >
            Shane Butt
          </a>{" "}
          {emailIcon}
        </span>
      </footer>
    </div>
  );
}

export default App;
