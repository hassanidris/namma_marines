import React from "react";
import { bannerServices, iconCargo, iconPassenger } from "../constants/images";

const Services = () => {
  return (
    <>
      <section className=" w-full h-[400px]">
        <img
          className=" w-full h-full object-cover object-top"
          src={bannerServices}
          alt="banner profile"
        />
      </section>
      <div className=" w-full max-w-[1024px] mx-auto  py-10 px-5">
        <h1>Services</h1>
        <div className=" flex flex-col sm:flex-row justify-center gap-5">
          <div className=" flex-[2]">
            <article>
              <h2>Passengers</h2>
              <p>
                Namma International Marine Services offers ferry service on the
                Red Sea between destinations in Saudi Arabia, Egypt and Sudan.
                The ports currently served are: Duba, Yanbu and Jeddah in the
                Kingdom of Saudi Arabia, Safaga and Suez in Egypt and Sawakin in
                Sudan.
              </p>
              <p>
                In addition, our agents can assist you with other travel needs
                you may have such as hotel accommodation, transportation
                overland, visas.
              </p>
            </article>
            <article>
              <h2>Cargo</h2>
              <p>
                Namma International Marine Services meets the freight shipping
                needs of our industrial and corporate clients. With our easy
                roll/on roll/off service, our clients can ship vehicles
                including cars, trucks in addition to general cargo, break bulk
                cargo and refrigerated trailers. Contact us with your
                specifications.
              </p>
            </article>
            <article>
              <h2>Shipping Agency</h2>
              <p>
                Namma International Marine Services is ready to meet your agency
                needs.
              </p>
            </article>
          </div>
          <div className=" flex-1 flex flex-row sm:flex-col items-center justify-center gap-2">
            <div className=" p-10 bg-primary rounded-full h-[210px] w-[210px] flex justify-center items-center border-[15px] border-accent hover:border-primary hover:bg-accent">
              <img
                className=" w-full h-full object-contain"
                src={iconPassenger}
                alt="profile"
              />
            </div>
            <div className=" p-10 bg-primary rounded-full h-[210px] w-[210px] flex justify-center items-center border-[15px] border-accent hover:border-primary hover:bg-accent">
              <img
                className=" w-full h-full object-contain"
                src={iconCargo}
                alt="profile"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
