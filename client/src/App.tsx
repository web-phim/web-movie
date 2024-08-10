import React from "react";
import "./assets/css/tailwind.css";
import "./assets/css/index.css";
import logo from "./assets/images/logo.png";
import thumbnail from "./assets/images/thumbnailMovie.png";
import { MdPersonSearch } from "react-icons/md";
const App: React.FC = () => {
  return (
    <div className=" h-full w-full grid grid-rows-3 gap-0">
      <header className="px-16 gap-10 flex justify-items bg-PrimaryColor fixed top-0 left-0 right-0 ">
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
        <div className="flex-1 flex relative items-center"></div>
      </header>
      <main className="px-16 bg-SecondaryColor mt-24 fixed top-0 left-0 right-0">
        <div className="flex mb-5 mt-4 w-full justify-between">
          {/*Title*/}
          <div className="">
            <h1 className="font-medium text-hoverColor">
              TOP PHIM HAY MỚI NHẤT
            </h1>
          </div>

          <div className="flex gap-6 items-center ">
            {/*Options searching*/}
            <div className="flex gap-4">
              <select
                name="pets"
                id=""
                className="rounded p-1 max-h-8 overflow-y-auto bg-colorSelect
                 text-colorWhite border border-colorWhite focus:ring-1
                  focus:ring-ringSelect"
              >
                <option value="">Thể loại</option>
                <option value="dog">Phim hành động</option>
                <option value="cat">Phim võ thuật</option>
                <option value="hamster">Phim tình cảm</option>
                <option value="parrot">Phim hoạt hình</option>
                <option value="spider">Phim hài hước</option>
                <option value="goldfish">Phim cổ trang</option>
              </select>

              <select
                name="pets"
                id=""
                className="rounded p-1 max-h-8 overflow-y-auto bg-colorSelect text-colorWhite
                border border-colorWhite focus:ring-1
                  focus:ring-ringSelect"
              >
                <option value="">Quốc gia</option>
                <option value="dog">Việt Nam</option>
                <option value="cat">Hàn Quốc</option>
                <option value="hamster">Âu Mỹ</option>
                <option value="parrot">Thái Lan</option>
                <option value="spider">Đài Loan</option>
                <option value="goldfish">Trung Quốc</option>
              </select>

              <select
                name="pets"
                id=""
                className="rounded p-1 max-h-8 overflow-y-auto bg-colorSelect text-colorWhite
                border border-colorWhite focus:ring-1
                  focus:ring-ringSelect"
              >
                <option value="">Năm phát hành</option>
                <option value="dog">2024</option>
                <option value="cat">2023</option>
                <option value="hamster">2022</option>
                <option value="parrot">2021</option>
                <option value="spider">2020</option>
                <option value="goldfish">2019 trở về trước</option>
              </select>

              <select
                name="pets"
                id=""
                className="rounded p-1 max-h-8 overflow-y-auto bg-colorSelect text-colorWhite
                border border-colorWhite focus:ring-1
                  focus:ring-ringSelect"
              >
                <option value="">Phụ đề</option>
                <option value="dog">Thuyết minh</option>
              </select>

              <select
                name="pets"
                id=""
                className="rounded p-1 max-h-8 overflow-y-auto bg-colorSelect text-colorWhite 
                border border-colorWhite focus:ring-1
                  focus:ring-ringSelect"
              >
                <option className="" value="">
                  Phim lẻ
                </option>
                <option value="dog">Phim bộ</option>
              </select>
            </div>

            {/*Searching*/}
            <div className="flex items-center gap-5">
              <div className="flex relative items-center">
                <input
                  className="h-8 pr-8 pl-1.5 bg-SecondaryColor text-colorWhite border-0 border-b-2 focus:border-b-2 w-full
                              focus:outline-none focus:border-hoverColor peer"
                  placeholder="Nhập tên phim, diễn viên"
                ></input>
                <MdPersonSearch className="absolute right-0 text-colorWhite peer-focus:text-hoverColor " />
              </div>
              <div className="bg-hoverColor h-fit rounded-sm text-colorWhite font-normal p-1 transition-opacity hover:opacity-75">
                <button>Tìm kiếm</button>
              </div>
            </div>
          </div>
        </div>

        {/*Content*/}
        <div className="h-fit w-full grid grid-rows-3 gap-4 grid-cols-5">
          <div
            className="relative"
            style={{
              backgroundImage: `url(${thumbnail})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "auto",
              height: "320px",
            }}
          >
            <div className="absolute top-0 bg-custom-gradient text-colorWhite rounded-tr-md rounded-br-md font-semibold p-0.5 mt-1 w-fit">
              <span>65 sắc thái blabla</span>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <h1>ccccc</h1>
      </footer>
    </div>
  );
};

export default App;
