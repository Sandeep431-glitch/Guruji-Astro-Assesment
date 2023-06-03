import React from "react";
import style from "../App.module.css";
import astro1 from "../Assets/astrologers/1.jpeg"
import astro2 from "../Assets/astrologers/2.jpeg"
import astro3 from "../Assets/astrologers/3.jpeg"
import astro4 from "../Assets/astrologers/4.jpeg"
import astro5 from "../Assets/astrologers/5.jpeg"
import astro6 from "../Assets/astrologers/6.jpeg"
import astro7 from "../Assets/astrologers/7.jpeg"
import astro8 from "../Assets/astrologers/8.jpeg"
import astro9 from "../Assets/astrologers/9.jpeg"

const slide = [astro1, astro2, astro3, astro4, astro5, astro6, astro7, astro8, astro9];

const AstroCard = ({ children: slide }) => {
  return (
    <>
      <div className={style.cardBox}>
        {slide.map((s, i) => (
          <div key={i}>
            <div
              className={style.singleCard}
              style={{ backgroundImage: `url(${s.props.src})` }}
            >
              <div className={style.expAndOnlineIndicator}>
                <span>10+ Years</span>
                <div className={style.online}>
                  <div className={style.dot}></div>
                  <p>Online</p>
                </div>
              </div>
              <div className={style.priceBox}>
                <p>price</p>
                <span>
                  <i className="fa-solid fa-indian-rupee-sign">10</i>/min
                </span>
              </div>
              <div className={style.astroDetails}>
                <div className={style.rating}>
                  <i className="fa-solid fa-star"></i>4.5
                </div>
                <h3>Astrologer Ramraj</h3>
                <p>Specialties</p>
                <h5>Love, Business, Life </h5>
                <p>Skills</p>
                <h5>Vedic Astrology, Kundali, </h5>
              </div>
              <div className={style.liveBox}>
                <i className="fa-regular fa-circle-play">
                  <div className={style.liveLetter}>Live</div>
                </i>
              </div>
              <div className={style.downCompo}>
                <div className={style.chat}>
                  <i className="fa-brands fa-rocketchat"></i>
                  Chat
                </div>
                <div className={style.call}>
                  <i className="fa-solid fa-phone"></i>
                  Call
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const Astrologer = () => {
 
    return (
      <div className="w-full ">
        <AstroCard >
          {slide.map((s, i) => (
            <img src={s} alt="astologer" key={i} />
          ))}
        </AstroCard>
      </div>
    );
  };
  
  export default Astrologer;
