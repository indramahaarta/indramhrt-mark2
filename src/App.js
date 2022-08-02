import React, { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import Navbar from "./components/navbar/Navbar.js";
import Home from "./components/content/Home.js";

import "./App.css";
import About from "./components/content/About.js";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <React.Fragment>
      {loading && (
        <div className="spinner">
          <HashLoader
            color={"#791ece"}
            className="loading-spinner"
            loading={loading}
            size={80}
          />
          <p>Loading app...</p>
        </div>
      )}
      {!loading && (
        <React.Fragment>
          <Navbar />
          <Home />
          <About />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default App;
