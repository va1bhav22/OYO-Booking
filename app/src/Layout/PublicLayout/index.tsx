import React, { ReactNode, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface publicProps {
  children: ReactNode;
  title: string;
}
const PublicLayout: React.FC<publicProps> = ({ children, title }) => {
  const updateTabTitle = (newTitle: string) => {
    document.title = newTitle;
  };
  useEffect(() => {
    updateTabTitle(
      "OYO: India's Best Online Hotel Booking Site For Sanitized Stay" || title
    );
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
