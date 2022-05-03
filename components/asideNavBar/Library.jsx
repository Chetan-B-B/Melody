import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPieChart,
  faCirclePlay,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Library = () => {
  return (
    <li className="space-y-2 text-gray-700">
      <h2 className="ml-10 my-3 font-medium  text-sm tracking-wider">
        LIBRARY
      </h2>
      <Link href="library/recent">
        <div className=" active:border-r-4 active:rounded-sm active:border-r-sky-500 py-2 px-10  hover:text-sky-500 transition ease-in-out hover:-translate-y-0.2 delay-150">
          <FontAwesomeIcon
            className="mr-2.5 hover:rotate-45  "
            icon={faPieChart}
            size={"lg"}
          />
          Recent
        </div>
      </Link>
      <Link href="library/playlists">
        <div className=" active:border-r-4 active:rounded-sm active:border-r-sky-500 py-2 px-10  hover:text-sky-500 transition ease-in-out hover:-translate-y-0.5 delay-150">
          <FontAwesomeIcon
            icon={faCirclePlay}
            size={"lg"}
            className={"mr-2.5"}
          />
          <span>Playlists</span>
        </div>
      </Link>
      <Link href="library/favorites">
        <div className=" active:border-r-4 active:rounded-sm active:border-r-sky-500 py-2 px-10  hover:text-sky-500 transition ease-in-out hover:-translate-y-0.5 delay-150">
          <FontAwesomeIcon icon={faHeart} className={"mr-2.5"} size={"lg"} />
          <span>Favourites</span>
        </div>
      </Link>
    </li>
  );
};

export default Library;
