import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/swifterz_logo.png";
import React, { useEffect, useState } from "react";
import {
  Navbar as NavbarMT,
  IconButton,
  Collapse,
  Typography,
  Menu,
  MenuHandler,
  ListItem,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { useAuth } from "../../context/AuthContext";
import { FaChevronDown } from "react-icons/fa";
import { FaHospital, FaSchoolFlag, FaUserGear } from "react-icons/fa6";
import { BsFillBuildingsFill } from "react-icons/bs";
import { RiHospitalFill } from "react-icons/ri";
import { PiBridgeDuotone, PiBuildingsBold } from "react-icons/pi";
import { ImOffice } from "react-icons/im";
import { GiFamilyHouse, GiGears, GiPencilRuler } from "react-icons/gi";
import {
  MdFactory,
  MdLocalAirport,
  MdOutlineManageSearch,
  MdTrain,
} from "react-icons/md";
import {
  assembleSpecializations,
  designSpecializations,
  executionSpecializations,
  operateSpecializations,
  procureSpecializations,
  valuateSpecializations,
} from "../../data/constants";
import { VscTasklist } from "react-icons/vsc";
import { TbShoppingCartStar } from "react-icons/tb";
import { IoIosConstruct } from "react-icons/io";

const Navbar = () => {
  const { isAuthenticated, logout, selectedCategory, setSelectedCategory } =
    useAuth();
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, [isAuthenticated]);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-normal border-b-2 duration-200 border-b-transparent hover:border-b-blue-500 "
      >
        <NavLink to="/" className={"flex items-center"}>
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-normal border-b-2 duration-200 border-b-transparent hover:border-b-blue-500 "
      >
        <Link to="/about-us" className="flex items-center">
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-normal lg:hidden border-b-2 duration-200 border-b-transparent hover:border-b-blue-500 "
      >
        <a href="/#sectors" className="flex items-center">
          Sectors
        </a>
      </Typography>
      <div className="hidden lg:block">
        <SectorsNavListMenu />
      </div>
      <div className="hidden lg:block">
        <ServicesNavListMenu />
      </div>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-normal lg:hidden border-b-2 duration-200 border-b-transparent hover:border-b-blue-500 "
      >
        <Link to="/services" className="flex items-center">
          Services
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-normal border-b-2 duration-200 border-b-transparent hover:border-b-blue-500 "
      >
        <Link to="/staffings" className="flex items-center">
          Staffing
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-normal border-b-2 duration-200 border-b-transparent hover:border-b-blue-500 "
      >
        <Link to="/contact-us" className="flex items-center">
          Contact Us
        </Link>
      </Typography>
      {isAuthenticated && (
        <div className="flex items-center gap-x-1">
          <Link
            to="/my-requests"
            className="hidden  items-center text-blue-500 px-4 py-2 rounded-lg   lg:flex gap-1"
          >
            <MdOutlineManageSearch />
            <span>Track My Requests</span>
          </Link>
        </div>
      )}
      {isAuthenticated ? (
        <div className="flex items-center gap-x-1">
          <button
            onClick={logout}
            className="hidden  bg-blue-500 px-4 py-2 rounded-lg  text-white lg:inline-block"
          >
            <span>Logout</span>
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-x-1">
          <Link
            to="/login"
            className="hidden  bg-blue-500 px-4 py-2 rounded-lg  text-white lg:inline-block"
          >
            <span>Sign In</span>
          </Link>
        </div>
      )}
      {/* {isAuthenticated ? (
        <Typography
          as="li"
          variant="paragraph"
          color="blue-gray"
          className="p-1 font-normal border-b-2 duration-200 border-b-transparent hover:border-b-blue-500 "
        >
          <button className="flex items-center" onClick={logout}>
            Logout
          </button>
        </Typography>
      ) : (
        <>
          <Typography
            as="li"
            variant="paragraph"
            color="blue-gray"
            className="p-1 font-normal border-b-2 duration-200 border-b-transparent hover:border-b-blue-500 "
          >
            <Link to="/login" className="flex items-center">
              Login
            </Link>
          </Typography>
          <Typography
            as="li"
            variant="paragraph"
            color="blue-gray"
            className="p-1 font-normal border-b-2 duration-200 border-b-transparent hover:border-b-blue-500 "
          >
            <Link to="/register" className="flex items-center">
              Register
            </Link>
          </Typography>
        </>
      )} */}
    </ul>
  );

  const servicesListMenuItems = [
    {
      title: "Design",
      description: "Find the perfect solution for your needs.",
      icon: <GiPencilRuler />,
      items: designSpecializations,
      desc: "Using BIM tools to develop cutting-edge plans for building projects, including structural, architectural, and MEP (mechanical, electrical, and plumbing) systems, and to make informed decisions with minimal effort.",
    },
    {
      title: "Valuate",
      description: "Meet and learn about our dedication",
      icon: <VscTasklist />,
      items: valuateSpecializations,
      desc: "Using BIM to optimize financial planning and decision making over a project's lifetime through accurate cost estimation, asset valuation, and lifestyle analysis. ",
    },
    {
      title: "Procure",
      description: "Find the perfect solution for your needs.",
      icon: <TbShoppingCartStar />,
      items: procureSpecializations,
      desc: " Using BIM to regulate the sourcing of materials and the administration of vendors to save time and money while guaranteeing the timely delivery of construction resources.",
    },
    {
      title: "Assemble",
      description: "Learn how we can help you achieve your goals.",
      icon: <IoIosConstruct />,
      items: assembleSpecializations,
      desc: "Using BIM to efficiently manage on-site logistics, materials, and construction sequencing, allowing for smooth assembly and progress monitoring.",
    },
    {
      title: "Execution",
      description: "Reach out to us for assistance or inquiries",
      icon: <GiGears />,
      items: executionSpecializations,
      desc: " Using BIM helps optimize project execution for on-time and successful project delivery by coordinating construction activities, managing schedules, and ensuring compliance with on-site safety regulations.",
    },
    {
      title: "Operation",
      description: "Find the perfect solution for your needs.",
      icon: <FaUserGear />,
      items: operateSpecializations,
      desc: "Using BIM in post-construction facility management, maintenance planning, and space utilization optimization guarantees the best possible performance and durability of built assets.",
    },
  ];
  const sectorsListMenuItems = [
    {
      title: "Hospitality",
      description:
        "Improve hospitality spaces with BIM for efficient design and lower construction costs",
      icon: <FaHospital />,
    },
    {
      title: "Healthcare",
      description:
        "Harness the power of BIM to streamline hospital operations and enhance patient care.",
      icon: <RiHospitalFill />,
    },
    {
      title: "Urban Planning",
      description:
        "Revolutionize urban planning with BIM for sustainable development and efficient city design.",
      icon: <BsFillBuildingsFill />,
    },
    {
      title: "Shopping Mall",
      description:
        "Bring shopping mall design into the modern era with BIM for better consumer experiences and easier construction",
      icon: <PiBuildingsBold />,
    },
    {
      title: "Corporate Offices",
      description:
        "Use BIM to improve corporate office architecture, leading to more productive workplaces through wise use of space.",
      icon: <ImOffice />,
    },
    {
      title: "Mixed Use Development",
      description:
        "Optimize the potential of mixed-use developments through BIM for integrated design and dynamic community spaces.",
      icon: <PiBridgeDuotone />,
    },
    {
      title: "Housing & Township",
      description:
        "Revolutionize townships and housings with BIM, leading to more efficient planning and thriving communities.",
      icon: <GiFamilyHouse />,
    },
    {
      title: "Educational Institutions",
      description:
        " Improve classroom instruction and campus design with BIM Factories and industries: Optimize factories and industries with BIM for efficient layouts and swift operations.",
      icon: <FaSchoolFlag />,
    },
    {
      title: "Airports",
      description:
        "Modernize airports with BIM for streamline operations and passenger centric design.",
      icon: <MdLocalAirport />,
    },
    {
      title: "Metro Stations",
      description:
        "Incorporate BIM to improve metro stations for the benefit of both riders and staff.",
      icon: <MdTrain />,
    },
    {
      title: "Factories and Industries",
      description:
        "Optimize factories and industries with BIM for efficient layouts and streamlined operations.",
      icon: <MdFactory />,
    },
  ];

  function ServicesNavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = servicesListMenuItems.map(
      ({ icon, title, desc }, key) => (
        <Link
          to="/services"
          key={key}
          onClick={() => setSelectedCategory(title)}
        >
          <MenuItem className="flex items-start gap-3 rounded-lg">
            <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
              {icon}
            </div>
            <div>
              <Typography
                variant="h6"
                color="blue-gray"
                className="flex items-center text-sm font-bold"
              >
                {title}
              </Typography>
              <Typography
                variant="paragraph"
                className="text-xs  !font-medium text-blue-gray-500"
              >
                {desc}
              </Typography>
            </div>
          </MenuItem>
        </Link>
      )
    );

    return (
      <>
        <Menu
          open={isMenuOpen}
          handler={setIsMenuOpen}
          offset={{ mainAxis: 20 }}
          placement="bottom"
          allowHover={true}
        >
          <MenuHandler>
            <Typography as="div" variant="small" className="font-medium">
              <ListItem
                className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                selected={isMenuOpen || isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              >
                Services
                <FaChevronDown
                  strokeWidth={2.5}
                  className={`hidden h-3 w-3 transition-transform lg:block ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
                <FaChevronDown
                  strokeWidth={2.5}
                  className={`block h-3 w-3 transition-transform lg:hidden ${
                    isMobileMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </ListItem>
            </Typography>
          </MenuHandler>
          <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
            <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
              {renderItems}
            </ul>
          </MenuList>
        </Menu>
        {/* <div className="block lg:hidden">
          <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
        </div> */}
      </>
    );
  }

  function SectorsNavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = sectorsListMenuItems.map(
      ({ icon, title, description }, key) => (
        <a
          href="/#sectors"
          key={key}
        >
          <MenuItem className="flex items-center gap-3 rounded-lg">
            <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
              {icon}
            </div>
            <div>
              <Typography
                variant="h6"
                color="blue-gray"
                className="flex items-center text-sm font-bold"
              >
                {title}
              </Typography>
              <Typography
                variant="paragraph"
                className="text-xs !font-medium text-blue-gray-500"
              >
                {description}
              </Typography>
            </div>
          </MenuItem>
        </a>
      )
    );

    return (
      <>
        <Menu
          open={isMenuOpen}
          handler={setIsMenuOpen}
          offset={{ mainAxis: 20 }}
          placement="bottom"
          allowHover={true}
        >
          <MenuHandler>
            <Typography as="div" variant="small" className="font-medium">
              <ListItem
                className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                selected={isMenuOpen || isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              >
                Sectors
                <FaChevronDown
                  strokeWidth={2.5}
                  className={`hidden h-3 w-3 transition-transform lg:block ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
                <FaChevronDown
                  strokeWidth={2.5}
                  className={`block h-3 w-3 transition-transform lg:hidden ${
                    isMobileMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </ListItem>
            </Typography>
          </MenuHandler>
          <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
            <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
              {renderItems}
            </ul>
          </MenuList>
        </Menu>
        {/* <div className="block lg:hidden">
          <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
        </div> */}
      </>
    );
  }

  return (
    <>
      <NavbarMT className="!sticky top-0 z-[999] h-fit max-w-full backdrop-blur-lg bg-white/80 rounded-none px-4 py-2 lg:px-8 ">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link
            to={"/"}
            className="md:flex text-center items-center justify-center  md:p-0  w-52  md:mt-0 md:ml-0  object-cover md:mr-10 mx-auto xl:mr-52"
          >
            <img src={logo} alt="logo" className="w-full h-full" />
          </Link>

          <div className="flex items-center gap-4">
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
          <div className="text-center  hidden lg:flex justify-end items-center gap-5">
            <div className="mr-4 hidden lg:block">{navList}</div>

            {/* {isAuthenticated && (
              <Tooltip
                content="Service Requests List"
                placement="bottom"
                animate={{
                  mount: { scale: 1, y: 25 },
                  unmount: { scale: 0, y: 0 },
                }}
                className="text-gray-500"
              >
                <div className="flex items-center gap-x-1">
                  <Link
                    to="/request-list"
                    className="hidden  items-center text-blue-500 px-4 py-2 rounded-lg   lg:flex gap-1"
                  >
                    <MdFormatListBulletedAdd />
                  </Link>
                </div>
              </Tooltip>
            )} */}
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          {isAuthenticated && (
            <div className="flex items-center gap-x-1">
              <Link
                to="/my-requests"
                className="items-center text-blue-500 px-4 py-2 rounded-lg flex lg:hidden"
              >
                <MdOutlineManageSearch />
                <span>Track My Requests</span>
              </Link>
            </div>
          )}
          {isAuthenticated ? (
            <div className="flex items-center gap-x-1">
              <button
                onClick={logout}
                className="lg:hidden  bg-blue-500 px-4 py-2 rounded-lg  text-white inline-block"
              >
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-x-1">
              <Link
                to={"/login"}
                className="lg:hidden  bg-blue-500 px-4 py-2 rounded-lg  text-white inline-block"
              >
                <span>Sign In</span>
              </Link>
            </div>
          )}
        </Collapse>
      </NavbarMT>
    </>
  );
};

export default Navbar;
