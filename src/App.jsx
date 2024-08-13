import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ScrollContainer from "./components/ScrollContainer";

const App = () => {
  return (
    <Router>
      <div className="App bg-black">
        {/* <Navbar /> */}
        <ScrollContainer>
          <Routes>
            <Route path="/" element={<Hero />} />
          </Routes>
        </ScrollContainer>
      </div>
    </Router>
  );
};

export default App;
