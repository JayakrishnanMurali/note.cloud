import React from "react";
import Navbar from "./Components/Navbar";
import Albums from "./pages/Albums";
import NowTrending from "./pages/NowTrending";
import PopularArtists from "./pages/PopularArtists";
import RecentlyAdded from "./pages/RecentlyAdded";
import Sidebar from "./pages/Sidebar";

function App() {
  return (
    <div className="h-screen px-5 py-10 sm:px-7 md:overflow-hidden">
      <Navbar />

      <div className="md:grid grid-cols-3">
        <div className="order-5 bg-green-800">
          <RecentlyAdded />
        </div>
        <div className="order-3 bg-yellow-800">
          <NowTrending />
        </div>
        <div className="order-1 bg-blue-300 row-start-1 row-end-3">
          <Sidebar />
        </div>

        <div className="order-6 bg-purple-500">
          <PopularArtists />
        </div>
        <div className="order-2 bg-pink-600 ">
          <Albums />
        </div>
      </div>
    </div>
  );
}

export default App;
