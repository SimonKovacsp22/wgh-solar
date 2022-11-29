import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import { Navbar, Home, Services, Realizations, Contact, Footer } from ".";

const App = () => {
  return (
    <div className="root">
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sluzby" element={<Services />} />
          <Route path="/realizacie" element={<Realizations />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
};

export default App;
