import React from "react";
import { CiMail } from "react-icons/ci";


const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full z-[3] border-t-4 border-[#336b7e] bg-head">
      <div
        dir="rtl"
        className="flex max-sm:flex-col relative justify-center items-center p-2 gap-10"
      >
        <p className="text-white">
          عجبتك التجربة؟ انطلق بتجارتك اليوم مع سلة بسهولة و بدون أي عمولة!
        </p>
        <div className="cursor-pointer bg-main text-head px-3 py-2">
          انشئ متجرك مجانا
        </div>
        
        <div className="p-5 cursor-pointer absolute left-5 bottom-[50%] rounded-full bg-main">
                  <CiMail size={24}/>
          </div>
      
      </div>
    </div>
  );
};

export default Footer;
