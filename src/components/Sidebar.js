import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return;
  return (
    <div className="px-6 pb-40 col-span-1 shadow-lg flex flex-col gap-2 h-screen overflow-y-scroll overflow-x-hidden">
      <div className="py-4 border-b-2">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Shorts</li>
          <li>Subscriptions</li>
        </ul>
      </div>
      <div className="py-4 border-b-2">
        <h1 className="font-bold">You</h1>
        <ul>
          <li>Your Channel</li>
          <li>History</li>
          <li>Your Videos</li>
          <li>Watch later</li>
        </ul>
      </div>
      <div className="py-4 border-b-2">
        <h1 className="font-bold">Subscriptions</h1>
        <ul>
          <li>Amazon</li>
          <li>Google</li>
          <li>Microsoft</li>
          <li>Facebook</li>
          <li>Walmart</li>
        </ul>
      </div>
      <div className="py-4 border-b-2">
        <h1 className="font-bold">Explore</h1>
        <ul>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Movies</li>
          <li>Live</li>
          <li>Gaming</li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
