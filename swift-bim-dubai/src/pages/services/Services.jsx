import { useNavigate } from "react-router-dom";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import { useEffect, useState } from "react";
import {
  assembleSpecializations,
  designSpecializations,
  executionSpecializations,
  operateSpecializations,
  procureSpecializations,
  valuateSpecializations,
} from "../../data/constants.js";
import { Button, Card, Checkbox, Typography } from "@material-tailwind/react";
import { useAuth } from "../../context/AuthContext";
import bimBg from "../../assets/bg_img.jpeg";

const Services = () => {
  const { user, selectedCategory, setSelectedCategory } = useAuth();
  // const [open, setOpen] = useState(false);

  const userId = user?.userId;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    country: "",
    companyName: "",
    description: "",
    services: [],
    projectType: "",
    category: "",
  });

  const [selectServcie, setSelectedService] = useState(false);

  const [title, setTitle] = useState("Design");

  const [data, setData] = useState(designSpecializations);

  const handleOpenDesign = () => {
    setSelectedCategory("Design");
    setFormData({ ...formData, category: "design" });
    setTitle("Design");
    const designServices = designSpecializations.map((specialization) => ({
      ...specialization,
      category: "Design",
    }));
    setData(designServices);
    // setOpenModal(true);
  };
  const handleOpenValuate = () => {
    setSelectedCategory("Valuate");
    setFormData({ ...formData, category: "valuate" });

    setTitle("Valuate");
    const valuateServices = valuateSpecializations.map((specialization) => ({
      ...specialization,
      category: "Valuate",
    }));
    setData(valuateServices);
    // setOpenModal(true);
  };
  const handleOpenProcure = () => {
    setSelectedCategory("Procure");
    setFormData({ ...formData, category: "procure" });

    setTitle("Procure");
    const procureServices = procureSpecializations.map((specialization) => ({
      ...specialization,
      category: "Procure",
    }));
    setData(procureServices);
    // setOpenModal(true);
  };
  const handleOpenAssemble = () => {
    setSelectedCategory("Assemble");
    setFormData({ ...formData, category: "assemble" });

    setTitle("Assemble");
    const assembleServices = assembleSpecializations.map((specialization) => ({
      ...specialization,
      category: "Assemble",
    }));
    setData(assembleServices);
    // setOpenModal(true);
  };
  const handleOpenExecution = () => {
    setSelectedCategory("Execution");
    setFormData({ ...formData, category: "execution" });

    setTitle("Execution");
    const executionServices = executionSpecializations.map(
      (specialization) => ({
        ...specialization,
        category: "Execution",
      })
    );
    setData(executionServices);
    // setOpenModal(true);
  };
  const handleOpenOperation = () => {
    setSelectedCategory("Operation");
    setFormData({ ...formData, category: "operation" });

    setTitle("Operation");
    const operateServices = operateSpecializations.map((specialization) => ({
      ...specialization,
      category: "Operations",
    }));
    setData(operateServices);
    // setOpenModal(true);
  };

  const handleNavigate = (data) => {
    navigate(`/services/${data.name}`, { state: data });
  };

  const handleServiceChange = (event) => {
    const { value, checked } = event.target;

    if (value === "selectAll") {
      if (checked) {
        setFormData({ ...formData, services: data });
      } else {
        setFormData({ ...formData, services: [] });
      }
    } else {
      const updatedServices = checked
        ? [...formData.services, data.find((item) => item.name === value)]
        : formData.services.filter((service) => service.name !== value);
      setFormData({ ...formData, services: updatedServices });
    }
  };

  const handleNavigateServicesList = (data) => {
    if (userId) {
      navigate(`/request-list`, { state: data });
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    switch (selectedCategory) {
      case "Design":
        handleOpenDesign();
        break;
      case "Valuate":
        handleOpenValuate();
        break;
      case "Assemble":
        handleOpenAssemble();
        break;
      case "Procure":
        handleOpenProcure();
        break;
      case "Execution":
        handleOpenExecution();
        break;
      case "Operation":
        handleOpenOperation();
        break;

      default:
        break;
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div
        className="p-5 flex flex-col my-4 bg-center bg-cover bg-fixed bg-no-repeat"
        style={{ backgroundImage: `url('${bimBg}')` }}
      >
        <h1 className="text-center text-3xl">Select Services</h1>
        <div className="md:grid flex flex-col grid-cols-5 p-5 gap-5 md:w-screen">
          <div>
            <ul className="flex col-span-1 flex-col gap-5 rounded-2xl p-5 text-black backdrop-blur-lg bg-blue-500/80">
              <li
                onClick={handleOpenDesign}
                onMouseEnter={handleOpenDesign}
                className={`hover:bg-white ${
                  selectedCategory === "Design"
                    ? "bg-white text-black"
                    : "text-white "
                } hover:text-black cursor-pointer px-5 py-2 duration-200 rounded-sm `}
              >
                Design
              </li>
              <li
                onClick={handleOpenValuate}
                onMouseEnter={handleOpenValuate}
                className={`hover:bg-white ${
                  selectedCategory === "Valuate"
                    ? "bg-white text-black"
                    : "text-white "
                } hover:text-black cursor-pointer px-5 py-2 duration-200 rounded-sm `}
              >
                Valuate
              </li>
              <li
                onClick={handleOpenProcure}
                onMouseEnter={handleOpenProcure}
                className={`hover:bg-white ${
                  selectedCategory === "Procure"
                    ? "bg-white text-black"
                    : "text-white "
                } hover:text-black cursor-pointer px-5 py-2 duration-200 rounded-sm `}
              >
                Procure
              </li>
              <li
                onClick={handleOpenAssemble}
                onMouseEnter={handleOpenAssemble}
                className={`hover:bg-white ${
                  selectedCategory === "Assemble"
                    ? "bg-white text-black"
                    : "text-white "
                } hover:text-black cursor-pointer px-5 py-2 duration-200 rounded-sm `}
              >
                Assemble
              </li>
              <li
                onClick={handleOpenExecution}
                onMouseEnter={handleOpenExecution}
                className={`hover:bg-white ${
                  selectedCategory === "Execution"
                    ? "bg-white text-black"
                    : "text-white "
                } hover:text-black cursor-pointer px-5 py-2 duration-200 rounded-sm `}
              >
                Execution
              </li>
              <li
                onClick={handleOpenOperation}
                onMouseEnter={handleOpenOperation}
                className={`hover:bg-white ${
                  selectedCategory === "Operation"
                    ? "bg-white text-black"
                    : "text-white "
                } hover:text-black cursor-pointer px-5 py-2 duration-200 rounded-sm `}
              >
                Operation
              </li>
            </ul>
          </div>
          <div className="col-span-4 mx-auto w-[90%] bg-white backdrop-blur-sm  p-5 rounded-2xl items-start">
            <div className="flex md:flex-row flex-col justify-between items-start ">
              <div className="flex md:flex-row flex-col justify-between gap-5 p-2 w-full items-center">
                <h1 className="text-center text-2xl font-semibold">
                  {title} Services
                </h1>
                {selectServcie && (
                  <p className="text-base ">
                    {formData.services.length} service(s) selected
                  </p>
                )}
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  {selectServcie && (
                    <div className="flex items-center">
                      <Checkbox
                        color="light-blue"
                        id="select-all"
                        checked={formData.services.length === data.length}
                        ripple={false}
                        onChange={handleServiceChange}
                        value="selectAll"
                      />
                      <label
                        htmlFor="select-all"
                        className="text-base select-none my-auto font-normal"
                      >
                        {formData.services.length === data.length
                          ? "Unselect"
                          : "Select"}{" "}
                        All
                      </label>
                    </div>
                  )}
                  <Button
                    size="sm"
                    color="light-blue"
                    onClick={() => setSelectedService(!selectServcie)}
                  >
                    Select Service(s)
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid gap-5 w-full p-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 items-center content-center">
              {selectServcie &&
                data &&
                data.map((item) => (
                  <Card
                    className=" flex h-full cursor-pointer w-full items-center bg-primary justify-center text-sm rounded-lg p-1"
                    key={item.name}
                  >
                    <label
                      htmlFor={item.name}
                      className="flex w-full gap-1 cursor-pointer text-white items-center"
                    >
                      <Checkbox
                        checked={formData.services.some(
                          (service) => service.name === item.name
                        )}
                        value={item.name}
                        id={item.name}
                        ripple={false}
                        className="hover:before:opacity-0"
                        containerProps={{
                          className: "p-0 p-1",
                        }}
                        color="light-blue"
                        onChange={handleServiceChange}
                      />

                      <Typography className="text-center p-2" variant="small">
                        {item.name}
                      </Typography>
                    </label>
                  </Card>
                ))}
              {data &&
                !selectServcie &&
                data.map((item) => (
                  <Card
                    onClick={() => handleNavigate(item)}
                    key={item.name}
                    color="gray"
                    shadow={false}
                    className=" flex h-full cursor-pointer w-full items-center bg-primary justify-center text-sm rounded-lg p-1"
                  >
                    <Typography className="text-center p-2" variant="small">
                      {item.name}
                    </Typography>
                  </Card>
                ))}
            </div>
            {selectServcie && (
              <div className="p-2 flex gap-3 justify-end">
                <Button
                  size="sm"
                  color="red"
                  className="w-fit"
                  onClick={() => {
                    setSelectedService(false);
                    setFormData({ ...formData, services: [] });
                  }}
                >
                  Cancel
                </Button>
                <Button
                  size="sm"
                  color="green"
                  className="w-fit"
                  onClick={() => handleNavigateServicesList(formData.services)}
                  disabled={formData.services.length === 0}
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
