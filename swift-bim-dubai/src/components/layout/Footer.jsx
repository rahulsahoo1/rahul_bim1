import logo from "../../assets/swifterz_logo.png";
import { Typography } from "@material-tailwind/react";
import { MdEmail, MdLocationOn } from "react-icons/md";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="sticky w-full left-0 border-t-2 top-[100vh] bg-white ">
      <div className="mx-auto w-full px-8 mt-5">
        <div className="lg:grid flex flex-col grid-cols-1 justify-center md:justify-between gap-4 md:grid-cols-3">
          <img
            src={logo}
            alt="swifterz-logo"
            className="my-auto w-72 mx-auto h-20 lg:ml-5 xl:ml-20"
          />
          <div className="md:grid flex flex-col grid-cols-4 items-center md:items-start justify-between gap-4 col-span-2">
            <ul
              className="
             flex flex-wrap  flex-col md:items-start items-center"
            >
              <Typography
                color="black"
                variant="lead"
                className="mb-3 text-2xl"
              >
                Quick Links
              </Typography>

              <li>
                <Typography
                  color="gray"
                  className="py-1.5 w-fit border-b border-transparent hover:border-blue-500 cursor-pointer font-normal transition-colors hover:text-blue-gray-900"
                >
                  <Link to={"/about-us"}>About</Link>
                </Typography>
              </li>
              <li>
                <Typography
                  as="a"
                  href="/#sectors"
                  color="gray"
                  className="py-1.5 w-fit border-b border-transparent hover:border-blue-500 font-normal transition-colors hover:text-blue-gray-900"
                >
                  Sectors
                </Typography>
              </li>
              <li>
                <Typography
                  color="gray"
                  className="py-1.5 w-fit border-b border-transparent hover:border-blue-500 font-normal transition-colors hover:text-blue-gray-900"
                >
                  <Link to={"/services"}>Services</Link>
                </Typography>
              </li>
              <li>
                <Typography
                  color="gray"
                  className="py-1.5 w-fit border-b border-transparent hover:border-blue-500 font-normal transition-colors hover:text-blue-gray-900"
                >
                  <Link to={"/staffings"}>Staffings</Link>
                </Typography>
              </li>
              <li>
                <Typography
                  color="gray"
                  className="py-1.5 w-fit border-b border-transparent hover:border-blue-500 font-normal transition-colors hover:text-blue-gray-900"
                >
                  <Link to={"/contact-us"}>Contact Us</Link>
                </Typography>
              </li>
            </ul>
            <ul className="col-span-2 flex gap-4 flex-col">
              <Typography
                color="black"
                className="mb-3 text-2xl text-center"
                variant="lead"
              >
                Contact Us
              </Typography>

              <li>
                <Typography color="blue-gray" className=" flex gap-5 md:gap-8">
                  <MdLocationOn className="text-6xl md:text-6xl xl:text-4xl  text-blue-gray-800" />
                  <p>
                    SWIFTERZ CREATIVE ENGINEERING SERVICE L.L.C. Business
                    Centre, 637 ( Planmyfirm), 6th floor, Business village block
                    B, Deira, Dubai.
                  </p>
                </Typography>
              </li>
              <li>
                <Typography color="blue-gray" className=" flex gap-5 md:gap-8">
                  <MdEmail className="text-xl" />

                  <a
                    href="mailto:bim@swifterz.co"
                    className="hover:border-blue-600 border-b border-transparent "
                  >
                    bim@swifterz.ae
                  </a>
                </Typography>
              </li>
              {/* <li>
                <Typography color="blue-gray" className=" flex gap-5 md:gap-8">
                  <FaPhoneAlt className="text-xl" />
                  <a href="tel:+919894055835">+91 98940 55835</a>
                </Typography>
              </li> */}
            </ul>
            <ul>
              <Typography
                color="black"
                className="mb-3 text-2xl text-center"
                variant="lead"
              >
                Follow Us
              </Typography>
              <div className="flex gap-10 text-black justify-center">
                <Link
                  to={"https://www.facebook.com/theSwifterz"}
                  target="_blank"
                >
                  <FaFacebook className=" text-2xl hover:text-transparent/50" />
                </Link>
                <Link
                  to={
                    "https://www.linkedin.com/company/swifterz-creative-services/"
                  }
                  target="_blank"
                >
                  <FaLinkedin className=" text-2xl hover:text-transparent/50" />
                </Link>
                <Link
                  to={"https://www.instagram.com/theswifterz/"}
                  target="_blank"
                >
                  <FaInstagram className=" text-2xl hover:text-transparent/50" />
                </Link>
              </div>
            </ul>
          </div>
        </div>
        <div className="mt-2 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center mx-auto font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear}
            <Link className="border-b border-primary">
              {" "}
              SWIFTERZ CREATIVE ENGINEERING SERVICE L.L.C
            </Link>
            . All Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
