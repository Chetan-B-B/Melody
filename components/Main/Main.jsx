import Carasoul from "../Carasoul/Carasoul";
import RecentlyPlayed from "./RecentlyPlayed";
const Main = () => {
  return (
    <div className="col-start-2 mt-2">
      <hr />
      <Carasoul />
      <RecentlyPlayed />
    </div>
  );
};

export default Main;
