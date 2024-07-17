import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { staffings } from "../../data/constants";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FaArrowLeft } from "react-icons/fa";

const Staffings = () => {
  const { user } = useAuth();
  const [searchStaff, setSearchStaff] = useState("");
  const [filterStaff, setFilterStaff] = useState("");
  const [selectStaff, setSelectStaff] = useState(false);

  const [selectedStaffs, setSelectedStaffs] = useState([]);

  const navigate = useNavigate();

  const filteredStaffings = staffings.filter(
    (staffing) =>
      staffing.title
        .toLowerCase()
        .includes(searchStaff.toLowerCase() || filterStaff.toLowerCase()) ||
      staffing.area
        .toLowerCase()
        .includes(searchStaff.toLowerCase() || filterStaff.toLowerCase())
  );

  const handleNavigateStaffing = (data) => {
    if (user?.userId) {
      navigate(`/staffing/${data.title}`, { state: data });
    } else {
      navigate("/login");
    }
  };

  const navigateSelectedStaffing = () => {
    if (user?.userId) {
      navigate(`/confirm-staffing`, { state: selectedStaffs });
    } else {
      navigate("/login");
    }
  };

  const handleNavigateBack = () => {
    window.history.back();
  };

  return (
    <>
      <Navbar />

      <div className="bg-primary p-10 ">
        <button
          className=" flex items-center w-fit m-5 gap-4 text-white py-1 px-2 rounded-sm left-20 top-10"
          // to={"/"}
          onClick={handleNavigateBack}
        >
          <FaArrowLeft />
          Go Back
        </button>
        <div className="flex justify-between lg:flex-row flex-col items-center">
          <div className="flex gap-5 items-center">
            <input
              autoFocus
              value={searchStaff}
              onChange={(e) => setSearchStaff(e.target.value)}
              type="search"
              placeholder="Search Professionals "
              className=" my-5 px-2 w-56 py-3 border-2 rounded-md border-blue-500 outline-none"
            />
            <p className="text-white">{filteredStaffings.length} items</p>
          </div>
          <div>
            <h1 className="text-4xl text-center text-white">
              Choose your Required Profile
            </h1>
            <div className="w-32 m-auto h-[1px] mt-2 mb-6 bg-gray-200 relative">
              <div className="bg-blue-500 w-[40%]  right-[50%] -translate-x-7 left-[50%] absolute -top-[1px] h-[3px]"></div>
            </div>
          </div>
          <div className="flex gap-2 flex-col md:flex-row justify-between mb-10 items-center">
            {selectedStaffs.length > 0 && (
              <button
                className="text-white bg-blue-500 px-2 py-1 rounded-lg"
                // onClick={() => setSelectStaff(!selectStaff)}
                onClick={navigateSelectedStaffing}
              >
                Next
              </button>
            )}
            {selectStaff ? (
              <button
                className="text-white bg-red-500 px-2 py-1 rounded-lg"
                onClick={() => {
                  setSelectStaff(!selectStaff);
                  setSelectedStaffs([]);
                }}
              >
                Cancel
              </button>
            ) : (
              <button
                className="text-white bg-blue-500 px-2 py-1 rounded-lg"
                onClick={() => setSelectStaff(!selectStaff)}
              >
                Select
              </button>
            )}

            <label htmlFor="filter" className="text-white">
              Filter By Type -{" "}
            </label>
            <select
              name=""
              id="filter"
              value={filterStaff}
              onChange={(e) => setFilterStaff(e.target.value)}
            >
              Select Options
              <option value="">All</option>
              <option value="BIM Coordinator">BIM Coordinator</option>
              <option value="BIM Specialist">BIM Specialist</option>
              <option value="BIM Manager">BIM Manager</option>
            </select>
          </div>
        </div>

        <div>
          <div className="w-full"></div>
          <div className="lg:grid flex flex-col grid-cols-2  2xl:grid-cols-3 gap-10">
            {!selectStaff ? (
              filteredStaffings.map((staffing, index) => (
                <div
                  key={index}
                  className={`bg-cover bg-opacity-50 p-5 backdrop-blur-md gap-5 flex md:flex-row flex-col justify-between bg-center rounded-lg object-cover bg-[url('${staffing.img}')]`}
                  style={{
                    backgroundImage: `url('${staffing.img}')`,
                  }}
                >
                  <div className="mb-0 flex flex-col justify-between items-center">
                    <div></div>
                    <div className="text-white bg-black bg-opacity-80 rounded-md backdrop-blur-sm p-2">
                      <h1 className="text-xl">{staffing.title}</h1>
                      <p className="text-sm">{staffing.area}</p>
                    </div>
                  </div>
                  <div className="bg-black md:min-w-64 h-full backdrop-blur-sm justify-between items-center text-sm rounded-lg flex p-2 flex-col bg-opacity-60 text-white">
                    <div className="mx-auto">
                      <h1 className="text-xl">Skills</h1>
                    </div>
                    <ul className="list-disc list-inside">
                      {staffing.skills.map((skill) => (
                        <li key={skill} className="text-sm my-2">
                          {skill}
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-between gap-2 text-xl">
                      <h1>Experience :</h1>
                      <p>{staffing.experience}</p>
                    </div>
                    <button
                      className="bg-blue-500 px-2 py-1 my-2 text-white rounded-md hover:bg-blue-600"
                      onClick={() => handleNavigateStaffing(staffing)}
                    >
                      View More
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <>
                {filteredStaffings.map((staffing, index) => (
                  <label
                    htmlFor={index}
                    key={index}
                    className={`bg-cover bg-opacity-50 p-5  gap-5 flex md:flex-row flex-col justify-between bg-center rounded-lg object-cover bg-[url('${staffing.img}')]`}
                    style={{
                      backgroundImage: `url('${staffing.img}')`,
                    }}
                  >
                    <input
                      type="checkbox"
                      name=""
                      id={index}
                      className="absolute w-5 h-5 border-4  border-black"
                      value={`${staffing.title}.${staffing.area}`}
                      onChange={(e) => {
                        if (e.target.checked) {
                          const title = e.target.value.split(".")[0];
                          const area = e.target.value.split(".")[1];
                          setSelectedStaffs([
                            ...selectedStaffs,
                            {
                              area: area,
                              title: title,
                            },
                          ]);
                        } else {
                          const index = selectedStaffs.indexOf(e.target.value);
                          // if (index > -1) {
                          selectedStaffs.splice(index, 1);
                          // }
                        }
                      }}
                    />
                    <div className="mb-0 flex flex-col justify-between items-center">
                      <div></div>
                      <div className="text-white bg-black bg-opacity-80 backdrop-blur-sm rounded-md p-2">
                        <h1 className="text-xl">{staffing.title}</h1>
                        <p className="text-sm">{staffing.area}</p>
                      </div>
                    </div>
                    <div className="bg-black md:min-w-64 h-full justify-between backdrop-blur-sm items-center text-sm rounded-lg flex p-2 flex-col bg-opacity-60 text-white">
                      <div className="mx-auto">
                        <h1 className="text-xl">Skills</h1>
                      </div>
                      <ul className="list-disc list-inside">
                        {staffing.skills.map((skill) => (
                          <li key={skill} className="text-sm my-2">
                            {skill}
                          </li>
                        ))}
                      </ul>
                      <div className="flex justify-between gap-2 text-xl">
                        <h1>Experience :</h1>
                        <p>{staffing.experience}</p>
                      </div>
                      <button
                        className="bg-blue-500 px-2 py-1 text-white rounded-md hover:bg-blue-600"
                        onClick={() => handleNavigateStaffing(staffing)}
                      >
                        View More
                      </button>
                    </div>
                  </label>
                ))}
              </>
            )}
            {filteredStaffings.length === 0 && (
              <div className="flex justify-center items-center w-[90vw]">
                <h1 className="text-xl  text-white">No Results Found</h1>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <div className="flex gap-2 w-fit mx-auto my-4 items-center">
                      <Input
                        type="search"
                        label="Search Jobs"
                        color="blue-gray"
                      />
                      <Button
                        className="capitalize p-2 flex gap-2 shadow-none hover:shadow-none hover:bg-blue-600"
                        color="blue"
                      >
                        <FaSearch />
                        Search
                      </Button>
                    </div> */}

      {/* <div className="w-[80vw]">
                      <Tabs value="design">
                        <TabsHeader>
                          <Tab value={"design"}>Design</Tab>
                          <Tab value={"valuate"}>Valuate</Tab>
                          <Tab value={"procure"}>Procure</Tab>
                          <Tab value={"assemble"}>Assemble</Tab>
                          <Tab value={"execution"}>Execution</Tab>
                          <Tab value={"operation"}>Operation</Tab>
                        </TabsHeader>
                        <TabsBody>
                          <TabPanel value={"design"}>
                            <div className="grid grid-cols-2">
                              <div className="overflow-y-scroll max-h-[700px] p-5">
                                {designSpecializations.map((design) => (
                                  <Card
                                    key={design.name}
                                    className="border-2 m-1"
                                  >
                                    <CardBody>
                                      <Typography
                                        variant="lead"
                                        className="text-center text-2xl my-2"
                                      >
                                        {design.name}
                                      </Typography>
                                      <Typography variant="paragraph">
                                        {design.desc}
                                      </Typography>
                                    </CardBody>
                                  </Card>
                                ))}
                              </div>
                              <div>
                                <Typography variant="h6">
                                  Job Description
                                </Typography>
                              </div>
                            </div>
                          </TabPanel>
                          <TabPanel value={"valuate"}>
                            <div className="grid grid-cols-2">
                              <div className="overflow-y-scroll max-h-[700px] p-5">
                                {valuateSpecializations.map((design) => (
                                  <Card
                                    key={design.name}
                                    className="border-2 m-1"
                                  >
                                    <CardBody>
                                      <Typography
                                        variant="lead"
                                        className="text-center text-2xl my-2"
                                      >
                                        {design.name}
                                      </Typography>
                                      <Typography variant="paragraph">
                                        {design.desc}
                                      </Typography>
                                    </CardBody>
                                  </Card>
                                ))}
                              </div>
                              <div>
                                <Typography variant="h6">
                                  Job Description
                                </Typography>
                              </div>
                            </div>
                          </TabPanel>
                          <TabPanel value={"procure"}>
                            <div className="grid grid-cols-2">
                              <div className="overflow-y-scroll max-h-[700px] p-5">
                                {procureSpecializations.map((design) => (
                                  <Card
                                    key={design.name}
                                    className="border-2 m-1"
                                  >
                                    <CardBody>
                                      <Typography
                                        variant="lead"
                                        className="text-center text-2xl my-2"
                                      >
                                        {design.name}
                                      </Typography>
                                      <Typography variant="paragraph">
                                        {design.desc}
                                      </Typography>
                                    </CardBody>
                                  </Card>
                                ))}
                              </div>
                              <div>
                                <Typography variant="h6">
                                  Job Description
                                </Typography>
                              </div>
                            </div>
                          </TabPanel>
                          <TabPanel value={"assemble"}>
                            <div className="grid grid-cols-2">
                              <div className="overflow-y-scroll max-h-[700px] p-5">
                                {assembleSpecializations.map((design) => (
                                  <Card
                                    key={design.name}
                                    className="border-2 m-1"
                                  >
                                    <CardBody>
                                      <Typography
                                        variant="lead"
                                        className="text-center text-2xl my-2"
                                      >
                                        {design.name}
                                      </Typography>
                                      <Typography variant="paragraph">
                                        {design.desc}
                                      </Typography>
                                    </CardBody>
                                  </Card>
                                ))}
                              </div>
                              <div>
                                <Typography variant="h6">
                                  Job Description
                                </Typography>
                              </div>
                            </div>
                          </TabPanel>
                          <TabPanel value={"execution"}>
                            <div className="grid grid-cols-2">
                              <div className="overflow-y-scroll max-h-[700px] p-5">
                                {executionSpecializations.map((design) => (
                                  <Card
                                    key={design.name}
                                    className="border-2 m-1"
                                  >
                                    <CardBody>
                                      <Typography
                                        variant="lead"
                                        className="text-center text-2xl my-2"
                                      >
                                        {design.name}
                                      </Typography>
                                      <Typography variant="paragraph">
                                        {design.desc}
                                      </Typography>
                                    </CardBody>
                                  </Card>
                                ))}
                              </div>
                              <div>
                                <Typography variant="h6">
                                  Job Description
                                </Typography>
                              </div>
                            </div>
                          </TabPanel>
                          <TabPanel value={"operation"}>
                            <div className="grid grid-cols-2">
                              <div className="overflow-y-scroll max-h-[700px] p-5">
                                {operateSpecializations.map((design) => (
                                  <Card
                                    key={design.name}
                                    className="border-2 m-1"
                                  >
                                    <CardBody>
                                      <Typography
                                        variant="lead"
                                        className="text-center text-2xl my-2"
                                      >
                                        {design.name}
                                      </Typography>
                                      <Typography variant="paragraph">
                                        {design.desc}
                                      </Typography>
                                    </CardBody>
                                  </Card>
                                ))}
                              </div>
                              <div>
                                <Typography variant="h6">
                                  Job Description
                                </Typography>
                              </div>
                            </div>
                          </TabPanel>
                        </TabsBody>
                      </Tabs>
                    </div> */}

      <Footer />
    </>
  );
};

export default Staffings;
