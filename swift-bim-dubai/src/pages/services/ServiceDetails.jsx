import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Chip,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { services } from "../../data/constants";
import { useAuth } from "../../context/AuthContext";
import { FaArrowLeft } from "react-icons/fa";
import MetaData from "../../utils/MetaData";
import Swal from "sweetalert2";
import { api } from "../../utils/api";

const ServiceDetails = () => {
  const { isAuthenticated, user } = useAuth();
  const userId = user?.userId;
  const [serviceData, setServiceData] = useState({});
  const [availableSlots, setAvailableSlots] = useState([]);

  const [slotError, setSlotError] = useState(false);

  const getAvailableSlots = async (date) => {
    await api
      .get("/api/available_slots", { params: { date: date } })
      .then((response) => {
        // console.log(response.data);
        setAvailableSlots(response.data.available_slots);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const [formData, setFormData] = useState({
    country: "",
    companyName: "",
    description: "",
    service: "",
    projectType: "",
    selectedDate: "",
    category: "",
  });

  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!userId) {
      Swal.fire({
        position: "top",
        title: "Please login to continue",
        icon: "warning",
      });
      return navigate("/login");
    }

    const postData = new FormData();
    const selectedService = [
      { name: formData.service, category: formData.category },
    ];

    // console.log(selectedService);

    postData.append("country", formData.country);
    postData.append("company_name", formData.companyName);
    postData.append("project_description", formData.description);
    postData.append("service_types", JSON.stringify(selectedService));
    postData.append("project_type", formData.projectType);
    postData.append("booking_date", formData.selectedDate);
    postData.append("booking_time_slot", formData.selectedSlot);

    await api
      .post(`/api/service_request/${userId}`, postData)
      .then((res) => {
        navigate("/");
        Swal.fire({
          position: "top",
          title: res.data.message,
          icon: "success",
        });

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: 0,
          country: "",
          companyName: "",
          description: "",
          // services: [],
          projectType: "",
        });
      })
      .catch((err) => {
        alert(err.response.data.error);
      });
  };

  useEffect(() => {
    if (location.state) {
      setFormData({
        ...formData,
        service: location.state.name,
        category: location.state.category,
      });
      setServiceData(location.state);
    }
  }, [location.state]);

  return (
    <main>
      <MetaData title={`${serviceData.name} | Swift Bim`} />
      <Navbar />
      <Link
        className="w-fit flex items-center m-5 gap-4 text-blue-800 bg-white py-1 px-2 rounded-sm left-20 top-10"
        to={"/"}
      >
        <FaArrowLeft />
        Go to Home
      </Link>
      <div className="md:grid flex flex-col grid-cols-5 h-full gap-5 m-5 md:m-10">
        <div className="col-span-3 ">
          <img
            src={serviceData.img}
            alt={serviceData.name}
            className="rounded-lg w-full mx-auto h-[70vh] shadow-lg object-cover"
          />
          <h1 className="text-3xl text-center m-2">{serviceData.name}</h1>
        </div>
        <div className="mx-auto border shadow-lg flex flex-col gap-4 justify-evenly rounded-md col-span-2 h-full p-5 md:p-10 w-full">
          <div>
            <h4 className="text-2xl">About {serviceData.name}:</h4>
            <p className="text-base mx-2 md:mx-5 mt-5 text-justify text-gray-700">
              {serviceData.desc}
            </p>
          </div>
          {serviceData.benefits && (
            <div>
              <h4 className="text-2xl">
                Benefits of {serviceData.name} in BIM:
              </h4>
              <p className="text-base mx-2 md:mx-5 mt-2 text-justify text-gray-700">
                <ul className="list-disc">
                  {serviceData.benefits &&
                    serviceData.benefits.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                </ul>
              </p>
            </div>
          )}
          {serviceData.tools && (
            <div>
              <h4 className="text-2xl">Tools used in {serviceData.name}:</h4>
              <p className="text-base m-2 md:mx-5 mt-2 flex md:flex-row flex-wrap flex-col gap-2 text-gray-700">
                {serviceData.tools.map((tool) => (
                  <Chip key={tool} value={tool} variant="ghost" />
                ))}
              </p>
            </div>
          )}
        </div>
      </div>
      {isAuthenticated ? (
        <div className="m-10 w-[90%] md:w-[50%] mx-auto text-center">
          <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
              Request a Service
            </Typography>
            {/* <Typography color="gray" className="mt-1 font-normal">
              Nice to meet you! Enter your details to register.
            </Typography> */}
            <form className="mt-8 mb-2 " onSubmit={handleSubmit}>
              <div className="mb-1 flex flex-col md:grid grid-cols-2 gap-4 md:gap-6">
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 col-span-2">
                  <Input
                    type="text"
                    size="lg"
                    placeholder="ABC Company"
                    color="light-blue"
                    label="Company Name"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                  <Input
                    type="text"
                    size="lg"
                    placeholder="India"
                    color="light-blue"
                    label="Country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 col-span-2">
                  <Textarea
                    type="text"
                    size="lg"
                    color="light-blue"
                    className="col-span-2"
                    label="Describe about your Project"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 col-span-2">
                  <Select
                    value={formData.service}
                    label="Service Type"
                    color="light-blue"
                    name="service"
                    onChange={(value) => {
                      setFormData({
                        ...formData,
                        // service: [{ name: value, category: formData.category }],
                        service: value,
                      });
                    }}
                  >
                    {services.map((service) => (
                      <Option
                        key={service.serviceName}
                        value={service.serviceName}
                      >
                        {service.serviceName}
                      </Option>
                    ))}
                  </Select>
                  <Select
                    value={formData.projectType}
                    label="Project Type"
                    color="light-blue"
                    onChange={(value) =>
                      setFormData({ ...formData, projectType: value })
                    }
                  >
                    <Option value="New Construction">New Construction</Option>
                    <Option value="Renovation">Renovation</Option>
                  </Select>
                </div>
                <div className="col-span-2">
                  <Input
                    min={new Date().toISOString().split("T")[0]}
                    type="date"
                    required
                    value={formData.selectedDate}
                    label="Select Date"
                    color="light-blue"
                    onChange={(e) => {
                      getAvailableSlots(e.target.value);
                      setFormData({
                        ...formData,
                        selectedDate: e.target.value,
                      });
                    }}
                  />
                </div>

                {formData.selectedDate !== "" && (
                  <div className="col-span-2 ">
                    <h1 className="my-2">Select Slot:</h1>
                    <div className="flex gap-2 flex-wrap items-center justify-start">
                      {availableSlots &&
                        availableSlots.map((slot) =>
                          formData.selectedSlot === slot ? (
                            <Chip
                              onClick={() => {
                                setFormData({ ...formData, selectedSlot: "" });
                                setSlotError(true);
                              }}
                              size="lg"
                              value={slot}
                              variant="filled"
                              key={slot}
                              className="cursor-pointer"
                            />
                          ) : (
                            <Chip
                              onClick={() => {
                                setFormData({
                                  ...formData,
                                  selectedSlot: slot,
                                });
                                {
                                  if (formData.selectedSlot === "") {
                                    setSlotError(false);
                                  }
                                }
                              }}
                              size="lg"
                              value={slot}
                              variant="outlined"
                              key={slot}
                              className="cursor-pointer"
                            />
                          )
                        )}
                    </div>
                  </div>
                )}
                {slotError && (
                  <Typography
                    variant="paragraph"
                    color="red"
                    className="text-center font-semibold  -mt-5 mx-auto col-span-2"
                  >
                    Please select a slot!
                  </Typography>
                )}
              </div>

              <Button
                className="mt-6 hover:shadow-none hover:opacity-90"
                color="light-blue"
                fullWidth
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Card>
        </div>
      ) : (
        // <div className="w-full bg-black">
        <Link
          to={"/login"}
          className="mx-auto ml-[20%] my-10 md:ml-[45%] bg-blue-500 md:text-2xl text-white p-2 rounded-sm"
        >
          Login to Request a Service
        </Link>
        // </div>
      )}
    </main>
  );
};

export default ServiceDetails;
