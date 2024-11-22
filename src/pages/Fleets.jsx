import React from "react";
import {
  bannerFleets,
  fleetAlnawa,
  fleetAmanah,
  fleetAziz,
  fleetJoudy,
} from "../constants/images";
import { Trans, useTranslation } from "react-i18next";

const Fleets = () => {
  const { t } = useTranslation(["fleet"]);
  const { title, operator, type, number, grt } = t("aziz");
  const { title2, operator2, type2, number2, grt2 } = t("Jody");
  const { title3, operator3, type3, number3, grt3 } = t("alnawa");
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
          <h1>{t("name")}</h1>
          <p>{t("description")}</p>
        </div>
        <div className=" w-full max-w-[920px] mx-auto  py-10 px-5">
          <article className="fleetDetails flex justify-between border-b-[1px] border-accent py-10">
            <div>
              <h2>{title}</h2>
              <p>
                {/* <span>
                  <Trans components={{ b: <strong /> }}>{operator}</Trans>
                </span> */}
                <span>
                  <Trans components={{ b: <strong /> }}>{type}</Trans>
                </span>
                <span>
                  <Trans components={{ b: <strong /> }}>{number}</Trans>
                </span>
              </p>
              {/* <p className=" text-sm">
                <Trans components={{ b: <strong /> }}>{grt}</Trans>
              </p> */}
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
              <h2>{title2}</h2>
              <p>
                {/* <span>
                  <Trans components={{ b: <strong /> }}>{operator2}</Trans>
                </span> */}
                <span>
                  <Trans components={{ b: <strong /> }}>{type2}</Trans>
                </span>
                <span>
                  <Trans components={{ b: <strong /> }}>{number2}</Trans>
                </span>
              </p>
              {/* <p className=" text-sm">
                <Trans components={{ b: <strong /> }}>{grt2}</Trans>
              </p> */}
            </div>
            <div className=" rounded-full overflow-hidden size-56 border-[12px] border-accent hover:border-primary hover:bg-accent">
              <img
                className=" w-full h-full object-cover"
                src={fleetJoudy}
                alt="Fleet Amanah"
              />
            </div>
          </article>
          <article className="fleetDetails flex justify-between  py-10">
            <div>
              <h2>{title3}</h2>
              <p>
                {/* <span>
                  <Trans components={{ b: <strong /> }}>{operator3}</Trans>
                </span> */}
                <span>
                  <Trans components={{ b: <strong /> }}>{type3}</Trans>
                </span>
                {/* <span>
                  <Trans components={{ b: <strong /> }}>{number3}</Trans>
                </span> */}
              </p>
              {/* <p className=" text-sm">
                <Trans components={{ b: <strong /> }}>{grt3}</Trans>
              </p> */}
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
