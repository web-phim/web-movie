import React from "react";
import logo from "../../../assets/images/logo.png";
const Footer: React.FC = () => {
  return (
    <footer className="w-full grid grid-cols-4 h-fit gap-20 bg-PrimaryColor px-16 py-12">
      <div className="h-full w-full">
        <div className="flex align items-center justify-between p-5">
          <div
            className=""
            style={{
              backgroundImage: `url(${logo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100px",
              height: "100px",
            }}
          ></div>
          <div className="p-5">
            <h3 className="text-colorWhite font-bold">Xem phim vui vẻ</h3>
          </div>
        </div>

        <span className="text-colorWhite">
          <span className="text-colorFooter font-medium">Phimvuive</span>
          <span
            className="ml-1 text-sm
          "
          >
            - Trang xem phim Online với giao diện mới được bố trí và thiết kế
            thân thiện với người dùng.
          </span>
        </span>
      </div>
      <div className="h-full">
        <h2 className="text-colorWhite mb-3 font-medium">Phim mới</h2>
        <ul className="text-colorWhite">
          <li className="my-1 text-colorFooter">
            <a href="#">Phim Khoa học</a>
          </li>
          <li className="my-1 text-colorFooter">
            <a href="#">Phim kinh dị</a>
          </li>
          <li className="my-1 text-colorFooter">
            <a href="#">Phim chiếu rạp</a>
          </li>
          <li className="my-1 text-colorFooter">
            <a href="#">Phim hình sự</a>
          </li>
          <li className="my-1 text-colorFooter">
            <a href="#">Phim hành động</a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-colorWhite mb-3 font-medium">Phim hay</h2>
        <ul className="text-colorWhite">
          <li className="my-1 text-colorFooter">
            <a href="#">Phim Âu Mỹ</a>
          </li>
          <li className="my-1 text-colorFooter">
            <a href="#">Phim Hàn Quốc</a>
          </li>
          <li className="my-1 text-colorFooter">
            <a href="#">Phim Nhật Bản</a>
          </li>
          <li className="my-1 text-colorFooter">
            <a href="#">Phim Thái Lan</a>
          </li>
          <li className="my-1 text-colorFooter">
            <a href="#">Phim Trung Quốc</a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-colorWhite mb-3 font-medium">Thông tin</h2>
        <ul className="text-colorWhite">
          <li className="my-1 text-colorFooter">
            <a href="#">Giới thiệu</a>
          </li>
          <li className="my-1 text-colorFooter">
            <a href="#">Liên hệ chúng tôi</a>
          </li>
          <li className="my-1 text-colorFooter">
            <a href="#">Điều khoản sử dụng</a>
          </li>
          <li className="my-1 text-colorFooter">
            <a href="#">Chính sách riêng tư</a>
          </li>
          <li className="my-1 text-colorFooter">
            <a href="#">Khiếu nại bản quyền</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
