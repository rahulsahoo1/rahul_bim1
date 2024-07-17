import { Link, useLocation } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Chip,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import { FaArrowLeft } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { api } from "../../utils/api";
import { useAuth } from "../../context/AuthContext";
import Swal from "sweetalert2";
import Footer from "../../components/layout/Footer";

const StaffingDetails = () => {
  const { user } = useAuth();
  const userId = user?.userId;
  const [serviceData, setServiceData] = useState({});

  const [formData, setFormData] = useState({
    title: "",
    area: "",
    location: "",
    experience: "",
    budget: "",
    type_of_hiring: "",
    resources_required: "",
    contract_duration: "",
  });

  const [loading, setLoading] = useState(false);

  const location = useLocation();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    await api
      .post(`/api/staffing_request/${userId}`, formData)
      .then((res) => {
        Swal.fire({
          position: "top",
          title: res.data.message,
          // text: "Submitted Succesfull, We will reach you out soon!",
          icon: "success",
        });
        setLoading(false);
        setFormData({
          location: "",
          experience: "",
          budget: "",
          type_of_hiring: "",
          resources_required: "",
          contract_duration: "",
        });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response.data);
      });
  };

  const handleNavigateBack = () => {
    window.history.back();
  };

  useEffect(() => {
    if (location.state) {
      setFormData({
        ...formData,
        title: location.state.title,
        area: location.state.area,
      });
      setServiceData(location.state);
    }
  }, [location.state]);

  return (
    <main className="min-h-screen">
      <Navbar />
      <button
        className=" flex items-center w-fit m-5 gap-4 text-blue-800 bg-white py-1 px-2 rounded-sm left-20 top-10"
        // to={"/"}
        onClick={handleNavigateBack}
      >
        <FaArrowLeft />
        Go to Home
      </button>
      <div className="md:grid flex flex-col grid-cols-5 h-full gap-5 m-5 md:m-10">
        <div className="mx-auto border shadow-lg flex flex-col gap-4 justify-evenly rounded-md col-span-3 h-full p-5 md:p-10 w-full">
          <div>
            <h4 className="text-2xl">Job Details of {serviceData.title}:</h4>
            <p className="text-base mx-2 md:mx-5 mt-5 text-justify text-gray-700">
              {serviceData.jobPurpose}
            </p>
          </div>
          <div>
            <h4 className="text-2xl">Job Accountabilities</h4>
            <p className="text-base mx-2 md:mx-5 mt-2 text-justify text-gray-700">
              <ul className="list-disc text-sm">
                {serviceData.jobAccountabilities &&
                  serviceData?.jobAccountabilities.map((jobAc, index) => (
                    <li className="my-2" key={index}>
                      {jobAc}
                    </li>
                  ))}
              </ul>
            </p>
          </div>
          <div>
            <h4 className="text-2xl">Knowledge and Skills</h4>
            <p className="text-base m-2 md:mx-5 mt-2 flex md:flex-row flex-col flex-wrap gap-2 text-gray-700">
              {serviceData.skills &&
                serviceData?.skills.map((skill, index) => (
                  <Chip
                    value={skill}
                    variant="ghost"
                    key={index}
                    className="w-fit"
                  />
                ))}
            </p>
          </div>
        </div>
        <div className="m-10 w-[90%] col-span-2 mx-auto text-center">
          <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
              Choose your Required Profile
            </Typography>

            <form className="mt-8 mb-2 " onSubmit={handleSubmit}>
              <div className="mb-1 flex flex-col md:grid grid-cols-2 gap-4 md:gap-6">
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 col-span-2">
                  <Input
                    type="text"
                    size="lg"
                    required
                    // placeholder="India"
                    color="light-blue"
                    label="Required Experience (In Years)"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                  />
                  <Input
                    required
                    type="text"
                    size="lg"
                    // placeholder="India"
                    color="light-blue"
                    label="Budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    icon={<FaIndianRupeeSign />}
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 col-span-2">
                  <Input
                    required
                    type="text"
                    size="lg"
                    // placeholder="India"
                    color="light-blue"
                    label="Location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                  />
                  <Input
                    required
                    type="text"
                    size="lg"
                    // placeholder="India"
                    color="light-blue"
                    label="Contract Duration"
                    name="contract_duration"
                    value={formData.contract_duration}
                    onChange={handleChange}
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
                    value={formData.type_of_hiring}
                    onChange={(e) =>
                      setFormData({ ...formData, type_of_hiring: e })
                    }
                  >
                    <Option value="Only Resouce">Only Resource</Option>
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
                    value={formData.resources_required}
                    onChange={handleChange}
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
          </Card>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default StaffingDetails;
