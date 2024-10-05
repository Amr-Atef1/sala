import { FaHome } from "react-icons/fa";
import { PiTShirtLight } from "react-icons/pi";
import { FaBox } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { FiPieChart } from "react-icons/fi";
import { MdOutlineMessage } from "react-icons/md";
import { IoNewspaperSharp } from "react-icons/io5";
import { RiMegaphoneLine } from "react-icons/ri";


export const menuItems=[
    {
        ItemName: "الرئيسيه",
        icon: FaHome,
        path: "/",
      },
      {
        ItemName: "المنتجات",
        icon: PiTShirtLight,
        path: "/products",
      },
      {
        ItemName: "الطلبات",
        icon: FaBox,
        path: "/orders",
      },
      {
        ItemName: "العملاء",
        icon: BsFillPeopleFill,
        path: "/customers",
      },
      {
        ItemName: "التقارير",
        icon: FiPieChart,
        path: "/reports",
      },
      {
        ItemName: "الاسئله والتقيمات",
        icon: MdOutlineMessage,
        path: "/feedback",
      },
      {
        ItemName: "الصفحات التعريفيه",
        icon: IoNewspaperSharp,
        path: "/info-pages",
      },
      {
        ItemName: "الادوات التسويقيه",
        icon: RiMegaphoneLine,
        path: "/marketing-tools",
      },
    
]
