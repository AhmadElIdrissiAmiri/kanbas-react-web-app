import { Link, useLocation } from "react-router-dom";
import "./navigation.css";
import neuImage from "./neu.png";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { BsFillInboxesFill } from "react-icons/bs";
import {AiFillClockCircle} from "react-icons/ai";
import {AiOutlineDesktop} from "react-icons/ai";
import {BsBoxArrowInRight} from "react-icons/bs";
import {BiSolidHelpCircle} from "react-icons/bi";
import { IoMdLogIn } from "react-icons/io";

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help", "signin","signup"];
  const linkToIconMap = {
    Account: <BiUserCircle />,
    Dashboard: <RiDashboard3Fill />,
    Courses: <FaBook />,
    Calendar: <BsFillCalendar2WeekFill />,
    Inbox: <BsFillInboxesFill />,
    History: <AiFillClockCircle />,
    Studio: <AiOutlineDesktop />,
    Commons: <BsBoxArrowInRight />,
    Help: <BiSolidHelpCircle />,
    signin: <IoMdLogIn />,
    signup: <IoMdLogIn />,
  };

  const { pathname } = useLocation();

  return (
    <div className="list-group2">
      <img src={neuImage} alt="neu.png" className="neuImage" />
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          <span className="iconstyling">{linkToIconMap[link]}</span>
          {link}
        </Link>
      ))}
    </div>
  );
}

export default KanbasNavigation;
