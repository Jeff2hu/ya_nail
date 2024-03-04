import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ya_img from "../assets/ya.png";

function NavBar() {
  const navigate = useNavigate();
  const [visibleMenu, setVisibleMenu] = useState(false);

  const toggleMenu = () => {
    setVisibleMenu((prev) => !prev);
  };

  const navigateTo = (path: string) => {
    setVisibleMenu(false);
    navigate(path);
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-none relative">
        <button
          onClick={toggleMenu}
          className="btn btn-square btn-ghost dropdown dropdown-end"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        {visibleMenu && (
          <ul className="menu bg-base-200 w-32 rounded-box absolute top-14 z-10">
            <li>
              <a
                className="mx-[auto] font-bold text-xl"
                onClick={() => navigateTo("/hand")}
              >
                手
              </a>
            </li>
            <li>
              <a
                className="mx-[auto] font-bold text-xl"
                onClick={() => navigateTo("/foot")}
              >
                腳
              </a>
            </li>
          </ul>
        )}
      </div>
      <div className="flex-1">
        <button
          className="btn btn-ghost text-xl"
          onClick={() => navigateTo("/")}
        >
          YA_NAIL
        </button>
      </div>
      <div className="flex-none">
        <div className="btn btn-ghost btn-circle avatar">
          <div className="h-[40px] rounded-full">
            <img alt="YA_IMG" src={ya_img} onClick={() => navigateTo("/")} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
