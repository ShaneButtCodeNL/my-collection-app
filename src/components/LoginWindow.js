import { useRef, useState } from "react";
import "./css/LoginWindow.css";

export default function LoginWindow(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  return (
    <div id="loginWindow" className={`${props.mode ? "dark" : "light"}Window`}>
      <form
        id="loginForm"
        className={`${props.mode ? "dark" : "light"}Window`}
        onSubmit={(event) => {
          event.preventDefault();
          const loginInfo = { userName: userName, password: password };
          setUserName("");
          setPassword("");
          props.login(loginInfo);
          props.setShowLogin(false);
        }}
      >
        <label id="userNameLabel" className="labelFlex" htmlFor="userName">
          <span style={{ margin: "0 1ch" }}>User Name</span>
          <input
            type="text"
            id="userNameInput"
            name="userName"
            ref={userNameRef}
            onChange={() => setUserName(userNameRef.current.value)}
            required
          />
        </label>
        <label id="passwordLabel" className="labelFlex" htmlFor="password">
          <span style={{ margin: "0 1ch" }}>Password</span>
          <input
            type="password"
            id="passwordInput"
            name="password"
            required
            ref={passwordRef}
            onChange={() => setPassword(passwordRef.current.value)}
          />
        </label>
        <input style={{ width: "100%" }} type="submit" value="Login" />
        <button
          style={{ width: "100%" }}
          onClick={() => {
            props.setShowLogin(false);
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
