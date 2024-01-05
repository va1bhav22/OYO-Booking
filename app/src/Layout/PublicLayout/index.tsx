import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface publicProps {
  element: React.ReactNode;
  title: string;
}
const PublicLayout = ({ element, title }: publicProps) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{element}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default PublicLayout;
