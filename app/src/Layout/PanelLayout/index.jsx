import React from "react";

const PanelLayout = ({ children, title }) => {
  return (
    <>
      <title>
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <title>{title || "Welcome"}</title>
        {/* <meta name="description" content={description} /> */}
        {/* <meta property="og:image" content={ogImage} /> */}
      </title>
      <header>Navbar</header>
      <aside>Sidebar</aside>

      <main>{children}</main>
    </>
  );
};

export default PanelLayout;
