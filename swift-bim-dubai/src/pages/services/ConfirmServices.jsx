import {
  Button,
  Card,
  Chip,
  IconButton,
  Input,
  List,
  ListItem,
  ListItemSuffix,
  Option,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import { useAuth } from "../../context/AuthContext";
import Swal from "sweetalert2";

const ConfirmServices = () => {
  const { user } = useAuth();
  const userId = user?.userId;

  const [formData, setFormData] = useState({
    country: "",
    companyName: "",
    description: "",
    services: [],
    projectType: "",
    selectedDate: "",
    selectedSlot: "",
  });

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

  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitService = async (event) => {
    event.preventDefault();
    const postData = new FormData();

    const selectedServices = formData.services.map((service) => ({
      name: service.name,
      category: service.category,
    }));

    postData.append("country", formData.country);
    postData.append("company_name", formData.companyName);
    postData.append("project_description", formData.description);
    postData.append("service_types", JSON.stringify(selectedServices));
    // postData.append("service_types", formData.services);
    postData.append("project_type", formData.projectType);
    postData.append("booking_date", formData.selectedDate);
    postData.append("booking_time_slot", formData.selectedSlot);

    if (!formData.selectedSlot) return setSlotError(true);

    // console.log(selectedServices);

    if (!userId) {
      Swal.fire({
        position: "top",
        title: "Please login to continue",
        icon: "warning",
      });
      return navigate("/login");
    }
    await api
      .post(`/api/service_request/${userId}`, postData)
      .then((res) => {
        setSlotError(false);
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

  const handleDeleteService = (id) => {
    const filteredServices = formData.services.filter((_, i) => i !== id);
    setFormData({ ...formData, services: filteredServices });
  };

  useEffect(() => {
    if (location.state) {
      console.log(location.state);
      setFormData({ ...formData, services: location.state });
    }
  }, [location.state]);

  return (
    <main className="relative min-h-screen">
      <Link
        className="absolute flex items-center gap-4 text-blue-800 bg-white py-1 px-2 rounded-sm md:left-20 top-28  left-10 md:top-28"
        to={"/"}
      >
        <FaArrowLeft />
        Go to Home
      </Link>
      <Navbar />
      {/* <div className="p-10">
        <h1 className="text-center text-2xl">Selected Services</h1>
        <Typography variant="small" className="text-base text-center">
          {formData.services.length} service(s) selected
        </Typography>
        <Card className="w-[80%] mx-auto my-5 h-fit max-h-[50vh] overflow-y-auto">
          {formData.services.length === 0 && (
            <Typography variant="paragraph" className="text-center ">
              No Services Selected
            </Typography>
          )}
          <List>
            {formData.services &&
              formData.services.map((service, index) => (
                <ListItem ripple={false} className="py-1 pr-1 pl-4" key={index}>
                  {service}
                  <ListItemSuffix>
                    <IconButton
                      variant="text"
                      color="blue-gray"
                      onClick={() => handleDeleteService(index)}
                      className="text-red-500"
                    >
                      <FaTrashAlt />
                    </IconButton>
                  </ListItemSuffix>
                </ListItem>
              ))}
          </List>
        </Card>
      </div> */}

      <div className="md:w-[50%] w-[90%] mx-auto mt-20 md:mt-10">
        <Typography variant="h4" color="blue-gray" className="text-center">
          Request a Service
        </Typography>
        <form className="my-2" onSubmit={handleSubmitService}>
          <div className="mb-1 flex flex-col md:grid grid-cols-2 gap-4 md:gap-6">
            <div className="flex flex-col md:flex-r  gap-4 md:gap-6 col-span-2">
              <Input
                required
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
                required
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
            <div className="flex flex-col md:flex-row  gap-4 md:gap-6 col-span-2">
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
            <h1>Selected services</h1>
            <div className="flex gap-4 flex-wrap col-span-2">
              {formData.services && formData.services.length > 0 ? (
                formData.services.map((service, index) => (
                  <Chip
                    size="sm"
                    value={service.name}
                    variant="ghost"
                    key={service.name}
                    onClose={() => handleDeleteService(index)}
                  />
                ))
              ) : (
                <Typography variant="paragraph" className="text-center ">
                  No Services Selected
                </Typography>
              )}
            </div>
            <div className="col-span-2">
              <Select
                required
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
              <div className="col-span-2 flex gap-2 flex-wrap items-center justify-start">
                <h1>Select Slot:</h1>
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
                          setFormData({ ...formData, selectedSlot: slot });
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
            )}
            {slotError && (
              <Typography
                variant="paragraph"
                color="red"
                className="text-center font-semibold -mt-5 mx-auto col-span-2"
              >
                Please select a slot!
              </Typography>
            )}
          </div>

          <div className="col-span-2 flex gap-6">
            {/* <Button
              onClick={() => {
                // setOpenForm(false);
                // setOpenModal(true);
              }}
              className="mt-6 hover:shadow-none hover:opacity-90"
              color="red"
              fullWidth
              type="button"
            >
              Cancel
            </Button> */}
            <Button
              disabled={formData.services <= 0}
              className="mt-6 hover:shadow-none hover:opacity-90"
              color="light-blue"
              fullWidth
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
      <Footer />
    </main>
  );
};

export default ConfirmServices;
