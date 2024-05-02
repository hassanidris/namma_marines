import React from "react";
import {
  bannerFleets,
  fleetAlnawa,
  fleetAmanah,
  fleetAziz,
} from "../constants/images";

const Fleets = () => {
  return (
    <>
      <section className=" w-full h-[400px]">
        <img
          className=" w-full h-full object-cover object-top"
          src={bannerFleets}
          alt="banner profile"
        />
      </section>
      <div className=" w-full max-w-[1024px] mx-auto  py-10 px-5">
        <div>
          <h1>Fleets</h1>
          <p>
            Safety, dependability and comfort drive our services at Namma
            Shipping Lines and ensure that our customers are satisfied because
            their needs are met. We believe that a strong fleet with comfortable
            and affordable accommodations along with the services our customers
            need, is crucial to ensuring a safe, pleasant journey. Below are
            details about the fleet, both passenger and cargo vessels.
          </p>
        </div>
        <div className=" w-full max-w-[920px] mx-auto  py-10 px-5">
          <article className="fleetDetails flex justify-between border-b-[1px] border-accent py-10">
            <div>
              <h2>M/V AZIZ EXPRESS :</h2>
              <p>
                <span>
                  <strong>Vessel Present Name:</strong> M/V AZIZ EXPRESS
                </span>
                <span>
                  <strong>Operator:</strong> Namma International Marine Services
                </span>
                <span>
                  <strong>Vessel Type:</strong> Passenger with roll-on/roll-off
                  vehicle service
                </span>
                <span>
                  <strong>Authorized Number of passengers:</strong> 2000
                  passengers + 98 Crew
                </span>
              </p>
              <p className=" text-sm">Aziz Express Ferry Route:</p>
              <p className=" text-sm">
                <strong>GRT =</strong> 22,874 MT
              </p>
            </div>
            <div className=" rounded-full overflow-hidden size-56 border-[12px] border-accent hover:border-primary hover:bg-accent">
              <img
                className=" w-full h-full object-cover"
                src={fleetAziz}
                alt="Fleet Aziz"
              />
            </div>
          </article>
          <article className="fleetDetails flex justify-between border-b-[1px] border-accent py-10">
            <div>
              <h2>F/B Amanah:</h2>
              <p>
                <span>
                  <strong>Vessel Present Name:</strong> M/V Amanah
                </span>
                <span>
                  <strong>Operator:</strong> Namma International Marine Services
                </span>
                <span>
                  <strong>Vessel Type:</strong> Passenger with roll-on/roll-off
                  vehicle service
                </span>
                <span>
                  <strong>Authorized Number of passengers:</strong> 2000
                  passengers + 98 Crew
                </span>
              </p>
              <p className=" text-sm">Amanah Ferry Route:</p>
              <p className=" text-sm">
                <strong>GRT =</strong> 19,009 MT
              </p>
            </div>
            <div className=" rounded-full overflow-hidden size-56 border-[12px] border-accent hover:border-primary hover:bg-accent">
              <img
                className=" w-full h-full object-cover"
                src={fleetAmanah}
                alt="Fleet Amanah"
              />
            </div>
          </article>
          <article className="fleetDetails flex justify-between  py-10">
            <div>
              <h2>F/B ALNawa Express:</h2>
              <p>
                <span>
                  <strong>Vessel Present Name:</strong> M/V ALNawa Express
                </span>
                <span>
                  <strong>Operator:</strong> Namma International Marine Services
                </span>
                <span>
                  <strong>Vessel Type:</strong> Cargo with roll-on/roll-off
                  vehicle service
                </span>
                <span>
                  <strong>Authorized Number of passengers:</strong> 26
                </span>
              </p>
              <p className=" text-sm">Al Nawa Express Ferry Route:</p>
              <p className=" text-sm">
                <strong>GRT =</strong> 19,009 MT
              </p>
            </div>
            <div className=" rounded-full overflow-hidden size-56 border-[12px] border-accent hover:border-primary hover:bg-accent">
              <img
                className=" w-full h-full object-cover"
                src={fleetAlnawa}
                alt="Fleet Al Nawa"
              />
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Fleets;
