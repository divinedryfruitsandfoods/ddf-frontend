import React from "react";
const contactSection = "text-gray-600 body-font relative";
const contactSectionDiv = "relative flex items-top justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0";
const contactSectionDiv1 = "max-w-6xl mx-auto sm:px-6 lg:px-8";
const contactSectionDiv2 = "mt-8 overflow-hidden";
const contactSectionDiv3 = "grid grid-cols-1 md:grid-cols-2";
const contactSectionDiv4 = "p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg";
const contactSectionH1 = "text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight";
const contactSectionP = "text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2";
const contactSectionFlex = "flex items-center mt-4 text-gray-600 dark:text-gray-400";
const contactSectionDetails = "ml-4 text-md tracking-wide font-semibold w-40";
const contactSectionIcons = "w-8 h-8 text-gray-500";
const contactSectionInputs = "w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none";
const contactSectionSubmit = "md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300";
const contactSectionFormDisplay = "p-6 flex flex-col justify-center";
const contactSectionFormDiv = "flex flex-col mt-2";
const hidden = "hidden";
function Contact() {
  return (
    <section className={contactSection}>
      <div className={contactSectionDiv}>
        <div className={contactSectionDiv1}>
          <div className={contactSectionDiv2}>
            <div className={contactSectionDiv3}>
              <div className={contactSectionDiv4}>
                <h1 className={contactSectionH1}>Get in touch</h1>
                <p className={contactSectionP}>Fill in the form to start a conversation</p>

                <div className={contactSectionFlex}>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className={contactSectionIcons}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className={contactSectionDetails}>Acme Inc, Street, State, Postal Code</div>
                </div>

                <div className={contactSectionFlex}>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className={contactSectionIcons}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div className={contactSectionDetails}>+44 1234567890</div>
                </div>

                <div className={contactSectionFlex}>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className={contactSectionIcons}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className={contactSectionDetails}>info@acme.org</div>
                </div>
              </div>

              <form className={contactSectionFormDisplay}>
                <div className={contactSectionFormDiv}>
                  <label htmlFor="name" className={hidden}>
                    Full Name
                  </label>
                  <input type="name" name="name" id="name" placeholder="Full Name" className={contactSectionInputs} />
                </div>

                <div className={contactSectionFormDiv}>
                  <label htmlFor="email" className={hidden}>
                    Email
                  </label>
                  <input type="email" name="email" id="email" placeholder="Email" className={contactSectionInputs} />
                </div>

                <div className={contactSectionFormDiv}>
                  <label htmlFor="tel" className={hidden}>
                    Number
                  </label>
                  <input type="tel" name="tel" id="tel" placeholder="Telephone Number" className={contactSectionInputs} />
                </div>

                <button type="submit" className={contactSectionSubmit}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
