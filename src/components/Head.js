import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SUGGESTIONS_API } from "../utils/constants";
import { cacheSearchResults } from "../utils/searchSlice";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isInputActive, setIsInputActive] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const searchSlice = useSelector((store) => store.search);
  useEffect(() => {
    //with every change in search query (with every keystroke) we will call suggestions api
    const timer = setTimeout(() => {
      //API CALL
      if (searchSlice[searchQuery]) {
        setSearchSuggestions(searchSlice[searchQuery]);
      } else {
        getSuggestionsData();
      }

      //console.log("Api call:", searchQuery);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSuggestionsData = async () => {
    const resp = await fetch(YOUTUBE_SUGGESTIONS_API + searchQuery);
    const data = await resp.json();
    setSearchSuggestions(data[1]);
    console.log(searchQuery + ": ", data);
    dispatch(cacheSearchResults({ [searchQuery]: data[1] }));
  };

  /**
   * how the api call is happening in useEffect internally
   ************************************************************
   *  key stroke 1: i
        re-rendering of head component will happen
        useEffect will be called
        setTimeout will be called and API call wala callback will be registered for 2 seconds
      key stroke 2: p (ip)
        destroy the loaded component or unmount the current loaded component => cleanup will be done //doubt
        re-rendering will happen
        now again useEffect will be called
        setTimeout will be called and API call wala callback will be registered for 2 seconds

   */

  return (
    <div className="grid grid-flow-col px-1 my-2  relative">
      <div className="flex mx-4 gap-2 col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-[35px] mt-2 cursor-pointer"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="menu"
        />

        <img
          className="h-[54px]"
          src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
          alt="logo"
        />
      </div>
      <div className="col-span-10 ">
        <input
          type="text"
          placeholder="Search"
          className="w-2/5 mt-1 ml-44 py-1.5 px-3 rounded-l-full border-2 outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => {
            setIsInputActive(true);
          }}
          onBlur={() => {
            setIsInputActive(false);
          }}
        />
        <button className="py-1.5 px-3 border-2 rounded-r-full">🔍</button>
      </div>
      <img
        className="h-12 p-2 col-span-1"
        src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
        alt="profile-icon"
      />
      {isInputActive && (
        <div className="py-4 absolute w-[28.5rem] top-14 left-[28rem] bg-white rounded-xl z-10 border border-gray-200">
          <ul>
            {searchSuggestions.length !== 0 &&
              searchSuggestions.map((name, index) => (
                <li className="hover:bg-gray-100 px-4 py-1" key={index}>
                  {name}
                </li>
              ))}
            {searchSuggestions.length === 0 && (
              <>
                <li className="hover:bg-gray-100 px-4 py-1">
                  recent search history
                </li>
                <li className="hover:bg-gray-100 px-4 py-1">
                  recent search history
                </li>
                <li className="hover:bg-gray-100 px-4 py-1">
                  recent search history
                </li>
                <li className="hover:bg-gray-100 px-4 py-1">
                  recent search history
                </li>
                <li className="hover:bg-gray-100 px-4 py-1">
                  recent search history
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Head;
