import React from "react";
import logo from "../../../assets/images/logo.png";
import { FaUserCircle, FaUserPlus } from "react-icons/fa";
const Head: React.FC = () => {
  return (
    <div className="px-16 gap-10 flex justify-items bg-PrimaryColor fixed top-0 left-0 right-0 z-10">
      <div
        style={{
          backgroundImage: `url(${logo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100px",
          height: "100px",
        }}
      ></div>
      <div className="gap-4 flex items-center ">
        <a
          href="https://phimmoichillv.net/list/top-imdb"
          className="text-colorWhite hover:text-hoverColor"
        >
          <h2 className="">PHIM MỚI</h2>
        </a>
        <a
          href="https://phimmoichillv.net/list/top-imdb"
          className="text-colorWhite hover:text-hoverColor"
        >
          <h2>PHIM LẺ</h2>
        </a>
        <a
          href="https://phimmoichillv.net/list/top-imdb"
          className="text-colorWhite hover:text-hoverColor"
        >
          <h2>PHIM BỘ</h2>
        </a>
        <a
          href="https://phimmoichillv.net/list/top-imdb"
          className="text-colorWhite hover:text-hoverColor"
        >
          <h2>THỂ LOẠI</h2>
        </a>
        <a
          href="https://phimmoichillv.net/list/top-imdb"
          className="text-colorWhite hover:text-hoverColor"
        >
          <h2>QUỐC GIA</h2>
        </a>
        <a
          href="https://phimmoichillv.net/list/top-imdb"
          className="text-colorWhite hover:text-hoverColor"
        >
          <h2>NĂM PHÁT HÀNH</h2>
        </a>
        <a
          href="https://phimmoichillv.net/list/top-imdb"
          className="text-colorWhite hover:text-hoverColor"
        >
          <h2>PHIM CHIẾU RẠP</h2>
        </a>
        <a
          href="https://phimmoichillv.net/list/top-imdb"
          className="text-colorWhite hover:text-hoverColor"
        >
          <h2>TRAILER</h2>
        </a>
        <a
          href="https://phimmoichillv.net/list/top-imdb"
          className="text-colorWhite hover:text-hoverColor"
        >
          <h2>TOP PHIM</h2>
        </a>
      </div>
      <div className="flex-1">
        <ul className="text-colorWhite flex items-center w-full h-full ">
          <li className="hover:cursor-pointer hover:text-hoverColor mx-3 flex items-center h-full">
            <FaUserCircle className="mr-2" />
            Đăng nhập
          </li>
          <li className="hover:cursor-pointer hover:text-hoverColor mx-3 flex items-center h-full">
            <FaUserPlus className="mr-2" />
            Đăng ký
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Head;
