import { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RxPerson } from "react-icons/rx";
import { BiNotification } from "react-icons/bi";
import { MdCelebration, MdOutlinePhoneIphone } from "react-icons/md";
import { LiaPenAltSolid } from "react-icons/lia";
import { PiSignOutFill, PiUserListBold } from "react-icons/pi";
import { IoMoonOutline, IoSettingsSharp } from "react-icons/io5";
import { IoGiftOutline } from "react-icons/io5";
import { CiCircleAlert } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
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

const Header = () => {
  const [toggleLeftMenu, setToggleLeftMenu] = useState(false);
  const [dropdownLogo, setDropdownLogo] = useState(false);
  const [toggleRightMenu, setToggleRightMenu] = useState(false);
  const dropdownRef = useRef(null);
  const toggleLeftRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        toggleLeftRef.current &&
        !toggleLeftRef.current.contains(event.target)
      ) {
        setDropdownLogo(false);
        setToggleLeftMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="flex relative">
      <nav className="px-10 flex flex-1 z-[2] max-sm:bg-head max-sm:px-5 max-sm:py-2 ">
        <div className="sm:flex hidden flex-1">
          <div
            onClick={() => setDropdownLogo(!dropdownLogo)}
            ref={dropdownRef}
            className="px-4 py-3 relative flex flex-wrap items-center gap-2 cursor-pointer"
          >
            <IoIosArrowDown size={13} />
            <p>متجر الهدايا</p>
            <img
              className="rounded-full w-7 h-7"
              src="/images/personIcon.png"
              alt="personIcon"
            />
            {dropdownLogo && (
              <ul className="absolute top-[100%] w-[200px] h-[200px] z-10 bg-white shadow-lg">
                <li className="py-2 px-4 gap-2 flex justify-end items-center hover:bg-gray-100">
                  <span>الملف الشخصي</span>
                  <RxPerson size={20} />
                </li>
                <li className="py-2 px-4 gap-2 flex justify-end items-center hover:bg-gray-100">
                  <span>التنبيهات</span>
                  <BiNotification size={20} />
                </li>
                <li className="py-2 px-4 gap-2 flex justify-end items-center hover:bg-gray-100">
                  <span>تحديثات المنصه</span>
                  <MdCelebration size={20} />
                </li>
                <li className="py-2 px-4 gap-2 flex justify-end items-center hover:bg-gray-100">
                  <span>الاقتراحات</span>
                  <LiaPenAltSolid size={20} />
                </li>
                <li className="border-t-[1px] py-2 px-4 gap-2 flex justify-end items-center hover:bg-gray-100">
                  <span className="text-red-600">تسجيل الخروج</span>
                  <PiSignOutFill color="red" size={20} />
                </li>
              </ul>
            )}
          </div>
          <button className="self-center rounded-full border-2 p-[9px]  border-main">
            <IoMoonOutline size={20} />
          </button>
          <button className="self-center rounded-full border-2 p-[9px] ml-3 border-main">
            <IoGiftOutline size={20} />
          </button>
        </div>
        <div
          className="sm:hidden self-center flex"
          ref={toggleLeftRef}
          onClick={() => setToggleLeftMenu(!toggleLeftMenu)}
        >
          <button className="relative">
            <img
              className="w-7 h-7 rounded-full"
              src="/images/personIcon.png"
              alt="personIcon"
            />
            <span className="absolute rounded-full z-10 w-2 h-2 bg-red-600 top-0 right-[-3px] animate-pulse"></span>
          </button>
          {toggleLeftMenu && (
            <ul className="absolute text-right left-0 top-[100%] w-full bg-head ">
              <li className="py-2 px-4 text-white">
                <Link to={"/"} className="gap-2 flex justify-end items-center">
                  <span>الملف الشخصي</span>
                  <RxPerson size={20} />
                </Link>
              </li>
              <li className="py-2 px-4 text-white">
                <Link to={"/"} className="gap-2 flex justify-end items-center">
                  <span>التنبيهات</span>
                  <BiNotification size={20} />
                </Link>
              </li>
              <li className="py-2 px-4 text-white">
                <Link to={"/"} className="gap-2 flex justify-end items-center">
                  <span>تحديثات المنصه</span>
                  <MdCelebration size={20} />
                </Link>
              </li>
              <li className="py-2 px-4 text-white">
                <Link to={"/"} className="gap-2 flex justify-end items-center">
                  <span>الاقتراحات</span>
                  <LiaPenAltSolid size={20} />
                </Link>
              </li>
              <li className="py-2 px-4 text-white">
                <Link to={"/"} className="gap-2 flex justify-end items-center">
                  <span>نقاط الولاء</span>
                  <IoGiftOutline size={20} />
                </Link>
              </li>
              <li className="py-2 px-4 text-white">
                <Link to={"/"} className="gap-2 flex justify-end items-center">
                  <span>الوضع الليلي</span>
                  <IoMoonOutline size={20} />
                </Link>
              </li>
              <li className="py-2 px-4 text-white">
                <Link to={"/"} className="gap-2 flex justify-end items-center">
                  <span className="text-red-600">تسجيل الخروج</span>
                  <PiSignOutFill color="red" size={20} />
                </Link>
              </li>
            </ul>
          )}
        </div>
        <form className="my-2 flex flex-1 justify-center" action="">
          <div className="sm:flex hidden items-center">
            <div className="py-2 px-4 bg-main">
              <IoIosSearch size={20} />
            </div>
            <select
              dir="rtl"
              id="category"
              name="category"
              className="outline-none border-[1px] border-r-0 p-[4.5px]"
            >
              <option value="الطلبات">الطلبات</option>
              <option value="المنتجات">المنتجات</option>
              <option value="العملاء">العملاء</option>
            </select>
            <div className="relative flex items-center">
              <input
                type="text"
                className="outline-none rounded-r-sm border-[1px]  max-[1000px]:w-[200px] w-[350px] text-right p-1"
                placeholder="ابحث برقم الطلب ,اسم العميل,رقم الشحنه"
              />
              <CiCircleAlert size={20} className="absolute left-2" />
            </div>
          </div>
        </form>
        <div className="xs:hidden sm:hidden flex flex-1 items-center justify-start">
          <img className="w-[90px] h-[40px]" src="/images/logo.svg" alt="logo" />
        </div>
      </nav>
      <div className="px-5 flex justify-end items-center sm:min-w-[260px] h-[56px]  bg-head ">
        <div className="hidden sm:flex">
          <img className="w-[90px] h-[40px]" src="/images/logo.svg" alt="logo" />
        </div>
        <div
          className="sm:hidden z-[2] cursor-pointer"
          onClick={() => {
            setToggleRightMenu(!toggleRightMenu);
            if (!toggleRightMenu) {
              // Hide scrollbar when menu is opened
              document.body.style.overflowY = 'hidden';
            } else {
              // Show scrollbar when menu is closed
              document.body.style.overflowY = 'scroll';
            }
          }}
        >
          <HiOutlineMenu size={30} color="white" />
        </div>
        {toggleRightMenu && (
          <div className="sm:hidden">
            {/* Overlay */}
            <div
              className="fixed inset-0 z-[1] bg-black opacity-50"
              onClick={() => setToggleRightMenu(false)}
            ></div>

            {/* Sidebar */}
            <div
              dir="rtl"
              className="fixed overflow-y-scroll z-[2] scrollbar-custom top-[56px] right-0 w-64 h-[calc(100vh-56px)] bg-head shadow-lg transition-transform transform translate-x-0"
            >
              <div
                className="p-2 mb-[100px]"
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
                        <RiMegaphoneLine  />
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
                        المحفظة والفواتير                      </Link>
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
