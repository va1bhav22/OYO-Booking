import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PublicLayout = ({ children, title }) => {
  const updateTabTitle = (newTitle) => {
    document.title = newTitle;
  };
  useEffect(() => {
    updateTabTitle(title);
  }, []);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default PublicLayout;
