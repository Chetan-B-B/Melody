import Image from "next/image";

// import logo from "../../public/sound-waves.png";
import Menu from "./Menu";
import logo2 from "../../public/logo2.gif";
import Library from "./Library";
import Customize from "./Customize";

const AsideNavBar = () => {
  return (
    <div className="h-screen w-48 bg-slate-50">
      <div className={"text-center  flex items-center justify-center  p-5 "}>
        <Image src={logo2} alt="logo" width={30} height={30}></Image>

        <strong className="font-serif ml-2.5  text-2xl font-bold ">
          Melody
        </strong>
      </div>

      <Menu />
      <Library />
      <Customize />
    </div>
  );
};

export default AsideNavBar;
