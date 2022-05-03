import Image from "next/image";
import userImage from "../../public/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
const TopNavBar = () => {
  return (
    <div className="flex items-center gap-x-8 h-16  justify-around ">
      <div className="flex justify-start font-medium  text-sm tracking-wider gap-x-10 text-gray-700  ">
        <span className="uppercase ml-0 mr-4 hover:text-sky-500">
          New Releases
        </span>
        <span className="uppercase mr-4 hover:text-sky-500">Shuffle play</span>
        <span className="uppercase mr-4 hover:text-sky-500">Live podcasts</span>
        <span className="uppercase hover:text-sky-500">Upgrade Plan</span>
      </div>
      <div className="flex items-center relative">
        <Image
          src={userImage}
          className="rounded-full clip-path: circle(50% at 50% 50%);"
          width={50}
          height={50}
        ></Image>
        <div className="ml-3  antialiased">
          <span className="text-base font-bold ">Chetu</span>
          <br />
          <span className="font-medium text-sm text-sky-500">Active</span>
          <div className="absolute text-sky-500 -bottom-1 left-9">
            <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
