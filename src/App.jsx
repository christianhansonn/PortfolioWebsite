import React, { useEffect, useRef } from "react";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  const navRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  // TODO: Build Projects modal

  const homeScroll = () => homeRef.current.scrollIntoView();
  const aboutScroll = () => aboutRef.current.scrollIntoView();

  const navFormat =
    "mx-2 text-sm font-bold hover:cursor-pointer hover:text-black hover:underline";

  return (
    <>
      <nav className="left-0 right-0 top-0">
        <div
          ref={navRef}
          className="-mb-10 mt-5 flex items-center justify-center"
        >
          <ul className="flex">
            <li className={navFormat} onClick={homeScroll}>
              Home
            </li>
            <li className={navFormat} onClick={aboutScroll}>
              About
            </li>
            {/* <li className={navFormat}>Projects</li> */}
          </ul>
        </div>
      </nav>
      <div className="ml-20 flex h-screen items-center" ref={homeRef}>
        <Home />
      </div>
      <div className="flex" ref={aboutRef}>
        <About />
      </div>
    </>
  );
}

export default App;
