import React from "react";
import Navbar from "./Components/Navbar";
import Albums from "./pages/Albums";
import NowTrending from "./pages/NowTrending";
import PopularArtists from "./pages/PopularArtists";
import RecentlyAdded from "./pages/RecentlyAdded";
import Sidebar from "./pages/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import MobileMenu from "./Components/MobileMenu";

function App() {
  return (
    <>
      <MobileMenu />

      <div className="h-screen px-5 py-10 sm:px-7  ">
        <div>
          <Navbar />
        </div>
        <Router>
          <div className="md:grid grid-cols-6 gap-6">
            <div className="order-2  lg:col-start-2 col-end-5 md:col-start-1 ">
              <Albums />
            </div>
            <div className="order-4 lg:col-start-2 col-end-5 md:col-start-1">
              <RecentlyAdded />
            </div>
            <div className="order-3 col-start-5 col-end-7 ">
              <NowTrending />
            </div>
            <div className="order-1  row-start-1 row-end-3 fixed">
              <Sidebar />
            </div>

            <div className="order-5 col-start-5 col-end-7">
              <PopularArtists />
            </div>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
