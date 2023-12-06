import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./Videocard";
import { Link } from "react-router-dom";
import { AdVideoCard } from "./Videocard";
const VideosContainer = () => {
  const [videos, setVideos] = useState(null);
  async function fetchYoutubeVideos() {
    const resp = await fetch(YOUTUBE_VIDEOS_API);
    const data = await resp.json();
    //console.log(data?.items);
    setVideos(data.items);
  }
  useEffect(() => {
    fetchYoutubeVideos();
  }, []);
  if (videos == null) return;
  return (
    <div className="flex flex-wrap h-screen overflow-y-scroll pb-40">
      {videos[0] && (
        <Link to={"watch?v=" + videos[0].id} className="w-1/4 shadow-md p-2">
          <AdVideoCard info={videos[0]} />
        </Link>
      )}
      {videos.map((video) => (
        <Link
          to={"watch?v=" + video.id}
          key={video.id}
          className="w-1/4 shadow-md p-2"
        >
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};
export default VideosContainer;
