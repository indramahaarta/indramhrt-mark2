import React, { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import Navbar from "./components/navbar/Navbar.js";
import Home from "./components/content/Home.js";

import "./App.css";
import About from "./components/content/About.js";
import Project from "./components/content/Project.js";
import Footer from "./components/footer/Footer.js";
import Modal from "./components/ui/Modal.js";

function App() {
  const [loading, setLoading] = useState(false);
  const [isModalOn, setIsModalOn] = useState();

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 7000);
  }, []);

  const downloadHandler = () => {
    setModal("CV has been downloaded! :D >_<")
  }

  const blogHandler = () => {
    setModal("Blog is under construction :(")
  }

  const setModal = (message) => {
    setIsModalOn(message);

    setTimeout(() => {
      setIsModalOn(false)
    }, 6000)
  }

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
          <Navbar onClickBlog={blogHandler} />
          <Home onDownload={downloadHandler}/>
          <About />
          <Project />
          <Footer />
          {isModalOn && <Modal message={isModalOn}/>}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default App;
