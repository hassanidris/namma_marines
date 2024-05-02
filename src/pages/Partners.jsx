import React from "react";
import { bannerAbout, imgPartners } from "../constants/images";

const Partners = () => {
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
        <h1>Partners</h1>
        <div className=" flex flex-col sm:flex-row justify-center gap-5">
          <div className=" flex-[2]">
            <p>
              We know that a customer’s journey doesn’t start and end at a port.
              So Namma International Marine Services has forged strategic
              partnerships to meet other vital needs our customers have for
              accommodation, Hajj and Umrah services and overland transportation
              to name a few. One of the most important trade agreements Namma
              International Marine Services has is with Saudi Arabian Public
              Transport Company or SAPTCO, to transport passengers round-trip
              between various destinations within the Kingdom, other countries
              in the GCC, Egypt and Sudan. Our partnership with Namma Tours &
              Marine Division provides technical services and crew management.
            </p>
            <p>Namma Shipping Lines’ other trade partners are:</p>
            <ul className=" list-disc list-inside pl-5 text-base font-light italic text-primary">
              <li className="list-item">Namma Tours</li>
              <li className="list-item">Abu-Sarhat - for transportation</li>
              <li>Mawaddah International Group for Hotel & Umrah Services</li>
              <li>Askalah Travel Agency</li>
              <li>Saudi Public Transport Co. [Saptco]</li>
              <li>Alwafer Co.</li>
            </ul>
            <p className="pt-6">
              These trade partners along with our state of the art ships,
              automated processing, excellent customer service and professional
              staff help to make Namma Shipping Lines the region’s industry
              leader in terms of ensuring the safety, reliability and comfort of
              each customer’s travel experience and cargo shipping needs.
            </p>
          </div>
          <div className=" flex-1">
            <img src={imgPartners} alt="partners" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
