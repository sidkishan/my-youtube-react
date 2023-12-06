const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  //console.log(info);
  return (
    <div>
      <img
        src={snippet.thumbnails.medium.url}
        alt="thumbnail"
        className="w-auto rounded-xl"
      />
      <ul>
        <li className="font-bold font py-1">{snippet.title}</li>
        <li>{snippet.channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};
//Higher order component: it takes an existing component and modifies it and then return it.
export const AdVideoCard = ({ info }) => {
  return (
    <div className="relative">
      <h1 className="absolute bottom-0 font-bold italic bg-gray-200 rounded-md px-3 py-0.5">
        Sponsered: Advertisement
      </h1>
      <VideoCard info={info} />
    </div>
  );
};
export default VideoCard;
