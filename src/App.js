import { useState, useEffect } from "react";

import Login from "./components/Login";
import fire from "./firebase";
import './styles/table.css';
import MainPage from "./components/MainPage";

function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearError = () => {
    setErrorMessage("");
  };

  const handleLogin = () => {
    clearError();

    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
          case "auth/wrong-password":
            setErrorMessage("Email o contraseña invalidos");
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div className="App">
      {user ? (
        <>
          <button
            className="btn btn-primary float-right mr-5 mt-3"
            onClick={handleLogout}
          >
            Logout
          </button>

          <MainPage />
        </>
      ) : (
        <Login
          setEmail={setEmail}
          setPassword={setPassword}
          handleLogin={handleLogin}
          errorMessage={errorMessage}
        />
      )}
    </div>
  );
}

export default App;
