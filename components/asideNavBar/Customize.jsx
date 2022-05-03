import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Customize = () => {
  return (
    <li className="space-y-2 text-gray-700">
      <h2 className="ml-10 my-4 font-medium   text-sm tracking-wider">
        CUSTOMIZE
      </h2>
      <Link href="customize/new-playlist">
        <div className=" active:border-r-4 active:rounded-sm active:border-r-sky-500 py-2 px-10 hover:text-sky-500 transition ease-in-out hover:-translate-y-0.5 delay-150">
          <FontAwesomeIcon className="mr-2  " icon={faPlusSquare} size={"lg"} />
          New Playlist
        </div>
      </Link>
      <Link href="toogle">
        <div className=" active:border-r-4 active:rounded-sm active:border-r-sky-500 py-2 px-10 hover:text-sky-500 transition ease-in-out hover:-translate-y-0.5 delay-150">
          <FontAwesomeIcon
            className="mr-2.5 hover:rotate-45  "
            icon={faPlusSquare}
            size={"lg"}
          />
          Toggle
        </div>
      </Link>
    </li>
  );
};

export default Customize;
