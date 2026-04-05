import React from "react";
import Footer from "./footer";
import Header from "./header";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;
