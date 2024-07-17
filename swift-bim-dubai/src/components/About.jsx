import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import services from "../assets/bim_services.jpg";
import staffing from "../assets/about1.jpg";
import TextRevealByWord from "./magicui/TextReveal";

const About = () => {
  return (
    <main className="min-h-screen max-w-screen bg-primary text-white flex flex-col">
      <Navbar />
      <h1 className="mx-auto text-4xl my-4 md:mt-16 font-semibold border-b">
        About Us
      </h1>

      <p className="tracking-widest text-gray-400 px-5 md:px-10 py-5 italic text-justify">
        {/* <TextRevealByWord
          text={
            " We are a team of competent BIM experts with experience spanning over decades, polishing every vertical of the construction industry. SWIFTERZ is a unique platform to enhance the construction domain further through  BIM and digitalisation. We are a one stop solution for all your BIM requirements. Our services are inclined towards enabling our clients to  maximise the use of technology."
          }
        /> */}
        We are a team of competent BIM experts with experience spanning over
        decades, polishing every vertical of the construction industry. SWIFTERZ
        is a unique platform to enhance the construction domain further through
        BIM and digitalisation. We are a one stop solution for all your BIM
        requirements. Our services are inclined towards enabling our clients to
        maximise the use of technology.
      </p>
      <div className="mx-auto">
        <h1 className="text-2xl my-4 border-b w-fit">What we do (services)</h1>
        {/* <ul className="list-decimal list-inside text-gray-400 text-lg space-y-1">
          <li>BIM Services</li>
          <li>BIM Staffings</li>
        </ul> */}
      </div>

      <div className="flex-1 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="flex justify-center ">
            <img
              src={services}
              alt="swifterz"
              className="max-w-full p-5 w-[600px] h-[400px]  object-cover"
            />
          </div>
          <div className="flex flex-col justify-start items-start gap-5 md:mr-10 p-4">
            {/* <div>
              <h1 className="text-2xl my-2 border-b w-fit">
                What we do (services)
              </h1>
              <ul className="list-decimal list-inside text-gray-400 text-lg space-y-1">
                <li>BIM Services</li>
                <li>BIM Staffings</li>
              </ul>
            </div> */}
            <div className="flex gap-5 justify-between flex-col">
              <h1 className="text-2xl my-2 border-b w-fit">BIM Services</h1>
              <p className="tracking-widest  text-gray-400 text-justify">
                At SWIFTERZ our team leverages decades of expertise to offer a
                comprehensive suite of BIM services. Our professionals provide
                an end to end execution of each project that ranges from the
                design stage of the project to finalizing the structure and
                validation to procurement of items and construction of the
                design. Our speciality lies in precision and efficiency in
                project execution and delivering the best value for money along
                with client satisfaction.
              </p>
            </div>
            {/* <div>
              <h1 className="text-2xl my-2 border-b w-fit">BIM Staffings</h1>
              <p className="tracking-widest text-gray-400 text-justify">
                At SWIFTERZ we have trained professors who are dedicated to
                train the next generation of BIM experts. We provide
                comprehensive staffing solutions for all BIM services. At
                SWIFTERS, we recruit and train aspiring BIM professionals to
                ensure proficiency in their respective domain, and further align
                them with the specific staffing needs for each company. To be
                precise, we offer minimum 20 profiles for each level of BIM
              </p>
            </div> */}
            {/* <p className="text-center text-sm">
              To know more about our services, please reach out to us{" "}
              <a
                href="mailto:bim@swifterz.co"
                className="text-blue-600 underline"
              >
                bim@swifterz.co
              </a>
            </p> */}
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="flex flex-col justify-start items-start gap-5 md:ml-10 p-4">
            {/* <div>
              <h1 className="text-2xl my-2 border-b w-fit">
                What we do (services)
              </h1>
              <ul className="list-decimal list-inside text-gray-400 text-lg space-y-1">
                <li>BIM Services</li>
                <li>BIM Staffings</li>
              </ul>
            </div> */}
            {/* <div>
              <h1 className="text-2xl my-2 border-b w-fit">BIM Services</h1>
              <p className="tracking-widest text-gray-400 text-justify">
                At SWIFTERZ our team leverages decades of expertise to offer a
                comprehensive suite of BIM services. Our professionals provide
                an end to end execution of each project that ranges from the
                design stage of the project to finalizing the structure and
                validation to procurement of items and construction of the
                design. Our speciality lies in precision and efficiency in
                project execution and delivering the best value for money along
                with client satisfaction.
              </p>
            </div> */}
            <div className="flex gap-5 justify-between flex-col">
              <h1 className="text-2xl my-2 border-b w-fit">BIM Staffings</h1>
              <p className="tracking-widest text-gray-400 text-justify">
                At SWIFTERZ we have trained professors who are dedicated to
                train the next generation of BIM experts. We provide
                comprehensive staffing solutions for all BIM services. At
                SWIFTERS, we recruit and train aspiring BIM professionals to
                ensure proficiency in their respective domain, and further align
                them with the specific staffing needs for each company. To be
                precise, we offer minimum 20 profiles for each level of BIM
              </p>
            </div>
          </div>
          <div className="flex justify-center ">
            <img
              src={staffing}
              alt="swifterz"
              className="max-w-full p-5 w-[600px] h-[400px]  object-cover"
            />
          </div>
        </div>
      </div>
      <p className="text-center my-5 text-sm">
        To know more about our services, please reach out to us{" "}
        <a href="mailto:bim@swifterz.co" className="text-blue-600 underline">
          bim@swifterz.ae
        </a>
      </p>
      <Footer />
    </main>
  );
};

export default About;
