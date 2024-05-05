import React from "react";
import { Trans, useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation(["contact"]);
  return (
    <>
      <section className=" w-full h-[400px]">
        <iframe
          className=" w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.2605452596404!2d31.273155711746966!3d29.97194137485579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145838653df27331%3A0xc64c394c1a8ad7ae!2sNamma%20Shipping%20Lines!5e0!3m2!1sen!2sse!4v1714623038771!5m2!1sen!2sse"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <div className=" w-full max-w-[1024px] mx-auto  py-10 px-5">
        <div className=" flex flex-col sm:flex-row justify-center gap-8">
          <div className=" flex-1">
            <h1>{t("title")}</h1>
            <h2>{t("office")}</h2>
            <p className=" text-sm">
              <Trans components={{ b: <strong /> }}>{t("tel")}</Trans>
            </p>
            <p className=" text-sm">
              <Trans components={{ b: <strong /> }}>{t("toll")}</Trans>
            </p>
            <p className=" text-sm">
              <Trans components={{ b: <strong /> }}>{t("fax")}</Trans>
            </p>
            <p className=" text-sm">
              <Trans components={{ b: <strong /> }}>{t("address")}</Trans>
            </p>
          </div>
          <div className=" flex-[1.7]">
            <form>
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        for="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        {t("first-name")}
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autocomplete="given-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        for="last-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        {t("last-name")}
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autocomplete="family-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-full">
                      <label
                        for="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        {t("email")}
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autocomplete="email"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="col-span-full">
                      <label
                        for="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        {t("message")}
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="about"
                          name="about"
                          rows="3"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                {/* <button
                      type="button"
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      Cancel
                    </button> */}
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {t("send")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
