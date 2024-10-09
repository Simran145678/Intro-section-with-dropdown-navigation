import React from "react";
import heroDesktop from "../assets/images/image-hero-desktop.png";
import heroMobile from "../assets/images/image-hero-mobile.png";
import audiophile from "../assets/images/client-audiophile.svg";
import databiz from "../assets/images/client-databiz.svg";
import maker from "../assets/images/client-maker.svg";
import meet from "../assets/images/client-meet.svg";

export default function HeroBanner() {
  return (
    <>
      <section className="container bg-almostWhite w-screen flex flex-col-reverse p-6 md:p-10 lg:flex-row">
        <div className="w-full  flex flex-col items-center justify-start ml-0 lg:w-1/2 lg:items-start lg:ml-16">
          <h1 className="font-bold text-3xl md:text-6xl mb-10 mt-10">
            Make <span className="lg:block">remote Work</span>
          </h1>
          <p className="text-mediumGray text-center leading-normal mb-10 w-full md:w-3/4 lg:text-left">
            Get you team in sync, no matter your location. Streamline processes,
            create team rituals and watch productivity soar.
          </p>
          <div className="block">
            <button className="text-white bg-almostBlack py-3 px-6 inline-block w-auto rounded-xl hover:bg-almostWhite border border-almostBlack hover:text-almostBlack">
              Learn more
            </button>
          </div>
          <div className="flex w-full justify-between lg:pr-24 mt-12 lg:mt-16">
            <img
              className="object-contain w-16 md:w-24 mx-2 h-5 lg:h-8"
              src={audiophile}
              alt="client audiophile"
            />
            <img
              className="object-contain w-16 md:w-24 mx-2 h-5 lg:h-8"
              src={databiz}
              alt="client databiz"
            />
            <img
              className="object-contain w-16 md:w-24 mx-2 h-5 lg:h-8"
              src={maker}
              alt="client maker"
            />
            <img
              className="object-contain w-16 md:w-24 mx-2 h-5 lg:h-8"
              src={meet}
              alt="client meet"
            />
          </div>
        </div>
        <div className="w-full  h-auto flex justify-center lg:w-1/2">
          <img
            className="object-cover h-3/5 hidden lg:block"
            src={heroDesktop}
            alt="hero banner"
          />
          <img
            className="object-cover h-3/5 lg:hidden"
            src={heroMobile}
            alt="hero banner"
          />
        </div>
      </section>
    </>
  );
}
