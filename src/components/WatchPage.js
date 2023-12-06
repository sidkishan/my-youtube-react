import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  //console.log(searchParams.get("v"));
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="ml-20 col-span-11 ">
      <iframe
        width="920"
        height="540"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="flex flex-row py-2 w-3/5 justify-between">
        <b>Like</b>
        <b>Share </b>
        <b>Subscribe</b>
      </div>
      <div className="w-3/5 px-1 py-1 bg-gray-200">
        <p>
          <b>Description:</b> Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Accusamus excepturi accusantium ratione dolores voluptatem error
          incidunt tenetur ipsam culpa placeat corrupti quam atque veritatis sed
          quaerat, velit, eum perspiciatis corporis!
        </p>
      </div>
      <CommentsContainer />
    </div>
  );
};
export default WatchPage;
