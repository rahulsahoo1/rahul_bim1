import { Button, Input, Textarea } from "@material-tailwind/react";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import { useState } from "react";
import { api } from "../utils/api";
import Swal from "sweetalert2";
import contact from "../assets/contact.webp";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const handleContact = (event) => {
    setLoading(true);
    event.preventDefault();
    api
      // .post("https://formspree.io/f/mdoqbvpw", contactForm)
      .post("/api/contact_us", contactForm)
      .then((res) => {
        setLoading(false);
        Swal.fire({
          title: "Thank you for contacting us",
          // text: "Submitted Succesfull, We will reach you out soon!",
          text: res.data.message,
          icon: "success",
        });
        setContactForm({
          name: "",
          email: "",
          phone: 0,
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.response);
      });
  };

  return (
    <main className="min-h-screen bg-primary text-white flex flex-col">
      <Navbar />
      <h1 className="mx-auto text-4xl border-b my-6 md:mt-16 font-semibold">
        Contact Us
      </h1>
      <div className="flex-1 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="flex justify-center">
            <img src={contact} alt="swifterz" className="w-[90%] h-[90%]" />
          </div>
          <div className="flex items-center w-full p-4 mb-10">
            <div className=" bg-white w-full md:w-[50vw] p-5 rounded-md md:mr-5">
              <form
                className="grid gap-5 grid-cols-2"
                // action="https://formspree.io/f/mdoqbvpw"
                // method="POST"
                onSubmit={handleContact}
              >
                <div className="col-span-2 flex flex-col md:flex-row gap-5">
                  <Input
                    placeholder="Enter your name"
                    required
                    name="name"
                    label="Name"
                    color="blue-gray"
                    value={contactForm.name}
                    onChange={handleContactChange}
                  />
                </div>
                <div className="col-span-2 flex flex-col md:flex-row gap-5">
                  <Input
                    placeholder="Enter your Email"
                    required
                    name="email"
                    label="Email"
                    color="blue-gray"
                    value={contactForm.email}
                    onChange={handleContactChange}
                  />
                </div>
                <div className="col-span-2 flex flex-col md:flex-row gap-5">
                  <Input
                    placeholder="Enter your Phone Number"
                    maxLength={10}
                    required
                    name="phone"
                    type="tel"
                    label="Phone"
                    color="blue-gray"
                    value={contactForm.phone}
                    onChange={handleContactChange}
                  />
                </div>
                <div className="col-span-2 w-full">
                  <Textarea
                    name="message"
                    label="Message"
                    color="blue-gray"
                    value={contactForm.message}
                    onChange={handleContactChange}
                  />
                </div>
                <Button
                  disabled={loading}
                  loading={loading}
                  type="submit"
                  className="col-span-2"
                  color="blue"
                >
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ContactUs;
