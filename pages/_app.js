import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState, createContext } from "react";
import Fire from "./configs/firebase";

export const UserContext = createContext();

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState();

  useEffect(() => {
    Fire.auth().onAuthStateChanged(setUser);
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
