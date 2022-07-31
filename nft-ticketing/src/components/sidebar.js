import React from "react";

const Sidebar = (props) => {
  return (
    <div>
      <div className="w-62.5 h-full flex flex-col items-center bg-grey-200 drop-shadow-loginform bg-cover min-h-screen xs:hidden sm:hidden">
        <div className="mt-23px">
          <img
            src="/images/loginpageLogo.svg"
            alt="nftLogo"
            className="w-30 h-6"
          />
        </div>
        <div
          className={`${
            props.menuObj.dashBoard
              ? "bg-grey-250 border-l-4 border-blue-100"
              : ""
          } mt-13.5 flex self-start items-center w-62.5 h-12.5 cursor-pointer`}
          onClick={() => {
            props.setMenuObj({
              dashBoard: true,
            });
          }}
        >
          <img
            src="/images/graph.svg"
            alt="graph"
            className=" h-4 w-4 ml-25px"
          />
          <h1
            className={`${
              props.menuObj.dashBoard
                ? "text-black-50 font-OpenSansSemiBold"
                : "text-black-100 font-OpenSansRegular"
            } ml-5 text-ft14`}
          >
            Dashboard
          </h1>
        </div>
        <div
          className={`${
            props.menuObj.events ? "bg-grey-250 border-l-4 border-blue-100" : ""
          } mt-2.5 flex self-start items-center w-62.5 h-12.5 cursor-pointer`}
          onClick={() => {
            props.setMenuObj({
              events: true,
            });
          }}
        >
          <img
            src="/images/calendar.png"
            alt="graph"
            className=" h-19px w-19px ml-25px text-blue-100"
          />
          <h1
            className={`${
              props.menuObj.events
                ? "text-black-50 font-OpenSansSemiBold"
                : "text-black-100 font-OpenSansRegular"
            } ml-5 text-ft14`}
          >
            Events
          </h1>
        </div>
        <div
          className={`${
            props.menuObj.whiteList
              ? "bg-grey-250 border-l-4 border-blue-100"
              : ""
          } mt-2.5 flex self-start items-center w-62.5 h-12.5 cursor-pointer`}
          onClick={() => {
            props.setMenuObj({
              whiteList: true,
            });
          }}
        >
          <img
            src="/images/persons.png"
            alt="graph"
            className=" h-4 w-4 ml-25px"
          />
          <h1
            className={`${
              props.menuObj.whiteList
                ? "text-black-50 font-OpenSansSemiBold"
                : "text-black-100 font-OpenSansRegular"
            } ml-5 text-ft14`}
          >
            Whitelist
          </h1>
        </div>
      </div>
      <div className="items-center bg-grey-200 drop-shadow-loginform bg-cover min-h-screen w-8 hidden xs:flex xs:flex-col sm:flex sm:flex-col sm:w-12 xs:gap-8 sm:gap-10 pt-20">
        <img
          src="/images/graph.svg"
          alt="graph"
          className={`${
            props.menuObj.dashBoard ? " border-b-2 pb-1 border-blue-100" : ""
          }h-4 w-4`}
          onClick={() => {
            props.setMenuObj({
              dashBoard: true,
            });
          }}
        />
        <img
          src="/images/calendar.png"
          alt="graph"
          className={`${
            props.menuObj.events ? " border-b-2 pb-1 border-blue-100" : ""
          }h-4 w-4`}
          onClick={() => {
            props.setMenuObj({
              events: true,
            });
          }}
        />
        <img
          src="/images/persons.png"
          alt="graph"
          className={`${
            props.menuObj.whiteList ? " border-b-2 pb-1 border-blue-100" : ""
          }h-4 w-4`}
          onClick={() => {
            props.setMenuObj({
              whiteList: true,
            });
          }}
        />
      </div>
    </div>
  );
};

export default Sidebar;
