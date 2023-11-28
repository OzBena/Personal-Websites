import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import PayWise from "../../img/PayWise.jpg";
import SWAPI from "../../img/SWAPI.jpg";
import ArtChat from "../../img/Art Chat.jpg";
import PersonalWeb from "../../img/Personal Website.jpg";

import "swiper/css";
import PortfolioDetails from "./PortfolioDetails";

function Portfolio() {
  return (
    <div className="portfolio" id="Protfolio">
      <span>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
        grabCursor={true}
        className="portfolio-slider"
        loop={"ture"}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: -30,
          },
          // when window width is >= 640px
          600: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide className="s-slide">
          <PortfolioDetails
            appName="PayWise"
            appImg={PayWise}
            appDescription="The system serves as a digital wallet for vouchers and purchase refunds, allows for easy and user-friendly management. The system also includes a notification and navigation system for relevant stores as well as a personal and private profile for each user."
            appLink="https://github.com/OzBena/PayWise"
          />
        </SwiperSlide>
        <SwiperSlide className="s-slide">
          <PortfolioDetails
            appName="SWAPI"
            appImg={SWAPI}
            appDescription="This React application fetches movies from the Star Wars API (SWAPI) and lets users mark their favorite movies."
            appLink="https://github.com/OzBena/SWFavourites"
          />
        </SwiperSlide>
        <SwiperSlide className="s-slide">
          <PortfolioDetails
            appName="Art Chat"
            appImg={ArtChat}
            appDescription="test"
            appLink="https://github.com/OzBena/ArtGalleryChat"
          />
        </SwiperSlide>
        <SwiperSlide className="s-slide">
          <PortfolioDetails
            appName="Personal Website"
            appImg={PersonalWeb}
            appDescription="test"
            appLink="https://github.com/OzBena/Personal-Websites"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Portfolio;
