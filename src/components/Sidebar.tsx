import React, { ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Header from "./Header";
import { MenuItem } from "@mui/material";
import Logo from "../assets/images/auth/logo.svg";
import SelectedSidebar from "../assets/icons/SelectedSidebar";

interface MenuItem {
  id: number;
  path: string;
  name: string;
  icon?: string;
}

interface SidebarProps {
  children: ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const menuItem: MenuItem[] = [
    {
      id: 1,
      path: "/",
      name: "Dashboard",
      icon: "../../Icons/Home.svg",
    },
    {
      id: 2,
      path: "/challenges",
      name: "Challenges",
      icon: "../../Icons/challenges.svg",
    },
    {
      id: 3,
      path: "/users",
      name: "Users",
      icon: "../../Icons/users.svg",
    },
    {
      id: 4,
      path: "/payment",
      name: "Payments",
      icon: "../../Icons/payment.svg",
    },
    {
      id: 5,
      path: "/withdrawals",
      name: "Withdrawals",
      icon: "../../Icons/withdrawalsIcon.svg",
    },
    {
      id: 6,
      path: "/certification",
      name: "Certifications",
      icon: "../../Icons/certifications.svg",
    },
    {
      id: 7,
      path: "/portal",
      name: "Affiliate Portals",
      icon: "../../Icons/portals.svg",
    },
    {
      id: 8,
      path: "/contest-programs",
      name: "Contests",
      icon: "../../Icons/contestsIcon.svg",
    },
  ];

  const menuItem1: MenuItem[] = [
    // {
    //   id: 1,
    //   path: "/faq",
    //   name: "FAQs",
    //   icon: "../../Icons/faq.svg",
    // },
    // {
    //   id: 2,
    //   path: "/legal",
    //   name: "Legal",
    //   icon: "../../Icons/legal.svg",
    // },
    {
      id: 1,
      path: "/help",
      name: "Need Help?",
      icon: "../../Icons/help.svg",
    },
  ];

  const location = useLocation();

  const isNavLinkActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="flex flex-row ">
      <div className="bg-black hidden lg:block lg:w-[25%] xl:w-[20%] pb-[185px] fixed h-[100vh]">
        <NavLink to="/">
          <div className="mt-12 px-8">
            <img src={Logo} alt="logo" />
          </div>
        </NavLink>
        {menuItem?.map((item) => (
          <div key={item?.id}>
            <NavLink
              to={item.path}
              className={`font-[Montserrat] font-medium text-lg text-white ${
                isNavLinkActive(item.path)
                  ? "flex items-center mt-8 bg-[#00BE64] bg-opacity-50 pb-8"
                  : ""
              }`}
            >
              {isNavLinkActive(item.path) && (
                <div className="relative">
                  <div className="absolute -top-2">
                    <SelectedSidebar />
                  </div>
                </div>
              )}
              <div className="flex gap-4 items-center mt-8 pl-8">
                <div>
                  <img src={item.icon} alt={item.name} />
                </div>
                <div className="link_text text-white">{item.name}</div>
              </div>
            </NavLink>
          </div>
        ))}
        <div className="my-11 w-full h-1 border-t border-dotted border-white border-opacity-10" />
        <div>
          {menuItem1?.map((item) => (
            <div key={item?.id}>
              <NavLink
                to={item.path}
                className={`font-[Montserrat] font-medium text-lg text-white ${
                  isNavLinkActive(item.path)
                    ? "flex items-center mt-8 bg-[#00BE64] bg-opacity-50 pb-8"
                    : ""
                }`}
              >
                {isNavLinkActive(item.path) && (
                  <div className="relative">
                    <div className="absolute -top-2">
                      <SelectedSidebar />
                    </div>
                  </div>
                )}
                <div className="flex gap-4 items-center mt-8 pl-8">
                  <div>
                    <img src={item?.icon} alt={item?.icon} />
                  </div>
                  <div className="link_text text-white">{item.name}</div>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-[75%] xl:w-[80%] bg-[#F5F5F5] lg:ml-[25%] xl:ml-[20%]">
        <Header menuItem={menuItem} menuItem1={menuItem1} />

        <main>{children}</main>
      </div>
    </div>
  );
};

export default Sidebar;
