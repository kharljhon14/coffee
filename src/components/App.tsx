import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Blend from "./Blend";
import Explore from "./Explore";
import Footer from "./Footer";
import "../sass/main.scss";

function App() {
   return (
      <div className="app">
         <Header />
         <Hero />
         <Blend />
         <Explore />
         <Footer />
      </div>
   );
}

export default App;
