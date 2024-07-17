import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
  Card,
  Input,
  List,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import { FaArrowLeft, FaChevronUp } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { api } from "../../utils/api";
import { useAuth } from "../../context/AuthContext";
import Swal from "sweetalert2";

function Icon({ id, open }) {
  return (
    <FaChevronUp
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    />
  );
}

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

const SelectedStaffings = () => {
  const { user } = useAuth();
  const userId = user?.userId;
  const [selectedStaffs, setSelectedStaffs] = useState([]);
  const [formStates, setFormStates] = useState({});
  const [open, setOpen] = useState(0);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state) {
      setSelectedStaffs(location.state);
      const initialFormStates = location.state.reduce((acc, value, index) => {
        acc[index] = {
          title: value.title,
          area: value.area,
          location: "",
          experience: "",
          budget: "",
          type_of_hiring: "",
          resources_required: "",
          contract_duration: "",
        };
        return acc;
      }, {});
      setFormStates(initialFormStates);
    }
  }, [location.state]);

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    setFormStates((prevStates) => ({
      ...prevStates,
      [index]: {
        ...prevStates[index],
        [name]: value,
      },
    }));
  };

  const handleSelectChange = (value, index, name) => {
    setFormStates((prevStates) => ({
      ...prevStates,
      [index]: {
        ...prevStates[index],
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (event, index) => {
    event.preventDefault();
    setLoading(true);
    const formData = formStates[index];

    if (!userId) {
      Swal.fire({
        position: "top",
        title: "Please login to continue",
        icon: "warning",
      });
      return navigate('/login');
    }

    await api
      .post(`/api/staffing_request/${userId}`, formData)
      .then((res) => {
        setLoading(false);
        Swal.fire({
          position: "top",
          title: res.data.message,
          // text: "Submitted Succesfull, We will reach you out soon!",
          icon: "success",
        });
        // alert(res.data.message);
        setFormStates((prevStates) => ({
          ...prevStates,
          [index]: {
            location: "",
            experience: "",
            budget: "",
            type_of_hiring: "",
            resources_required: "",
            contract_duration: "",
          },
        }));
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response.data);
      });
  };

  const handleOpen = (value) => setOpen(open === value ? -1 : value);

  const handleNavigateBack = () => {
    window.history.back();
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <button
        className=" flex items-center w-fit m-5 gap-4 text-blue-800 bg-white py-1 px-2 rounded-sm left-20 top-10"
        // to={"/"}
        onClick={handleNavigateBack}
      >
        <FaArrowLeft />
        Go Back
      </button>
      <div className="md:p-10">
        <h1 className="text-center text-2xl">Selected Profiles</h1>
        <Typography variant="small" className="text-base text-center">
          {selectedStaffs.length} profile(s) selected
        </Typography>
        <Card className="md:w-[80%] mx-auto my-5 h-fit max-h-] p-5 overflow-y-auto">
          {selectedStaffs.length === 0 && (
            <Typography variant="paragraph" className="text-center ">
              No Profiles Selected
            </Typography>
          )}

          <List>
            {selectedStaffs &&
              selectedStaffs.map((service, index) => (
                <Accordion
                  className="mb-2 rounded-lg border border-blue-gray-100 px-4"
                  key={index}
                  open={open === index}
                  icon={<Icon id={index} open={open} />}
                  animate={CUSTOM_ANIMATION}
                >
                  <AccordionHeader
                    onClick={() => handleOpen(index)}
                    className={`border-b-0 transition-colors ${
                      open === index ? "text-blue-500 hover:!text-blue-700" : ""
                    }`}
                  >
                    <div className="flex gap-1 md:gap-5">
                      <h1 className="text-lg">{service.area}</h1>
                      <Typography variant="paragraph">
                        {service.title}
                      </Typography>
                    </div>
                  </AccordionHeader>
                  <AccordionBody>
                    <form
                      className="mt-8 mb-2"
                      onSubmit={(event) => handleSubmit(event, index)}
                    >
                      <div className="mb-1 flex flex-col md:grid grid-cols-2 gap-4 md:gap-6">
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 col-span-2">
                          <Input
                            color="blue"
                            type="text"
                            size="lg"
                            required
                            label="Required Experience (In Years)"
                            name="experience"
                            value={formStates[index]?.experience || ""}
                            onChange={(event) => handleChange(event, index)}
                          />
                          <Input
                            color="blue"
                            required
                            type="text"
                            size="lg"
                            label="Budget"
                            name="budget"
                            value={formStates[index]?.budget || ""}
                            onChange={(event) => handleChange(event, index)}
                            icon={<FaIndianRupeeSign />}
                          />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 col-span-2">
                          <Input
                            color="blue"
                            required
                            type="text"
                            size="lg"
                            label="Location"
                            name="location"
                            value={formStates[index]?.location || ""}
                            onChange={(event) => handleChange(event, index)}
                          />
                          <Input
                            color="blue"
                            required
                            type="text"
                            size="lg"
                            label="Contract Duration"
                            name="contract_duration"
                            value={formStates[index]?.contract_duration || ""}
                            onChange={(event) => handleChange(event, index)}
                          />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 col-span-2">
                          <Select
                            color="blue"
                            label={
                              <>
                                Type Of Hiring
                                <span className="inline-block text-red-500 ml-0.5">
                                  *
                                </span>
                              </>
                            }
                            name="type_of_hiring"
                            value={formStates[index]?.type_of_hiring || ""}
                            onChange={(e) =>
                              handleSelectChange(e, index, "type_of_hiring")
                            }
                          >
                            <Option value="Only Resource">Only Resource</Option>
                            <Option value="Resource With Hardware and Software">
                              Resource with Hardware and Software
                            </Option>
                          </Select>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 col-span-2">
                          <Input
                            label="How Many Resources Required?"
                            required
                            color="blue"
                            name="resources_required"
                            value={formStates[index]?.resources_required || ""}
                            onChange={(event) => handleChange(event, index)}
                          />
                        </div>
                      </div>

                      <Button
                        loading={loading}
                        disabled={loading}
                        className="mt-6 hover:shadow-none hover:opacity-90"
                        color="light-blue"
                        fullWidth
                        type="submit"
                      >
                        Submit
                      </Button>
                    </form>
                  </AccordionBody>
                </Accordion>
              ))}
          </List>
        </Card>
      </div>
      <Footer />
    </main>
  );
};

export default SelectedStaffings;
