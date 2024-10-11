import React from "react";
import "./assets/css/tailwind.css";
import "./assets/css/index.css";
import Header from "./modules/core/components/Head.tsx";
import Filter from "./modules/core/components/Filter.tsx";
import Card from "./modules/core/components/Card.tsx";
import Foot from "./modules/core/components/Foot.tsx";
import Pagination from "./modules/core/components/Page.tsx";
import SideBar from "./modules/core/components/SideBar.tsx";
// Define the array with fake data
const cardData = [
  {
    linkIMG:
      "https://th.bing.com/th/id/OIP.omn_uHxIZfQIJmHv20q83QHaFj?rs=1&pid=ImgDetMain",
    label: "Action",
    movieName: "Movie One",
  },
  {
    linkIMG:
      "https://th.bing.com/th/id/OIF.LssRVsAorojymOgNbwuPHg?rs=1&pid=ImgDetMain",
    label: "Drama",
    movieName: "Movie Two",
  },
  {
    linkIMG:
      "https://th.bing.com/th/id/OIP.AkqQU6wiR_50f-Qd-jYA7wAAAA?rs=1&pid=ImgDetMain",
    label: "Comedy",
    movieName: "Movie Three",
  },
  {
    linkIMG:
      "https://th.bing.com/th/id/OIP.vh6MQNnQ99l3NH-47mWt5AHaLH?w=123&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    label: "Horror",
    movieName: "Movie Four",
  },
  {
    linkIMG:
      "https://th.bing.com/th/id/OIF.trO6DvBmEkXyaEqk4C2msg?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    label: "Sci-Fi",
    movieName: "Movie Five",
  },
  {
    linkIMG:
      "https://th.bing.com/th?id=OIF.Vv8jJmaSAyVEy%2bOelhA9fw&w=117&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    label: "Romance",
    movieName: "Movie Six",
  },
  {
    linkIMG:
      "https://th.bing.com/th?id=OIF.Bku6mKrP7Wv0zyG%2bShOVfA&w=134&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    label: "Thriller",
    movieName: "Movie Seven",
  },
  {
    linkIMG:
      "https://th.bing.com/th?id=OIF.vea0TsPSGv7fLw3e%2bB0GLA&w=191&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    label: "Adventure",
    movieName: "Movie Eight",
  },
  {
    linkIMG:
      "https://ts3.mm.bing.net/th?id=OIP.8pdm_wtipim9i9JvgFenGQHaEK&pid=15.1",
    label: "Fantasy",
    movieName: "Movie Nine",
  },
  {
    linkIMG:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/08/MCU-2023-Phase-5-Slate-SR.jpg",
    label: "Documentary",
    movieName: "Movie Ten",
  },
];

const App: React.FC = () => {
  return (
    <div className="w-full grid h-fit">
      <Header />
      <main className="px-16 bg-SecondaryColor mt-24">
        <Filter />

        <div className="flex">
          <div className="h-fit w-full grid gap-4 grid-cols-4 flex-1 pr-5">
            {cardData.map((data, index) => (
              <Card
                key={index}
                linkIMG={data.linkIMG}
                label={data.label}
                movieName={data.movieName}
              />
            ))}
          </div>

          <div className="h-fit w-fit">
            <SideBar />
          </div>
        </div>

        <div className="bg-SecondaryColor w-fit mt-5 mx-auto mb-5">
          <Pagination totalPage={10} callback={(val) => console.log(val)} />
        </div>
      </main>
      <Foot />
    </div>
  );
};

export default App;
