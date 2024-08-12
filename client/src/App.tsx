import React from "react";
import "./assets/css/tailwind.css";
import "./assets/css/index.css";
import logo from "./assets/images/logo.png";
import Header from "./modules/core/components/Head.tsx";
import Filter from "./modules/core/components/Filter.tsx";
import Card from "./modules/core/components/Card.tsx";
import Pagination from "./modules/core/components/Page.tsx";
const App: React.FC = () => {
  return (
    <div className="w-full grid h-fit">
      <Header />
      <main className="px-16 bg-SecondaryColor mt-24">
        <Filter />
        <Card />
        <div className="bg-SecondaryColor w-fit mt-5 mx-auto mb-5">
          <Pagination totalPage={10} callback={(val) => console.log(val)} />
        </div>
      </main>
      <footer className="w-full grid grid-cols-4 h-fit gap-10 bg-PrimaryColor">
        <div className="h-full">
          <div
            style={{
              backgroundImage: `url(${logo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100px",
              height: "100px",
            }}
          ></div>

          <span className="text-colorWhite">
            Phimmoi - Trang xem phim Online với giao diện mới được bố trí và
            thiết kế thân thiện với người dùng. Nguồn phim được tổng hợp từ các
            website lớn với đa dạng các đầu phim và thể loại vô cùng phong phú.
          </span>
        </div>
        <div>
          <h1 className="text-colorWhite">b2</h1>
        </div>
        <div>
          <h1 className="text-colorWhite">b3</h1>
        </div>
        <div>
          <h1 className="text-colorWhite">b4</h1>
        </div>
      </footer>
    </div>
  );
};

export default App;
