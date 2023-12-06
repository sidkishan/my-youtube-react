import Sidebar from "./Sidebar";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { Outlet } from "react-router-dom";
const Body = () => {
  //console.log(YOUTUBE_VIDEOS_API);
  return (
    <div className="grid grid-flow-col">
      <Sidebar />
      <Outlet />
    </div>
  );
};
export default Body;
