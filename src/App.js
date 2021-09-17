import React from "react";
import Navbar from "./Components/Navbar";
import NowTrending from "./pages/NowTrending";
import RecentlyAdded from "./pages/RecentlyAdded";

function App() {
  return (
    <div className="h-screen px-5 py-10 sm:px-7">
      <Navbar />
      <RecentlyAdded />
      <NowTrending />
    </div>
  );
}

export default App;
