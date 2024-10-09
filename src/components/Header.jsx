import React from "react";
import downArrow from "../assets/images/icon-arrow-down.svg";
import upArrow from "../assets/images/icon-arrow-up.svg";
import todo from "../assets/images/icon-todo.svg";
import calender from "../assets/images/icon-calendar.svg";
import planning from "../assets/images/icon-planning.svg";
import reminders from "../assets/images/icon-reminders.svg";
import menuBar from "../assets/images/icon-menu.svg";
import menuClose from "../assets/images/icon-close-menu.svg";
export default function Header() {
  const [showFeatures, setShowFeatures] = React.useState(false);
  const [showCompany, setShowCompany] = React.useState(false);
  const [showMenus, setShowMenus] = React.useState(false);
  const handlefeatureClick = () => {
    setShowFeatures(!showFeatures);
  };
  const handleCompanyClick = () => {
    setShowCompany(!showCompany);
  };
  const showMenuBar = () => {
    setShowMenus(!showMenus);
  };

  return (
    <header className="flex justify-between items-center px-6 lg:px-10 py-5 bg-almostWhite container ">
      <p className="absolute font-bold text-3xl  left-6 top-6 md:hidden">
        <a href="">snap</a>{" "}
      </p>
      <img
        className="absolute right-6 top-6 md:hidden w-6 h-6"
        src={!showMenus ? menuBar : menuClose}
        alt="menu, click to expand the menu"
        onClick={showMenuBar}
      />
      <nav
        className={`absolute w-3/4 md:w-full md:flex flex-col md:flex-row md:justify-between 
        md:static top-16 right-0 bg-almostWhite h-screen md:h-auto pl-6 md:pl-0 
      ${showMenus ? "flex" : "hidden"}`}
      >
        <ul className="  bg-almostWhite flex flex-col md:flex-row md:items-center ">
          <li className="font-bold text-3xl pr-10 hover:text-almostBlack hidden md:block ">
            <a href="">snap</a>{" "}
          </li>
          <li className="text-mediumGray pr-8  hover:text-almostBlack mb-2 md:mb-0">
            <div>
              <a href="#" onClick={handlefeatureClick}>
                Features
              </a>{" "}
              <img
                className="mx-2 object-none inline"
                src={!showFeatures ? downArrow : upArrow}
                alt="down arrow"
              />
            </div>
            <ul
              className={` ${
                !showFeatures ? "hidden" : ""
              } text-mediumGray md:absolute md:top-16 md:bg-white md:shadow-md py-3 px-6 md:-ml-8 rounded-xl`}
            >
              <li className="mb-1 flex items-center cursor-pointer hover:text-almostBlack">
                <img className="object-none mr-2" src={todo} alt="to do svg" />{" "}
                <p>Todo List</p>
              </li>
              <li className="mb-1 flex items-center cursor-pointer hover:text-almostBlack">
                <img
                  className="object-none mr-2"
                  src={calender}
                  alt="to do svg"
                />
                <p>Calender</p>
              </li>
              <li className="mb-1 flex items-center cursor-pointer hover:text-almostBlack">
                <img
                  className="object-none mr-2"
                  src={reminders}
                  alt="to do svg"
                />
                <p>Reminder</p>
              </li>
              <li className="mb-1 flex items-center cursor-pointer hover:text-almostBlack">
                <img
                  className="object-none mr-2"
                  src={planning}
                  alt="to do svg"
                />
                <p>Planning</p>
              </li>
            </ul>
          </li>
          <li className="text-mediumGray pr-8 cursor-pointer hover:text-almostBlack mb-2 md:mb-0">
            <div className="">
              {" "}
              <a href="#" onClick={handleCompanyClick}>
                Company
              </a>
              <img
                className="mx-2 object-none inline"
                src={!showCompany ? downArrow : upArrow}
                alt="down arrow"
              />
            </div>
            <ul
              className={`${
                !showCompany ? "hidden" : ""
              } text-mediumGray md:absolute top-16 md:bg-white md:shadow-md py-3 px-6 md:-mr-2 rounded-xl`}
            >
              <li className="mb-1 hover:text-almostBlack">History</li>
              <li className="mb-1 hover:text-almostBlack">Our Team</li>
              <li className="mb-1 hover:text-almostBlack">Blog</li>
            </ul>
          </li>
          <li className="text-mediumGray pr-10 hover:text-almostBlack mb-2 md:mb-0">
            <a href="#">Careers</a>{" "}
          </li>
          <li className="text-mediumGray pr-8 hover:text-almostBlack mb-2 md:mb-0">
            <a href="#">About</a>{" "}
          </li>
        </ul>
        <div className="text-mediumGray flex flex-col md:flex-row items-center  bg-almostWhite">
          <a className="pr-8 hover:text-almostBlack mb-2 md:mb-0" href="#">
            Login
          </a>
          <a
            className="border border-mediumGray rounded-xl text-center py-2 px-4 hover:text-almostBlack hover:border-almostBlack w-32 md:w-full "
            href="#"
          >
            Register
          </a>
        </div>
      </nav>
    </header>
  );
}
