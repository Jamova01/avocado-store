import React from "react";
import Header from "@components/Header/Header";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <footer>This is the footer</footer>
    </div>
  );
};

export default Layout;
