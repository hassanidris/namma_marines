import React from "react";
import { bannerAbout, imgProfile } from "../constants/images";

const Profile = () => {
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
        <h1>Profile</h1>
        <div className=" flex flex-col sm:flex-row justify-center gap-5">
          <div className=" flex-[2]">
            <p>
              Namma International Marine Services, a subsidiary of Nesma Holding
              Co., a highly respected Saudi corporation. Namma International
              Marine Services operates the most robust fleet on the Red Sea,
              carrying cargo and passengers to destinations among Egypt, Sudan
              and Saudi Arabia. Namma International Marine Services has
              experienced steady, compelling growth since its inception in 2005.
              The company’s impressive success can be attributed to several
              factors but all are based on a heartfelt belief in the importance
              of the voyage. Some of their customers are taking a once in a
              lifetime trip and Namma International Marine Services knows that
              they want a smooth, comfortable journey, in a powerful ship manned
              by an experienced and competent crew. It is this drive to ensure
              that our customers have a safe, pleasant voyage that is both
              convenient and affordable that propels the company’s growth and
              maintains its excellent reputation.{" "}
            </p>
            <p>
              Among the ports served by Namma International Marine Services are
              Safaja and Suez in Egypt, Sawakin in Sudan, and Duba, Yanbu and
              Jeddah in Saudi Arabia. Namma International Marine Services’
              outstanding fleet offers roll-on/roll-off service for cars, trucks
              and other vehicles. The fleet has come to dominate the Red Sea
              shipping lanes because of the company’s efficient operation,
              well-trained, highly skilled workforce and strong customer
              service. The number of passengers transported annually has more
              than doubled in the past decade to over 200,000 satisfied
              customers.
            </p>
            <p>
              Having the largest fleet and highly efficient operations gives
              Namma International Marine Services the flexibility and
              maneuverability to handle challenges as they arise. The company
              has received awards from the Jeddah Islamic Port and the Ministry
              of Sudan Hajj & Umrah for its skill in comfortably handling the
              transportation needs of an extensive number of pilgrims for Hajj &
              Umrah and for its excellent contributions to port services.
            </p>
            <p>
              Namma International Marine Services is also the leading Red Sea
              shipping agent of general cargo, break bulk cargo, refrigerated
              trailers, passenger cars and trucks. The company is both a
              designated shipping agent at Duba, Yanbu and Jeddah ports and an
              official “local shipping agent” servicing two internationally
              owned vessels at the ports of Duba and Jeddah. Modern offices,
              automated processes and skilled staff facilitate each vessel’s
              documentation and operational needs to minimize its stay in port,
              maintain schedules and meet customers’ needs.
            </p>
          </div>
          <div className=" flex-1">
            <img src={imgProfile} alt="profile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
