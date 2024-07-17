import Navbar from "./Navbar";
import { FaAward, FaBookReader, FaHandshake, FaUsers } from "react-icons/fa";
import { ImStopwatch } from "react-icons/im";
import { TbBulbFilled } from "react-icons/tb";
import { IoIosBookmarks, IoIosSpeedometer } from "react-icons/io";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import "photoswipe/dist/photoswipe.css";
import img1 from "../../assets/clients/client-1.jpeg";
import img2 from "../../assets/clients/client-2.jpeg";
import img3 from "../../assets/clients/client-3.jpeg";
import img4 from "../../assets/clients/client-4.jpeg";
import img5 from "../../assets/clients/client-5.jpeg";
import img6 from "../../assets/clients/client-6.jpeg";
import img7 from "../../assets/clients/client-7.jpeg";
import img8 from "../../assets/clients/client-8.jpeg";
import img9 from "../../assets/clients/client-9.jpeg";
import img10 from "../../assets/clients/client-10.jpeg";
import img11 from "../../assets/clients/client-11.jpeg";
import img12 from "../../assets/clients/client-12.jpeg";
import img13 from "../../assets/clients/client-13.jpeg";
import bim1 from "../../assets/bim_bg1.jpeg";
import bim2 from "../../assets/BANNER-01.jpg";
import bim3 from "../../assets/swift_banner.jpg";
import Slider from "infinite-react-carousel";
import Footer from "./Footer";
import "react-multi-carousel/lib/styles.css";
import MultiCarousel from "react-multi-carousel";
import { sectors } from "../../data/constants.js";
import SectorCard from "../SectorCard";
import NumberAnimate from "../../utils/NumberAnimate";

import eclipse from "../../assets/ellips.png";
import star from "../../assets/star.svg";
import rocket from "../../assets/rocket.svg";
import target from "../../assets/target.svg";
import rect from "../../assets/rectangle our service.png";
import whyChooseUs from "../../assets/why_choose_us.jpeg";
import staffing_bg from "../../assets/staffing_bg.jpeg";

// Sectors Images
import hospitality from "../../assets/Sectors/new/hospitality.jpeg";
import healthCare from "../../assets/Sectors/new/hospitality.jpeg";
import airports from "../../assets/Sectors/new/airport.jpeg";
import corporate from "../../assets/Sectors/new/corporate.jpeg";
import educational from "../../assets/Sectors/new/educational.jpeg";
import factories from "../../assets/Sectors/new/factories.jpeg";
import housing from "../../assets/Sectors/new/housing.jpeg";
import metro from "../../assets/Sectors/new/metro.jpeg";
import mixed from "../../assets/Sectors/new/mixed.jpeg";
import shoppingMall from "../../assets/Sectors/new/mall.jpeg";
import urbanPlanning from "../../assets/Sectors/new/urban.jpeg";

// Service Images

import design from "../../assets/services/design (1).jpg";
import procure from "../../assets/services/procure (1).jpg";
import valuate from "../../assets/services/Valuate (1).jpg";
import assemble from "../../assets/services/Assemble (1).jpg";
import execution from "../../assets/services/Execution (1).jpg";
import operation from "../../assets/services/Operation.jpeg";

import { Link } from "react-router-dom";

// Staffing
import staffing1 from "../../assets/staffing.jpeg";
import staffing2 from "../../assets/Staffing img 2 (1).jpg";

// Projects
import building1 from "../../assets/projects/building1.jpg";
import building2 from "../../assets/projects/building2.jpg";
import building3 from "../../assets/projects/building3.jpg";
import building4 from "../../assets/projects/building4.jpg";
import BlurIn from "../magicui/BlurIn.jsx";
import GradualSpacing from "../magicui/GratualSpacing.jsx";

const settings = {
  accessibility: false,
  autoplay: true,
  autoplaySpeed: 3000,
  swipe: false,
  virtualList: true,
  arrowsBlock: false,
  // pauseOnHover: false,
  adaptiveHeight: true,
};

const Home = () => {
  return (
    <main className="min-h-full bg-white text-black">
      <Navbar />
      {/* Hero Section */}

      <section id="home" className="relative">
        {/* Achievements */}

        {/* <div className="absolute -bottom-24 md:bottom-0  left-1/2 -translate-x-1/2 md:w-[50%] rounded-t-lg z-10 bg-white/90">
          <ul className="flex flex-row justify-items-center  md:grid grid-cols-3 gap-4 md:gap-5 text-redis-neutral-800 w-full mx-auto p-2 md:p-0">
            <li className="w-full text-sm font-semibold text-blue-500 text-slate-900 p-2 md:p-6  bg-clip-padding  shadow-slate-900/5 rounded-lg flex flex-col items-center justify-center">
              <span className="mb-1 text-blue-500 font-display text-xl lg:text-5xl">
                <NumberAnimate initialValue={0} targetValue={70} />+
              </span>
              Services
            </li>
            <li className="w-full text-sm font-semibold text-blue-500 text-slate-900 p-2 md:p-6  bg-clip-padding  shadow-slate-900/5 rounded-lg flex flex-col items-center justify-center">
              <span className="mb-1 text-blue-500 font-display text-xl lg:text-5xl">
                <NumberAnimate initialValue={0} targetValue={10} />+
              </span>
              Clients
            </li>
            <li className="w-full text-sm font-semibold text-blue-500 text-slate-900 p-2 md:p-6  bg-clip-padding  shadow-slate-900/5 rounded-lg flex flex-col items-center justify-center">
              <span className="mb-1 text-blue-500 font-display text-xl lg:text-5xl">
                <NumberAnimate initialValue={0} targetValue={50} />+
              </span>
              Projects
            </li>
          </ul>
        </div> */}
        <Slider {...settings} className="rounded-xl h-[90vh]">
          <div className="relative h-[90vh] w-full ">
            <img
              src={bim1}
              alt="image 1"
              className="md:h-full h-full w-full object-fill"
            />
            <div className="absolute inset-0 grid h-full md:h-full w-full place-items-center bg-black/30">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-2xl md:text-4xl uppercase lg:text-5xl"
                >
                  <BlurIn word={"Welcome to swift bim"} />
                </Typography>

                <div className="flex justify-center gap-2">
                  <a
                    href="#sectors"
                    className="bg-blue-500 text-white  md:py-2 nd:px-4 p-2 rounded-md uppercase text-sm font-semibold"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[90vh] w-full">
            <img
              src={bim3}
              alt="image 2"
              className="h-full w-full object-fill"
            />
            <div className="absolute left-0 top-0 inset-0 grid h-full w-full place-items-center justify-start bg-black/30">
              <div className="w-3/4 text-center ">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-2xl md:text-4xl uppercase lg:text-5xl"
                >
                  &quot;One stop solution&quot; for BIM
                </Typography>

                <div className="flex justify-center gap-2">
                  <a
                    href="#sectors"
                    className="bg-blue-500 text-white  md:py-2 nd:px-4 p-2 rounded-md uppercase text-sm font-semibold"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[90vh] w-full">
            <img
              src={bim2}
              alt="image 3"
              className="h-full w-full object-fill"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center justify-start bg-black/30">
              <div className="w-4/5 text-center ml-10">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-2xl md:text-4xl uppercase lg:text-5xl"
                >
                  Our Benefits
                </Typography>

                <div className="flex justify-center gap-2">
                  <a
                    href="#sectors"
                    className="bg-blue-500 text-white  md:py-2 nd:px-4 p-2 rounded-md uppercase text-sm font-semibold"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>

      {/* Feature Section */}
      <section className="w-full p-2 mt-20 md:mt-0 md:px-10 py-5">
        <div className="w-full h-fit  p-4 md:p-10">
          <div className="flex flex-col lg:flex-row gap-5 md:gap-10 justify-evenly items-center">
            <div className="shadow-xl bg-white text-primary flex flex-col gap-2 duration-300 border border-primary p-5 md:p-10 rounded-lg w-full md:w-[450px] max-w-[450px] h-[280px] md:h-[250px] lg:h-[300px] xl:h-[250px]">
              <FaBookReader className="text-4xl mx-auto bg-primary text-white p-2 rounded-full" />
              <h4 className="title">
                <p className="text-2xl font-sans text-center">
                  <GradualSpacing text={"Continuous Learning"} />
                </p>
              </h4>
              <p className="text-lg text-center">
                Via Research & Development to deliver the best possible
                outcomes.
              </p>
            </div>

            <div className="shadow-xl bg-white text-primary flex flex-col gap-2 duration-300 border border-primary p-5 md:p-10 rounded-lg w-full md:w-[450px] max-w-[450px] h-[280px] md:h-[250px] lg:h-[300px] xl:h-[250px]">
              <ImStopwatch className="text-4xl mx-auto bg-primary text-white p-2 rounded-full" />
              <h4 className="title">
                <p className="text-2xl font-sans text-center">
                  <GradualSpacing text={"Innovation"} />
                </p>
              </h4>
              <p className="text-lg text-center">
                To provide cutting-edge solutions that drive the industry
                forward.
              </p>
            </div>

            <div className="shadow-xl bg-white text-primary flex flex-col gap-2 duration-300 border border-primary p-5 md:p-10  rounded-lg w-full md:w-[450px] max-w-[450px] h-[280px] md:h-[250px] lg:h-[300px] xl:h-[250px]">
              <FaHandshake className="text-4xl mx-auto bg-primary text-white p-2 rounded-full" />
              <h4 className="title">
                <p className="text-2xl font-sans text-center">
                  <GradualSpacing text={"Collaboration"} />
                </p>
              </h4>
              <p className="text-lg text-center">
                With clients, partners and stakeholders to achive goals and
                mutual success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}

      <section
        style={{ background: `url(${staffing_bg})` }}
        className="w-full !bg-cover !bg-opacity-90 !bg-no-repeat h-[80vh] rounded-[50px]"
        id="sectors"
      >
        <div>
          <h1 className="text-4xl pt-10 text-white text-center">
            Sectors We Serve
          </h1>
          <div className="w-32 m-auto h-[1px] mt-2 mb-6 bg-gray-200 relative">
            <div className="bg-blue-500 w-[40%] right-[50%] -translate-x-7 left-[50%] absolute -top-[1px] h-[3px]"></div>
          </div>

          <div className="w-[80%] md:w-full h-fit lg:w-[70%] p-10 md:px-20 lg:grid flex flex-row gap-5 lg:gap-0 flex-wrap place-items-center text-center items-center justify-center mx-auto grid-cols-2 lg:grid-cols-5 grid-rows-6">
            {/* {sectors &&
              sectors.map((sector) => (
                <SectorCard
                  key={sector.title}
                  title={sector.title}
                  img={sector.img}
                  desc={sector.desc}
                />
              ))} */}
            <Link to={"/services"} id="card1" className="card">
              <img
                loading="lazy"
                width={300}
                height={300}
                src={hospitality}
                alt={"Hospitality"}
                className="cursor-pointer hover:object-fill bg-white p-5  hover:opacity-60 hover:brightness-75 hover:shadow-xl rounded-lg transition-all duration-300"
              />
              <div className="card__content">
                <p className="card__title">{"Hospitality"}</p>
                {/* <p className="card__description text-sm">{desc}</p> */}
              </div>
            </Link>{" "}
            <Link
              to={"/services"}
              id="card1"
              className="card col-start-1 row-start-3"
            >
              <img
                loading="lazy"
                width={300}
                height={300}
                src={healthCare}
                alt={"healthcare"}
                className="cursor-pointer hover:object-fill bg-white p-5   hover:opacity-60 hover:brightness-75 hover:shadow-xl rounded-lg transition-all duration-300"
              />
              <div className="card__content">
                <p className="card__title">{"Health Care"}</p>
                {/* <p className="card__description text-sm">{desc}</p> */}
              </div>
            </Link>{" "}
            <Link
              to={"/services"}
              id="card1"
              className="card col-start-1 row-start-5"
            >
              <img
                loading="lazy"
                width={300}
                height={300}
                src={corporate}
                alt={"corporate"}
                className="cursor-pointer hover:object-fill bg-white p-5  hover:opacity-60 hover:brightness-75 hover:shadow-xl rounded-lg transition-all duration-300"
              />
              <div className="card__content">
                <p className="card__title">{"Corporate"}</p>
                {/* <p className="card__description text-sm">{desc}</p> */}
              </div>
            </Link>{" "}
            <Link
              to={"/services"}
              id="card1"
              className="card col-start-2 row-start-2"
            >
              <img
                loading="lazy"
                width={300}
                height={300}
                src={mixed}
                alt={"Mixed Use Development"}
                className="cursor-pointer hover:object-fill bg-white p-5  hover:opacity-60 hover:brightness-75 hover:shadow-xl rounded-lg transition-all duration-300"
              />
              <div className="card__content">
                <p className="card__title">{"Mixed Use Development"}</p>
                {/* <p className="card__description text-sm">{desc}</p> */}
              </div>
            </Link>{" "}
            <Link
              to={"/services"}
              id="card1"
              className="card col-start-2 row-start-4"
            >
              <img
                loading="lazy"
                width={300}
                height={300}
                src={educational}
                alt={"educational"}
                className="cursor-pointer hover:object-fill bg-white p-5  hover:opacity-60 hover:brightness-75 hover:shadow-xl rounded-lg transition-all duration-300"
              />
              <div className="card__content">
                <p className="card__title">{"Educational"}</p>
                {/* <p className="card__description text-sm">{desc}</p> */}
              </div>
            </Link>{" "}
            <Link
              to={"/services"}
              id="card1"
              className="card col-start-3 row-start-3"
            >
              <img
                loading="lazy"
                width={300}
                height={300}
                src={urbanPlanning}
                alt={"urbanPlanning"}
                className="cursor-pointer hover:object-fill bg-white p-5  hover:opacity-60 hover:brightness-75 hover:shadow-xl rounded-lg transition-all duration-300"
              />
              <div className="card__content">
                <p className="card__title">{"Urban Planning"}</p>
                {/* <p className="card__description text-sm">{desc}</p> */}
              </div>
            </Link>{" "}
            <Link
              to={"/services"}
              id="card1"
              className="card col-start-4 row-start-2"
            >
              <img
                loading="lazy"
                width={300}
                height={300}
                src={factories}
                alt={"factories"}
                className="cursor-pointer hover:object-fill bg-white p-5  hover:opacity-60 hover:brightness-75 hover:shadow-xl rounded-lg transition-all duration-300"
              />
              <div className="card__content">
                <p className="card__title">{"Factories"}</p>
                {/* <p className="card__description text-sm">{desc}</p> */}
              </div>
            </Link>{" "}
            <Link
              to={"/services"}
              id="card1"
              className="card col-start-5 row-start-1"
            >
              <img
                loading="lazy"
                width={300}
                height={300}
                src={metro}
                alt={"metro"}
                className="cursor-pointer hover:object-fill bg-white p-5  hover:opacity-60 hover:brightness-75 hover:shadow-xl rounded-lg transition-all duration-300"
              />
              <div className="card__content">
                <p className="card__title">{"Metro"}</p>
                {/* <p className="card__description text-sm">{desc}</p> */}
              </div>
            </Link>{" "}
            <Link
              to={"/services"}
              id="card1"
              className="card col-start-4 row-start-4"
            >
              <img
                loading="lazy"
                width={300}
                height={300}
                src={housing}
                alt={"housing"}
                className="cursor-pointer hover:object-fill bg-white p-5  hover:opacity-60 hover:brightness-75 hover:shadow-xl rounded-lg transition-all duration-300"
              />
              <div className="card__content">
                <p className="card__title">{"Housing"}</p>
                {/* <p className="card__description text-sm">{desc}</p> */}
              </div>
            </Link>{" "}
            <Link
              to={"/services"}
              id="card1"
              className="card col-start-5 row-start-3"
            >
              <img
                loading="lazy"
                width={300}
                height={300}
                src={airports}
                alt={"airports"}
                className="cursor-pointer hover:object-fill bg-white p-5  hover:opacity-60 hover:brightness-75 hover:shadow-xl rounded-lg transition-all duration-300"
              />
              <div className="card__content">
                <p className="card__title">{"Airports"}</p>
                {/* <p className="card__description text-sm">{desc}</p> */}
              </div>
            </Link>
            <Link
              to={"/services"}
              id="card1"
              className="card col-start-5 row-start-5"
            >
              <img
                loading="lazy"
                width={300}
                height={300}
                src={shoppingMall}
                alt={"shopping mall"}
                className="cursor-pointer hover:object-fill bg-white p-5  hover:opacity-60 hover:brightness-75 hover:shadow-xl rounded-lg transition-all duration-300"
              />
              <div className="card__content">
                <p className="card__title">{"Shopping Mall"}</p>
                {/* <p className="card__description text-sm">{desc}</p> */}
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Services */}

      <section className="mt-20 max-w-[100vw] overflow-hidden">
        <div className="w-full flex flex-col items-center gap-6">
          <h1 className="text-4xl text-center font-semibold">Our Services</h1>
          <p className="my-5 text-center">
            Discover our range of services tailored for your construction needs.
          </p>
          <Link
            to={"/services"}
            className="bg-tertiary text-white py-4 px-10 rounded-lg"
          >
            Explore Our Services
          </Link>
        </div>

        <div
          // className="mt-5"
          className=" pt-24 pb-10 !bg-no-repeat -mt-10 !bg-cover w-screen "
          style={{ background: `url(${rect})` }}
        >
          <div class="cards flex flex-col md:flex-row flex-wrap lg:w-[80%] lg:mx-auto items-center justify-center md:m-10 gap-10">
            <Link to={"/services"} class="service_card">
              <img
                src={design}
                alt="design"
                className="h-32 w-full object-cover "
              />
              <div class="textBox">
                <p class="text head">Design</p>
                {/* <span>Cryptocurrency</span>
                <p class="text price">1.654,34€</p> */}
              </div>
            </Link>
            <Link to={"/services"} class="service_card">
              <img
                src={valuate}
                alt="valuate"
                className="h-32 w-full object-cover "
              />
              <div class="textBox">
                <p class="text head">Valuate</p>
                {/* <span>Cryptocurrency</span>
                <p class="text price">1.654,34€</p> */}
              </div>
            </Link>
            <Link to={"/services"} class="service_card">
              <img
                src={procure}
                alt="procure"
                className="h-32 w-full object-cover "
              />
              <div class="textBox">
                <p class="text head">Procure</p>
                {/* <span>Cryptocurrency</span>
                <p class="text price">1.654,34€</p> */}
              </div>
            </Link>
            <Link to={"/services"} class="service_card">
              <img
                src={assemble}
                alt="assemble"
                className="h-32 w-full object-cover "
              />
              <div class="textBox">
                <p class="text head">Assemble</p>
                {/* <span>Cryptocurrency</span>
                <p class="text price">1.654,34€</p> */}
              </div>
            </Link>
            <Link to={"/services"} class="service_card">
              <img
                src={execution}
                alt="execution"
                className="h-32 w-full object-cover "
              />
              <div class="textBox">
                <p class="text head">Execution</p>
                {/* <span>Cryptocurrency</span>
                <p class="text price">1.654,34€</p> */}
              </div>
            </Link>
            <Link to={"/services"} class="service_card">
              <img
                src={operation}
                alt="operation"
                className="h-32 w-full object-cover "
              />
              <div class="textBox">
                <p class="text head">Operation</p>
                {/* <span>Cryptocurrency</span>
                <p class="text price">1.654,34€</p> */}
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Core Values */}

      <section className="py-5 bg-primary text-white">
        <div>
          <h1 className="text-4xl text-center">Our Core Values</h1>
          <div className="w-32 m-auto h-[1px] mt-2 mb-6 bg-gray-200 relative">
            <div className="bg-blue-500 w-[40%]  right-[50%] -translate-x-7 left-[50%] absolute -top-[1px] h-[3px]"></div>
          </div>
          <h3 className="text-center mb-20">
            &quot;At Swifterz Creative Services LLP, our core values guide you
            every action.&quot;
          </h3>
          <div className="p-5 md:px-20">
            <ul className="md:grid flex flex-col grid-cols-3 gap-10">
              <li className="flex gap-5 items-start">
                <FaAward className="text-blue-500 text-4xl bg-white rounded-full p-2 " />
                <div className="flex gap-3  flex-col">
                  <h2 className="text-xl">Excellence & Integrity</h2>
                  <p className="text-gray-200 text-sm">
                    Through Quality, transparency, trust and long-lasting
                    partnership.
                  </p>
                </div>
              </li>
              <li className="flex gap-5 items-start">
                <IoIosBookmarks className="text-blue-500 text-4xl bg-white rounded-full p-2" />
                <div className="flex gap-3  flex-col">
                  <h2 className="text-xl">Digital Transformation</h2>
                  <p className="text-gray-200 text-sm">
                    To scale up your business requirements of your
                    organisations.
                  </p>
                </div>
              </li>
              <li className="flex gap-5 items-start">
                <TbBulbFilled className="text-blue-500 text-4xl bg-white rounded-full p-2" />
                <div className="flex gap-3  flex-col">
                  <h2 className="text-xl">Innovation</h2>
                  <p className="text-gray-200 text-sm">
                    To provide cutting-edge solutions that drive the industry
                    forward.
                  </p>
                </div>
              </li>
              <li className="flex gap-5 items-start">
                <IoIosSpeedometer className="text-blue-500 text-4xl bg-white rounded-full p-2" />
                <div className="flex gap-3  flex-col">
                  <h2 className="text-xl">Continuos Learning</h2>
                  <p className="text-gray-200 text-sm">
                    Via Research & Development to deliver the best possible
                    outcomes.
                  </p>
                </div>
              </li>
              <li className="flex gap-5 items-start">
                <FaHandshake className="text-blue-500 text-4xl bg-white rounded-full p-2" />
                <div className="flex gap-3  flex-col">
                  <h2 className="text-xl">Collaboration</h2>
                  <p className="text-gray-200 text-sm">
                    With clients, partners and stakeholders to achive goals and
                    mutual success.
                  </p>
                </div>
              </li>
              <li className="flex gap-5 items-start">
                <FaUsers className="text-blue-500 text-4xl bg-white rounded-full p-2" />
                <div className="flex gap-3  flex-col">
                  <h2 className="text-xl">Resource Retainership</h2>
                  <p className="text-gray-200 text-sm">
                    We have an Unique Resource Retainership DEI work culture.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Feature Projects */}

      {/* <section className="my-20">
        <div>
          <h1 className="text-4xl text-center">Feature Projects</h1>
        </div>

        <div className="flex md:flex-row flex-col md:flex-nowrap flex-wrap gap-10 items-center justify-center w-[90%] mx-auto">
          <Card className="md:w-96 w-full" shadow>
            <CardHeader floated={false} className="h-80">
              <img
                src={building1}
                alt="project1"
                className="object-fill h-full hover:scale-150 duration-500"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                Project
              </Typography>
              <button className="bg-tertiary text-white py-2 px-10 rounded-lg">
                View
              </button>
            </CardBody>
          </Card>
          <Card className="md:w-96 w-full" shadow>
            <CardHeader floated={false} className="h-80">
              <img
                src={building2}
                alt="project2"
                className="object-cover  hover:scale-150 duration-500"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                Project2
              </Typography>
              <button className="bg-tertiary text-white py-2 px-10 rounded-lg">
                View
              </button>
            </CardBody>
          </Card>
          <Card className="md:w-96 w-full" shadow>
            <CardHeader floated={false} className="h-80">
              <img
                src={building3}
                alt="project3"
                className="object-fill  hover:scale-150 duration-500"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                Project3
              </Typography>
              <button className="bg-tertiary text-white py-2 px-10 rounded-lg">
                View
              </button>
            </CardBody>
          </Card>
          <Card className="md:w-96 w-full" shadow>
            <CardHeader floated={false} className="h-80">
              <img
                src={building4}
                alt="project4"
                className="object-fill h-full hover:scale-150 duration-500"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                Project4
              </Typography>
              <button className="bg-tertiary text-white py-2 px-10 rounded-lg">
                View
              </button>
            </CardBody>
          </Card>
        </div>
      </section> */}

      {/* Our Staffing */}

      <section className="mt-10">
        <div className="w-full flex flex-col items-center gap-6">
          <h1 className="text-4xl text-center font-semibold">Staffings</h1>
          <p className="my-5 text-center">
            Discover our range of services tailored for your construction needs.
          </p>
          <Link
            to={"/staffings"}
            className="bg-tertiary text-white py-4 px-10 rounded-lg"
          >
            Explore Our Staffings
          </Link>
        </div>

        <div className="bg-secondary md:grid grid-cols-3 p-10 text-justify md:p-20 lg:p-40 mt-20 rounded-t-3xl md:rounded-tl-[400px] relative">
          <div className="col-span-2 mt-auto md:mt-28 flex gap-20 flex-col font-medium md:mr-10">
            <div>
              <p>
                At SWIFTERZ we have trained professors who are dedicated to
                train the next generation of BIM experts. We provide
                comprehensive staffing solutions for all BIM services.
              </p>
            </div>

            <div>
              <p>
                At SWIFTERZ, we recruit and train aspiring BIM professionals to
                ensure proficiency in their respective domain, and further align
                them with the specific staffing needs for each company. To be
                precise, we offer minimum 20 profiles for each level of BIM
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center flex-col gap-10">
            <div>
              <img
                src={staffing1}
                alt="bg1"
                className="xl:absolute lg:w-96 w-64 h-64 lg:h-96 object-cover rounded-2xl right-5 -top-10"
              />
            </div>
            <div>
              <img
                src={staffing2}
                alt="bg1"
                className="xl:absolute  lg:w-96 w-64 h-64 lg:h-96 object-cover rounded-2xl right-5 lg:right-20 xl:right-40 bottom-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}

      <section>
        <div
          style={{ backgroundImage: `url('${whyChooseUs}')` }}
          className="flex flex-col md:flex-row gap-5 w-full justify-center items-center md:px-20 p-10 md:py-10 relative bg-no-repeat bg-fixed bg-cover !bg-opacity-20"
        >
          <div className="flex-1 mx-auto md:ml-20 ">
            <h1 className="text-3xl md:text-4xl w-fit  font-semibold">
              Why Choose Us
            </h1>
            <p className="mt-10 ">
              Discover what sets SWIFTERZ apart from the rest.
            </p>
          </div>
          <div className="flex1 rounded-s-lg ">
            <img
              src={eclipse}
              alt="eclipse"
              className="md:w-[800px] hidden lg:block h-[500px] md:h-auto"
            />
            <div className="text-white">
              <div className="lg:absolute text-center md:top-44 top-60 right-[400px] xl:right-[500px]">
                <img
                  src={star}
                  alt="star"
                  className="mx-auto xl:w-20 w-fit h-20 xl:h-20"
                />
                <h1 className="text-xl xl:text-2xl font-medium">
                  Decades of Experience
                </h1>
                <p>Innovating since 1990</p>
              </div>
              <div className="lg:absolute text-center top-44 right-24 xl:right-36">
                <img
                  src={rocket}
                  alt="star"
                  className="mx-auto xl:w-20 w-fit h-20 xl:h-20"
                />
                <h1 className="text-xl xl:text-2xl font-medium">
                  Cutting edge Technology
                </h1>
                <p>Leaders in BIM advancements</p>
              </div>
              <div className="lg:absolute text-center top-[400px] right-44 xl:right-72">
                <img
                  src={target}
                  alt="star"
                  className="mx-auto xl:w-20 w-fit h-20 xl:h-20"
                />
                <h1 className="text-xl xl:text-2xl font-medium">
                  Client Centric Approach
                </h1>
                <p>Delivering value and satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients  */}

      <section className="p-4 md:p-20 bg-primary text-white">
        <h1 className="text-4xl text-center">Our Clients</h1>
        <div className="w-32 m-auto h-[1px] mt-2 mb-6 bg-gray-200 relative">
          <div className="bg-blue-500 w-[40%]  right-[50%] -translate-x-7 left-[50%] absolute -top-[1px] h-[3px]"></div>
        </div>

        <MultiCarousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={1}
          centerMode={true}
          className="flex gap-10 items-center justify-evenly"
          containerClass="container-with-dots"
          customTransition="all 10s linear"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 4,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          // slidesToSlide={4}
          swipeable
          transitionDuration={1000}
        >
          <img
            src={img1}
            className="md:w-36 w-20 object-contain h-16 md:h-24"
            alt="client-1"
          />
          <img
            src={img2}
            className="md:w-36 w-20 object-contain h-16 md:h-24"
            alt="client-2"
          />
          <img
            src={img3}
            className="md:w-36 w-20 object-contain h-16 md:h-24"
            alt="client-3"
          />
          <img
            src={img4}
            className="md:w-36 w-20 object-contain h-16 md:h-24"
            alt="client-4"
          />
          <img
            src={img5}
            className="md:w-36 w-20 object-contain h-16 md:h-24"
            alt="client-5"
          />
          <img
            src={img6}
            className="md:w-36 w-20 object-contain h-16 md:h-24"
            alt="client-6"
          />
          <img
            src={img7}
            className="md:w-36 w-20 object-contain h-16 md:h-24"
            alt="client-7"
          />
          <img
            src={img8}
            className="md:w-36 w-20 object-contain h-16 md:h-24"
            alt="client-8"
          />
          <img
            src={img9}
            className="md:w-36 w-20 object-contain h-16 md:h-24"
            alt="client-9"
          />
          <img
            src={img10}
            className="md:w-36 w-20 object-contain h-1/6 md:h-24"
            alt="client-10"
          />
          <img
            src={img11}
            className="md:w-36 w-20 object-contain h-1/6 md:h-24"
            alt="client-11"
          />
          <img
            src={img12}
            className="md:w-36 w-20 object-contain h-1/6 md:h-24"
            alt="client-12"
          />
          <img
            src={img13}
            className="md:w-36 w-20 object-contain h-1/6 md:h-24"
            alt="client-13"
          />
        </MultiCarousel>
      </section>

      {/* Footer Section */}

      <Footer />
    </main>
  );
};

export default Home;
