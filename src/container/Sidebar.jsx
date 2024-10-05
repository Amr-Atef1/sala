
import {MdOutlinePhoneIphone } from "react-icons/md";
import {  PiUserListBold } from "react-icons/pi";
import {  IoSettingsSharp } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import { LuCrown } from "react-icons/lu";
import { MdChevronLeft } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";
import { SiJetpackcompose } from "react-icons/si";
import { FaBriefcase, FaPuzzlePiece, FaWallet } from "react-icons/fa";
import { RiMegaphoneLine } from "react-icons/ri";

import { menuItems } from "../utils";

import { Link } from "react-router-dom";
import { AiFillShop } from "react-icons/ai";
import { BsLayoutTextWindowReverse } from "react-icons/bs";
import { TbLayoutGridRemove } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div
      dir="rtl"
      className="max-sm:hidden  overflow-y-scroll scrollbar-custom fixed top-[56px] right-0 w-[260px] h-[calc(100vh-56px)] bg-head shadow-lg transition-transform transform translate-x-0"
    >
      <div
        className="p-2 mb-[56px]"
        onClick={() => setToggleRightMenu(false)} // Optional: Click inside sidebar can close the menu
      >
        <div className="flex flex-col gap-2 relative justify-center items-center">
          <a
            className=" flex items-center px-2 py-1 absolute top-0 w-fit rounded-full bg-yellow-400"
            href=""
          >
            <LuCrown />
            <span>سبيشل</span>
          </a>
          <div className="overflow-hidden w-20 h-20  border-2 rounded-full border-dashed border-yellow-400">
            <img
              className="object-cover w-full h-full"
              src="/images/sidebarLogo.webp"
              alt="sidebarLogo"
            />
          </div>
          <div className="text-center">
            <span className="text-white font-bold">متجر الهدايا</span>
            <div className="flex items-center mt-2">
              <span className="flex items-center border-main border-[1px] px-2 py-1 rounded-r-full text-white text-sm">
                زياره المتجر
                <MdChevronLeft size={20} />
              </span>
              <div className="border-[1px] px-2 py-1 rounded-l-full bg-main">
                <CiShare2 size={20} />
              </div>
            </div>
          </div>
        </div>
        {/* menu ul */}
        <div className="py-4">
          <ul>
            {menuItems.map(({ ItemName, icon: Icon, path }, index) => (
              <li key={index}>
                <Link
                  to={path}
                  className="flex items-center gap-3 py-3 px-5 text-white hover:bg-[#173b47]"
                >
                  {<Icon />} {ItemName}
                </Link>
              </li>
            ))}
          </ul>
          {/* قنوات البيع */}
          <div>
            <ul>
              <li className="py-3 px-5 text-[#76E8CD]">قنوات البيع</li>
              <li>
                <Link className="flex items-center gap-3 py-3 px-5 text-white hover:bg-[#173b47]">
                  <SiJetpackcompose />
                  محلي
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-3 py-3 px-5 text-white hover:bg-[#173b47]">
                  <SiJetpackcompose />
                  سله بوينت
                </Link>
              </li>
              {/* ادوات مسانده */}

              <li className="py-3 px-5 text-[#76E8CD]">ادوات مسانده</li>
              <li>
                <Link className="flex items-center gap-3 py-3 px-5 text-white hover:bg-[#173b47]">
                  <FaBriefcase />
                  خدمات التاجر
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-3 py-3 px-5 text-white hover:bg-[#173b47]">
                  <PiUserListBold size={18} />
                  المؤثرين
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-3 py-3 px-5 text-white hover:bg-[#173b47]">
                  <RiMegaphoneLine />
                  اعلانات سويبلي
                </Link>
              </li>
              {/* الاعدادات */}
              <li className="py-3 px-5 text-[#76E8CD]">الاعدادات</li>
              <li>
                <Link className="flex items-center gap-3 py-3 px-5 text-white hover:bg-[#173b47]">
                  <AiFillShop />
                  باقة المتجر
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-3 py-3 px-5 text-white hover:bg-[#173b47]">
                  <IoSettingsSharp />
                  إعدادات المتجر
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-3 py-3 px-5 text-white hover:bg-[#173b47]">
                  <FaWallet />
                  المحفظة والفواتير{" "}
                </Link>
              </li>
              {/* مظهر المتجر */}
              <li className="py-3 px-5 text-[#76E8CD]">مظهر المتجر</li>
              <li>
                <Link className="flex items-center gap-3 py-3 px-5 text-white hover:bg-[#173b47]">
                  <BsLayoutTextWindowReverse />
                  تصميم المتجر
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-3 py-3 px-5 text-white hover:bg-[#173b47]">
                  <MdOutlinePhoneIphone />
                  صانع التطبيقات
                </Link>
              </li>
              {/* متجر التطبيقات */}
              <li className="py-3 px-5 text-[#76E8CD]">متجر التطبيقات</li>
              <li>
                <Link className="flex items-center gap-3 py-3 px-5 text-white hover:bg-[#173b47]">
                  <FaPuzzlePiece />
                  التطبيقات المثبتة
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-3 py-3 px-5 text-white hover:bg-[#173b47]">
                  <TbLayoutGridRemove />
                  زيارة متجر التطبيقات
                </Link>
              </li>
              {/* تطبيق التاجر */}
              <li className="py-3 px-5 text-[#76E8CD]">تطبيق التاجر</li>
            </ul>
            <div className="flex gap-1">
              <a href="/">
                <img src="/images/appstore.webp" alt="appstore" />
              </a>
              <a href="/">
                <img src="/images/googleplay.webp" alt="googleplay" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
