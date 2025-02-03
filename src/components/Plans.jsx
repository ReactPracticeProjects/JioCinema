import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";

function Plans() {
  // Array of background images (if stored in /public, use direct paths)
  const bgImages = [
    "/plansbg.avif",
    "/dweb_03.avif",
    "/dweb_11.avif",
    "/dweb_13.avif",
    "/dweb_15.avif",
  ];

  const [currentBg, setCurrentBg] = useState(bgImages[1]);

  useEffect(() => {
    let index = 0;
    const changeBackground = () => {
      index = (index + 1) % bgImages.length;
      setCurrentBg(bgImages[index]);
    };

    const interval = setInterval(changeBackground, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const plans = [
    {
      planName: "Premium",
      features: [
        "Ad-Free (except sports & live)",
        "Includes all Premium content",
        "Any 1 device at a time (up to Asli 4K quality)",
        "Download and watch anytime",
      ],
      price: 29,
    },
    {
      planName: "Family",
      features: ["Enjoy all Premium plan benefits on up to 4 devices"],
      price: 89,
    },
  ];

  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      <div 
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-1000 z-[-1]"
        style={{ backgroundImage: `url(${currentBg})` }}
      />

      <div className="flex-grow overflow-auto relative z-10 pt-20 px-5">
        <div className="backicon text-2xl font-light text-white absolute top-5 left-5">
          <Link to="/">
            <IoMdArrowRoundBack />
          </Link>
        </div>

        <div className="plandetails flex flex-col sm:w-3/5 mx-auto">
          <div className="premiuminfo mb-10 text-white">
            <h1 className="text-xl font-extrabold w-full  md:text-5xl">JioCinema Premium</h1>
            <p className="sm:text-lg mt-5">
              Entertainment Redefined - The best of Hollywood, Before TV
              premieres, Blockbuster movies, Exclusive series, India's biggest
              Kids & Family hub + 365 days of reality!
            </p>
          </div>

          {/* <div className="plans flex gap-5 w-full sm:flex sm:flex-col "> */}
          <div className="flex flex-col lg:flex-row gap-5">
            {plans.map((items, key) => (
              <div 
                key={key} 
                className="planbox px-5 py-2 flex flex-col border-3 border-primium-border rounded-md w-full bg-[#4F0352]"
              >
                <span className="offertext self-center uppercase rounded bg-primium-border text-black text-[12px] font-semibold p-1">
                  special offer
                </span>
                <h2 className="text-xl  sm:text-3xl text-white mb-3">{items.planName}</h2>

                <div className="flex flex-col h-full justify-between">
                  <div className="featurelist flex flex-col gap-1 text-[#CBB4CC]">
                    {items.features.map((feature, featureKey) => (
                      <li key={featureKey}>{feature}</li>
                    ))}
                  </div>

                  <div className="planprice flex justify-between">
                    <span className="border-1 h-fit text-center mt-3 border-primium-border px-2 py-1 text-primium-border">
                      1 Month
                    </span>

                    <div className="flex">
                      <FaRupeeSign className="text-white sm:text-3xl" />
                      <span className="text-2xl sm:text-5xl text-white">
                        {items.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="codesandapply flex mt-3 gap-2 mb-10 text-white">
            <div className="px-2 text-sm border-1 border-white sm:w-fit sm:px-4 sm:py-2 justify-center rounded-full flex gap-3 items-center text-white hover:text-pink-400 hover:border-pink-400">
              <span className="sm:text-xl"><CiDiscount1 /></span>
              <p className="sm:text-xl">Apply Promo Code</p>
            </div>

            <div className="border-white w-fit px-4 py-2 justify-center rounded-full flex gap-3 items-center bg-pink-500 text-white">
              <p className="sm:text-xl">Continue & Pay</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;