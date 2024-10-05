import { GoBell } from "react-icons/go";
import { FiAlertTriangle } from "react-icons/fi";
import { BsPeopleFill } from "react-icons/bs";
import { TbMoneybag } from "react-icons/tb";
import { FaBoxOpen } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import { BsDashLg } from "react-icons/bs";
import { CiCircleQuestion } from "react-icons/ci";
import { MdChevronLeft } from "react-icons/md";


const Content = () => {
  return (
    <div className="flex gap-5 px-7 py-16 max-sm:items-center max-sm:mb-10 max-[1200px]:flex-col-reverse w-[calc(100vw-260px)]">
      <div className="flex flex-col gap-10">
        <div className="border-[1px]">
          <div className="flex justify-end items-center gap-2 p-4 bg-gray-100">
            <h1 className="font-bold text-gray-500">التنبيهات</h1>
            <GoBell size={20} />
          </div>
          <div dir="rtl" className="overflow-y-scroll min-w-[350px] h-96">
            {/* many items */}
            <div className="flex  p-5 border-b">
              <img
                className="w-10 h-10"
                src="/images/avatar_male.webp"
                alt="avatar_male"
              />
              <div className="flex-col px-4 flex-1">
                <p>زائر أضاف عطر جدور للسلة</p>
                <span className="text-gray-400">منذ 21 ساعة</span>
              </div>
              <img className="w-10 h-10" src="/images/item.webp" alt="item" />
            </div>
            <div className="flex  p-5 border-b">
              <img
                className="w-10 h-10"
                src="/images/avatar_male.webp"
                alt="avatar_male"
              />
              <div className="flex-col  px-4 flex-1">
                <p>زائر أضاف عطر جدور للسلة</p>
                <span className="text-gray-400">منذ 21 ساعة</span>
              </div>
              <img className="w-10 h-10" src="/images/item.webp" alt="item" />
            </div>
            <div className="flex  p-5 border-b">
              <img
                className="w-10 h-10"
                src="/images/avatar_male.webp"
                alt="avatar_male"
              />
              <div className="flex-col  px-4 flex-1">
                <p>زائر أضاف عطر جدور للسلة</p>
                <span className="text-gray-400">منذ 21 ساعة</span>
              </div>
              <img className="w-10 h-10" src="/images/item.webp" alt="item" />
            </div>

            <div className="flex p-5 border-b">
              <img
                className="w-10 h-10"
                src="/images/avatar_male.webp"
                alt="avatar_male"
              />
              <div className="flex-col  px-4 flex-1">
                <p>زائر أضاف عطر جدور للسلة</p>
                <span className="text-gray-400">منذ 21 ساعة</span>
              </div>
              <img className="w-10 h-10" src="/images/item.webp" alt="item" />
            </div>

            <div className="flex  p-5 border-b">
              <img
                className="w-10 h-10"
                src="/images/avatar_male.webp"
                alt="avatar_male"
              />
              <div className="flex-col  px-4 flex-1">
                <p>زائر أضاف عطر جدور للسلة</p>
                <span className="text-gray-400">منذ 21 ساعة</span>
              </div>
              <img className="w-10 h-10" src="/images/item.webp" alt="item" />
            </div>

            <div className="flex  p-5 border-b">
              <img
                className="w-10 h-10"
                src="/images/avatar_male.webp"
                alt="avatar_male"
              />
              <div className="flex-col  px-4 flex-1">
                <p>زائر أضاف عطر جدور للسلة</p>
                <span className="text-gray-400">منذ 21 ساعة</span>
              </div>
              <img className="w-10 h-10" src="/images/item.webp" alt="item" />
            </div>
            <div className="flex  p-5 border-b">
              <img
                className="w-10 h-10"
                src="/images/avatar_male.webp"
                alt="avatar_male"
              />
              <div className="flex-col  px-4 flex-1">
                <p>زائر أضاف عطر جدور للسلة</p>
                <span className="text-gray-400">منذ 21 ساعة</span>
              </div>
              <img className="w-10 h-10" src="/images/item.webp" alt="item" />
            </div>
            <div className="flex  p-5 border-b">
              <img
                className="w-10 h-10"
                src="/images/avatar_male.webp"
                alt="avatar_male"
              />
              <div className="flex-col  px-4 flex-1">
                <p>زائر أضاف عطر جدور للسلة</p>
                <span className="text-gray-400">منذ 21 ساعة</span>
              </div>
              <img className="w-10 h-10" src="/images/item.webp" alt="item" />
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-end items-center gap-2 p-4 bg-gray-100">
            <h1 className="font-bold text-gray-500">  منتجات نفدت  </h1>
            <FiAlertTriangle size={20} />
          </div>
          <div dir="rtl" className="overflow-y-scroll">
            {/* many items */}
            <div className="flex  p-5 border-b">
              <img
                className="w-10 h-10"
                src="/images/barfan.webp"
                alt="avatar_male"
              />
              <div className="flex-col px-4 flex-1">
                <p className="text-red-500">عطر انتنس عود من قوتشي - 90مل - أو دو برفيوم</p>
                <span className="text-gray-400">SAR 805</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="flex flex-col gap-10 xl:mr-[100px] flex-1">
        {/* month */}
        <div className="flex max-sm:flex-col">
          {/* chart */}
          <div className="flex-1">
            <img className="w-full h-auto lg:min-w-[370px]" src="/images/green-chart.webp" alt="green-chart" />
          </div>
          {/* result */}
          <div className="flex flex-1 justify-around flex-col border rounded-r-md py-2 px-4">
            {/* head */}
            <div className="flex justify-between border-b p-2 border-opacity-5">
            <span className="text-gray-400"> أكتوبر 2024 </span>
            <span className="text-gray-400">ملخص الشهر </span>
            </div>
            {/* mid */}
            <div className="p-8 flex gap-10 flex-col">
              <div className="flex justify-between">
                <div dir="rtl" className="flex gap-4 ml-4">
                  <div className="p-3 rounded-full bg-main">
                  <TbMoneybag className="text-primary" size={24}/>
                  </div>
                  <div className=" flex flex-col text-[14px] text-primary">
                    <BsDashLg/>
                    <div className="flex items-center gap-1">
                      <span>المبيعات</span>
                      <CiCircleQuestion/>
                    </div>
                  </div>
                </div>
                <div dir="rtl" className="flex gap-4">
                  <div className="p-3 rounded-full bg-main">
                  <BsPeopleFill className="text-primary" size={24}/>
                  </div>
                  <div className=" flex flex-col text-[14px] text-primary">
                    <BsDashLg/>
                    <div className="flex items-center gap-1">
                      <span>الزيارات</span>
                      <CiCircleQuestion/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div dir="rtl" className="flex gap-4 ">
                  <div className="p-3 rounded-full border">
                  <GiTrophyCup className="text-primary" size={24}/>
                  </div>
                  <div className=" flex flex-col text-[14px] text-primary">
                    <BsDashLg />
                    <div className="flex items-center gap-1">
                      <span>هدف الشهر</span>
                      <MdChevronLeft />
                    </div>
                  </div>
                </div>
                <div dir="rtl" className="flex gap-4">
                  <div className="p-3 rounded-full bg-main">
                  <FaBoxOpen className="text-primary" size={24}/>
                  </div>
                  <div className=" flex flex-col text-[14px] text-primary">
                    <BsDashLg/>
                    <div className="flex items-center ">
                      <span>الطلبات</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* footer */}
            <div dir="rtl" className=" cursor-pointer flex justify-center items-center gap-3">
              <span>المزيد من التقارير</span>
              <MdChevronLeft/>
            </div>
          </div>
        </div>
    {/* request */}
    <div className="border">
          <div className="flex justify-end items-center gap-2 p-4 bg-gray-100">
            <h1 className="font-bold text-gray-500">  احدث الطلبات  </h1>
            <FaBoxOpen size={20} />
          </div>
          <div dir="rtl" className="">
            
            <div className="flex p-5 ">
           <span>لا توجد طلبات</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
