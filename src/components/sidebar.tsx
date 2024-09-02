import { Link } from "@nextui-org/react";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { GiBasket } from "react-icons/gi";
import { TiShoppingCart } from "react-icons/ti";
import { FaUser } from "react-icons/fa";

export default function Divbar() {
    return (
        <div className="w-80 bg-zinc-900 h-screen">
            <Link href="#" size="lg" className="text-white pl-5 pr-5 pt-4"><i className="pl-3 pr-3"><AiOutlineDashboard/></i> Dashboard</Link>
            <Link href="#" size="lg" className="text-white pl-5 pr-5 pt-4"><i className="pl-3 pr-3"><FaUserFriends/></i> Customers</Link>
            <Link href="#" size="lg" className="text-white pl-5 pr-5 pt-4"><i className="pl-3 pr-3"><GiBasket/></i> Transaction</Link>
            <Link href="#" size="lg" className="text-white pl-5 pr-20 pt-4"><i className="pl-3 pr-3"><TiShoppingCart/></i> Sales</Link>
            <Link href="#" size="lg" className="text-white pl-5 pr-5 pt-4"><i className="pl-3 pr-3"><SlCalender/></i> Calender</Link>
            <Link href="#" size="lg" className="text-white pl-5 pr-20 pt-4"><i className="pl-3 pr-3"><FaUser/></i> User</Link>
        </div>
    )
} 