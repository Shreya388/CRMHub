import { TbDashboard } from "react-icons/tb";
import { BsFillBasketFill } from "react-icons/bs";
import { RiBookLine } from "react-icons/ri";
import { HiShoppingBag } from "react-icons/hi2";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import "../App.css";
import { MdOutlineNoteAlt } from "react-icons/md";
import { FaTicketAlt, FaList, FaUsers, FaRegBell, FaRegFile } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoStatsChartSharp, IoSettingsOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import React from 'react';
import { TbSquareRoundedArrowLeftFilled } from "react-icons/tb";
import { TfiSearch } from "react-icons/tfi";
import { BsCart } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { BiBell } from "react-icons/bi";
import { PiNotepad } from "react-icons/pi";
import { Card, CardHeader, CardBody, CardFooter, Divider, Image } from "@nextui-org/react";
import { FaUserLarge } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";


const Home: React.FC = () => {
    return (
        <div style={{ display: "flex" }}>
            <div style={{ background: "black", width: "54px", height: "100vh", color: "white", paddingLeft: "15px", paddingRight: "15px" }}>
                <span style={{ padding: "100px" }}><a style={{ padding: "10px" }}><TbDashboard size="24" /></a></span>
                <a style={{ padding: "10px" }}><FaUsers size="20" /></a>
                <a style={{ padding: "10px" }}><BsFillBasketFill size="20" /></a>
                <a style={{ padding: "10px" }}><FaCartShopping size="20" /></a>
                <a style={{ padding: "10px" }}><RiBookLine size="20" /></a>
                <a style={{ padding: "10px" }}><HiShoppingBag size="20" /></a>
                <a style={{ padding: "10px" }}><FaRegFile size="20" /></a>
                <a style={{ padding: "10px" }}><FaRegBell size="20" /></a>
                <a style={{ padding: "10px" }}><MdOutlineNoteAlt size="20" /></a>
                <a style={{ padding: "10px" }}><BsFillBasketFill size="20" /></a>
                <a style={{ padding: "10px" }}><FaTicketAlt size="20" /></a>
                <a style={{ padding: "10px" }}><FaList size="20" /></a>
                <a style={{ padding: "10px" }}><IoStatsChartSharp size="20" /></a>
                <a style={{ padding: "10px" }}><SlCalender size="20" /></a>
            </div>
            <div style={{ width: "100%" }}>
                <Navbar className="bg-gray-700 px-0 justify-start">
                    <NavbarContent className="hidden lg:flex gap-4">
                        <NavbarItem>
                            <span className="text-white" style={{ marginLeft: "auto" }}><TbSquareRoundedArrowLeftFilled size="30" /></span>
                        </NavbarItem>
                        <NavbarItem isActive>
                            <span className="text-white"><TfiSearch size="22" /></span>
                        </NavbarItem>

                    </NavbarContent>
                    <NavbarContent className="ml-auto" justify="end">
                        <NavbarItem className="hidden lg:flex">
                            <span className="text-white"><BsCart size="22" /></span>
                        </NavbarItem>
                        <NavbarItem>
                            <span className="text-white"><GoMail size="22" /></span>
                        </NavbarItem>
                        <NavbarItem>
                            <span className="text-white"><BiBell size="22" /></span>
                        </NavbarItem>
                        <NavbarItem>
                            <span className="text-white"><PiNotepad size="22" /></span>
                        </NavbarItem>
                        <NavbarItem>
                            <span className="text-white"><IoSettingsOutline size="22" /></span>
                        </NavbarItem>

                    </NavbarContent>
                </Navbar>
                <Navbar className="justify-start">
                    <NavbarBrand>
                        <TbDashboard size="30" /><p className="font-bold pl-4"> Dashboard</p>
                    </NavbarBrand>
                </Navbar>
                <div className="columns-4 p-4">
                <Card className="max-w-[400px]">
                    <CardHeader className="flex gap-3">
                    <span className=""><FaUserPlus size="50" /></span>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p className="text-2xl">Active Client</p>
                    </CardBody>
                    
                </Card>
                <Card className="max-w-[400px]">
                    <CardHeader className="flex gap-3">

                    <span className=""><FaUserLarge size="50" /></span>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p className="text-2xl">Active Admin</p>
                    </CardBody>
                    
                </Card>
                <Card className="max-w-[400px]">
                    <CardHeader className="flex gap-3">
                        <Image
                            alt="nextui logo"
                            height={40}
                            radius="sm"
                            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                            width={40}
                        />
                        <div className="flex flex-col">
                            <p className="text-md">NextUI</p>
                            <p className="text-small text-default-500">nextui.org</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p className="text-2xl">Total Expenses</p>
                    </CardBody>
                    
                </Card>
                <Card className="max-w-[400px]">
                    <CardHeader className="flex gap-3">
                        <Image
                            alt="nextui logo"
                            height={40}
                            radius="sm"
                            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                            width={40}
                        />
                        <div className="flex flex-col">
                            <p className="text-md">NextUI</p>
                            <p className="text-small text-default-500">nextui.org</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p className="text-2xl">Running Projects</p>
                    </CardBody>
                    
                </Card>
                </div>
            </div>

        </div>
    );
};

export default Home;
