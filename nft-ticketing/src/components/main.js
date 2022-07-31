import React, { useState } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import DashBoard from "./dashBoard";
import Events from "./events";
import WhiteList from "./whiteList";

const Main = () => {
  const [showNav, setShowNav] = useState(true);
  const [menuObj, setMenuObj] = useState({
    dashBoard: true,
    events: false,
    whiteList: false,
  });

  console.log(menuObj);

  return (
    <div className="flex">
      {showNav && <Sidebar setMenuObj={setMenuObj} menuObj={menuObj} />}
      <div className="w-full">
        <Header setShowNav={setShowNav} />
        {menuObj.dashBoard && <DashBoard />}
        {menuObj.events && <Events />}
        {menuObj.whiteList && <WhiteList />}
      </div>
    </div>
  );
};

export default Main;
