import React from "react";
interface CardProps {
  linkIMG: string;
  label: string;
  movieName: string;
}
const Card: React.FC<CardProps> = ({ linkIMG, label, movieName }) => {
  return (
    <div>
      <a href="https://tailwindcss.com/docs/animation#using-custom-values">
        <div className="group relative overflow-hidden w-full h-full">
          <div
            className="bg-cover bg-center bg-no-repeat w-full h-full transition-transform duration-300 group-hover:scale-110"
            style={{
              backgroundImage: `url(${linkIMG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "auto",
              height: "300px",
            }}
          >
            <div className="h-full w-full flex items-center justify-center absolute opacity-0 group-hover:opacity-100 group-hover:animate-play-scale-in">
              <div
                className="w-16 h-16 bg-custom-playbtn-gradient rounded-full relative
                  flex items-center justify-center"
              >
                <div className="play-icon"></div>
              </div>
            </div>
          </div>
          <div
            className="absolute top-0 bg-custom-gradient text-colorWhite rounded-tl-sm rounded-bl-sm 
            rounded-tr-sm rounded-br-sm font-semibold p-1 mt-1 w-fit"
          >
            <span>{label}</span>
          </div>

          <div className="absolute left-0 bottom-0 text-colorWhite bg-blOpacity w-full h-10 py-2 pl-4 font-medium">
            <span>{movieName}</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
