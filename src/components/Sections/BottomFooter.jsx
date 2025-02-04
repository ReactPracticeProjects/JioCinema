import React from "react";
import jiologo from "/jio-logo.png";

function BottomFooter() {
  return (
    <div className="w-full">
      <div className="w-full bg-light-theme text-white flex justify-between p-4 md:py-4 md:px-5 items-center">
        <p className="text-[10px] md:text-sm">
          Copyright © Star India Private Limited, 2024. All rights reserved.
        </p>
        <img src={jiologo} className="w-9 md:w-12" alt="" />
      </div>
    </div>
  );
}

export default BottomFooter;
