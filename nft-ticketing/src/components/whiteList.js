import React from "react";
import Pagination from "./pagination";

const WhiteList = () => {
  return (
    <div className="bg-grey-200 bg-cover h-screen px-12.5 pt-14.5">
      <h1 className="text-black-50 font-OpenSansSemiBold text-ft22">
        Whitelist
      </h1>
      <div className="mt-45px flex justify-between">
        <div className="flex items-center justify-between bg-white border border-white rounded-lsm xs:w-auto xs:mr-5 w-75 h-45px px-5">
          <input type="text" placeholder="Search" className=" outline-none" />
          <img
            src="/images/searchIcon.svg"
            alt="searchIcon"
            className="w-4 h-17px"
          />
        </div>
        <div className="bg-blue-100 flex justify-center items-center xs:w-auto xs:h-auto xs:rounded-xsm xs:p-1 w-37.5 h-12.5 rounded-lsm text-white font-OpenSansSemiBold text-ft14 gap-2.5">
          <h1>+</h1>
          <button type="submit">Add User</button>
        </div>
      </div>
      <div className="bg-white rounded-sm drop-shadow-loginform max-w-1600 min-w-300 py-15px mt-7.5">
        <table className="table min-w-full whitespace-nowrap justify-center ">
          <thead className="border-b-2 border-grey-50">
            <th className="py-5 pl-7.5">
              <div className="flex items-baseline font-OpenSansSemiBold text-black-50 font-semibold">
                Name
                <img
                  src="/images/shortIcon.png"
                  alt="shortIcon"
                  className="w-9px h-13px ml-2.5"
                />
              </div>
            </th>
            <th className="py-5">
              <div className="flex items-baseline font-OpenSansSemiBold text-black-50 font-semibold">
                Email Address
                <img
                  src="/images/shortIcon.png"
                  alt="shortIcon"
                  className="w-9px h-13px ml-2.5"
                />
              </div>
            </th>
            <th className="py-5">
              <div className="flex items-baseline font-OpenSansSemiBold text-black-50 font-semibold">
                Mobile Number
                <img
                  src="/images/shortIcon.png"
                  alt="shortIcon"
                  className="w-9px h-13px ml-2.5"
                />
              </div>
            </th>
            <th className="py-5">
              <div className="flex items-baseline font-OpenSansSemiBold text-black-50 font-semibold">
                Features
                <img
                  src="/images/shortIcon.png"
                  alt="shortIcon"
                  className="w-9px h-13px ml-2.5"
                />
              </div>
            </th>
            <th className="py-5">
              <div className="flex items-baseline font-OpenSansSemiBold text-black-50 font-semibold">
                Action
                <img
                  src="/images/shortIcon.png"
                  alt="shortIcon"
                  className="w-9px h-13px ml-2.5"
                />
              </div>
            </th>
          </thead>
          <tbody>
            <tr className="border-b-2 border-grey-50">
              <td className="py-5 pl-7.5 font-OpenSansRegular text-black-50 text-ft14">
                John Doe
              </td>
              <td className="py-5 font-OpenSansRegular text-black-50 text-ft14">
                Johndoe@gmail.com
              </td>
              <td className="py-5 font-OpenSansRegular text-black-50 text-ft14">
                09958693963
              </td>
              <td className="py-5 font-OpenSansRegular text-black-50 text-ft14">
                Communite.HomePage
              </td>
              <td className="py-5">
                <img src="/images/action.png" alt="actionLogo" />
              </td>
            </tr>
            <tr className="border-b-2 border-grey-50">
              <td className="py-5 pl-7.5 font-OpenSansRegular text-black-50 text-ft14">
                Juan Dela Cruz
              </td>
              <td className="py-5 font-OpenSansRegular text-black-50 text-ft14">
                jsdelacruz@gmail.com
              </td>
              <td className="py-5 font-OpenSansRegular text-black-50 text-ft14">
                09958693963
              </td>
              <td className="py-5 font-OpenSansRegular text-black-50 text-ft14">
                Communite.HomePage
              </td>
              <td className="py-5 ">
                <img src="/images/action.png" alt="actionLogo" />
              </td>
            </tr>
            <tr className="border-b-2 border-grey-50">
              <td className="py-5 pl-7.5 font-OpenSansRegular text-black-50 text-ft14">
                Maine Jaspeih
              </td>
              <td className="py-5 font-OpenSansRegular text-black-50 text-ft14">
                Mainejaspeih@gmail.com
              </td>
              <td className="py-5 font-OpenSansRegular text-black-50 text-ft14">
                09958693963
              </td>
              <td className="py-5 font-OpenSansRegular text-black-50 text-ft14">
                Communite.HomePage
              </td>
              <td>
                <img src="/images/action.png" alt="actionLogo" />
              </td>
            </tr>
            <tr className="border-b-2 border-grey-50">
              <td className="py-5 pl-7.5 font-OpenSansRegular text-black-50 text-ft14">
                Melanie moore
              </td>
              <td className="py-5 font-OpenSansRegular text-black-50 text-ft14">
                Melaniemoore@gmail.com
              </td>
              <td className="py-5 font-OpenSansRegular text-black-50 text-ft14">
                09958693963
              </td>
              <td className="py-5 font-OpenSansRegular text-black-50 text-ft14">
                Communite.HomePage
              </td>
              <td className="py-5">
                <img src="/images/action.png" alt="actionLogo" />
              </td>
            </tr>
            <tr className="border-b-2 border-grey-50">
              <td className="py-5 pl-7.5 font-OpenSansRegular text-black-50 text-ft14">
                Olivia Wharton
              </td>
              <td className="py-5 font-OpenSansRegular text-black-50 text-ft14">
                Oliviawharton@gmail.com
              </td>
              <td className="py-5 font-OpenSansRegular text-black-50 text-ft14">
                09958693963
              </td>
              <td className="py-5 font-OpenSansRegular text-black-50 text-ft14">
                Communite.HomePage
              </td>
              <td className="py-5">
                <img src="/images/action.png" alt="actionLogo" />
              </td>
            </tr>
            <tr>
              <td className="py-5 pl-7.5 font-OpenSansRegular text-black-50 text-ft14">
                John Doe
              </td>
              <td className="py-5 font-OpenSansRegular text-black-50 text-ft14">
                Johndoe@gmail.com
              </td>
              <td className="py-5 font-OpenSansRegular text-black-50 text-ft14">
                09958693963
              </td>
              <td className="py-5 font-OpenSansRegular text-black-50 text-ft14">
                Communite.HomePage
              </td>
              <td className="py-5 ">
                <img src="/images/action.png" alt="actionLogo" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
};

export default WhiteList;
