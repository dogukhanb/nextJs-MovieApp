import Header from "@/components/Header";
import React from "react";
import "./globals.css";
import Provider from "./provider";
import Tabs from "@/components/Tabs";

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Header />
          <Tabs />
          {children}
        </Provider>
      </body>
    </html>
  );
};

export default Layout;
