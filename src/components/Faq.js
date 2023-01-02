import React from "react";
const contMauto = "container m-auto";
const p8 = "p-8";
const faqDiv1 = "bg-white p-4 rounded-lg shadow-xl py-8 mt-12";
const faqH1 = "text-4xl font-bold text-gray-800 tracking-widest uppercase text-center";
const faqP = "text-center text-gray-600 text-sm mt-2";
const faqOne = "space-y-12 px-2 xl:px-16 mt-12";
const faqMtFlex = "mt-4 flex";
const faqQuest1 = "flex items-center h-16 border-l-4 border-blue-600";
const faqQuest = "text-4xl text-blue-600 px-4";
const faqAns1 = "flex items-center h-16 border-l-4 border-gray-400";
const faqAns = "text-4xl text-gray-400 px-4";
const faqQ1 = "flex items-center h-16";
const faqQ = "text-lg text-blue-600 font-bold";
const faqA1 = "flex items-center py-2";
const faqA = "text-gray-500";

function Faq() {
  return (
    <section className={contMauto}>
      <div className={p8}>
        <div className={faqDiv1}>
          <h4 className={faqH1}>FAQ</h4>
          <p className={faqP}>Here are some of the frequently asked questions</p>
          <div className={faqOne}>
            <div className={faqMtFlex}>
              <div>
                <div className={faqQuest1}>
                  <span className={faqQuest}>Q.</span>
                </div>
                <div className={faqAns1}>
                  <span className={faqAns}>A.</span>
                </div>
              </div>
              <div>
                <div className={faqQ1}>
                  <span className={faqQ}>Lorem ipsum dolor sit amet?</span>
                </div>
                <div className={faqA1}>
                  <span className={faqA}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!</span>
                </div>
              </div>
            </div>

            <div className={faqMtFlex}>
              <div>
                <div className={faqQuest1}>
                  <span className={faqQuest}>Q.</span>
                </div>
                <div className={faqAns1}>
                  {" "}
                  <span className={faqAns}>A.</span>
                </div>
              </div>
              <div>
                <div className={faqQ1}>
                  <span className={faqQ}>Consectetur adipisicing elit?</span>
                </div>
                <div className={faqA1}>
                  <span className={faqA}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!</span>
                </div>
              </div>
            </div>

            <div className={faqMtFlex}>
              <div>
                <div className={faqQuest1}>
                  <span className={faqQuest}>Q.</span>
                </div>
                <div className={faqAns1}>
                  {" "}
                  <span className={faqAns}>A.</span>
                </div>
              </div>
              <div>
                <div className={faqQ1}>
                  <span className={faqQ}>Neque eos, dignissimos provident reiciendis debitis?</span>
                </div>
                <div className={faqA1}>
                  <span className={faqA}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!</span>
                </div>
              </div>
            </div>

            <div className={faqMtFlex}>
              <div>
                <div className={faqQuest1}>
                  <span className={faqQuest}>Q.</span>
                </div>
                <div className={faqAns1}>
                  {" "}
                  <span className={faqAns}>A.</span>
                </div>
              </div>
              <div>
                <div className={faqQ1}>
                  <span className={faqQ}>Repudiandae commodi perferendis et itaque?</span>
                </div>
                <div className={faqA1}>
                  <span className={faqA}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!</span>
                </div>
              </div>
            </div>

            <div className={faqMtFlex}>
              <div>
                <div className={faqQuest1}>
                  <span className={faqQuest}>Q.</span>
                </div>
                <div className={faqAns1}>
                  {" "}
                  <span className={faqAns}>A.</span>
                </div>
              </div>
              <div>
                <div className={faqQ1}>
                  <span className={faqQ}>Similique fugiat cumque?</span>
                </div>
                <div className={faqA1}>
                  <span className={faqA}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
