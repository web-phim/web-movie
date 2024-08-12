import React from "react";
import { MdPersonSearch } from "react-icons/md";
const Filter: React.FC = () => {
  return (
    <div className="flex mb-5 mt-4 w-full justify-between">
      {/*Title*/}
      <div className="">
        <h2 className="font-medium text-hoverColor">TOP PHIM HAY MỚI NHẤT</h2>
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
  );
};

export default Filter;
