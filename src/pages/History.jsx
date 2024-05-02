import React from "react";
import { bannerAbout, imgHistory } from "../constants/images";

const History = () => {
  return (
    <>
      <section className=" w-full h-[400px]">
        <img
          className=" w-full h-full object-cover object-top"
          src={bannerAbout}
          alt="banner profile"
        />
      </section>
      <div className=" w-full max-w-[1024px] mx-auto  py-10 px-5">
        <h1>History</h1>
        <div className=" flex flex-col sm:flex-row justify-center gap-5">
          <div className=" flex-[1.5]">
            <p>
              Namma International Marine Services Co. Ltd. is part of Nesma
              Holding Co. Ltd., a flourishing conglomerate in Saudi Arabia and a
              leader helping to shape the economic future of the Kingdom.
            </p>
            <p>
              Namma International Marine Services Co. Ltd. and its operations
              division, Namma Shipping Lines, was formed in 2005 and began
              operations with one ship carrying cargo and passengers between
              Jeddah and Safaga, Egypt. By providing excellent service on
              superior vessels, Namma Shipping Lines has steadily grown, adding
              ships to the fleet and offering more services both for passengers
              and cargo shipping customers. The current fleet consists of four
              passenger and two cargo vessels serving additional ports and
              including one in Sudan. Moreover, Namma Shipping is the agent for
              an additional 4 vessels. These state of the art, roll-on/roll-off
              vessels carry passengers and cargo to and from Duba, Yanbu and
              Jeddah ports in KSA, Safaga and Suez in Egypt and Sawakin in
              Sudan.
            </p>
          </div>
          <div className=" flex-1">
            <img src={imgHistory} alt="profile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
