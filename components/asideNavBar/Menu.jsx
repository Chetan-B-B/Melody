import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faSquarePollVertical,
  faFileAlt,
  faMicrophoneLines,
  faFolderMinus,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Menu = () => {
  return (
    <li className="space-y-2 text-gray-700">
      <h2 className="ml-10 mb-2 text-sm  font-medium tracking-wider ">MENU</h2>
      <Link href="">
        <div className=" py-2  px-10 hover:text-sky-500 transition ease-in-out hover:-translate-y-0.5 delay-150  active:border-r-4 active:rounded-sm active:border-r-sky-500">
          <FontAwesomeIcon
            className="mr-2.5 hover:rotate-45  "
            icon={faCompass}
            size={"lg"}
          />
          Discover
        </div>
      </Link>
      <Link href="/menu/trending">
        <div className=" active:border-r-4 active:rounded-sm active:border-r-sky-500 py-2  px-10 hover:text-sky-500 transition ease-in-out hover:-translate-y-0.5 delay-150">
          <FontAwesomeIcon
            icon={faSquarePollVertical}
            size={"lg"}
            className={"mr-2.5"}
          />
          <span>Trending</span>
        </div>
      </Link>
      <Link href="menu/genre">
        <div className=" py-2  active:border-r-4 active:rounded-sm active:border-r-sky-500  px-10 hover:text-sky-500 transition ease-in-out hover:-translate-y-0.5 delay-150">
          <FontAwesomeIcon icon={faFileAlt} className={"mr-2.5"} size={"lg"} />
          <span>Genre</span>
        </div>
      </Link>
      <Link href="menu/album">
        <div
          className=" active:border-r-4 active:rounded-sm active:border-r-sky-500
         py-2  px-10 hover:text-sky-500 transition ease-in-out hover:-translate-y-0.5 delay-150 "
        >
          <FontAwesomeIcon
            className={"mr-2.5"}
            icon={faFolderMinus}
            size={"lg"}
          />

          <span>Album</span>
        </div>
      </Link>
      <Link href="/menu/speaker">
        <div className=" active:border-r-4 active:rounded-sm active:border-r-sky-500 py-2 text-gray-700 px-10 hover:text-sky-500 transition ease-in-out hover:-translate-y-0.5 delay-150">
          <FontAwesomeIcon
            icon={faMicrophoneLines}
            size={"lg"}
            className={"mr-2.5"}
          />
          <span>Speaker</span>
        </div>
      </Link>
    </li>
  );
};

export default Menu;
