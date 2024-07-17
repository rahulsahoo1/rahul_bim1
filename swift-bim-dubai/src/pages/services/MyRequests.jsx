import { useEffect, useState } from "react";
import Navbar from "../../components/layout/Navbar";
import { api } from "../../utils/api";
import {
  Button,
  Card,
  Dialog,
  DialogBody,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import { useAuth } from "../../context/AuthContext";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import logo from "../../assets/swifterz_logo.png";
import Swal from "sweetalert2";
import swifterz from "/public/swift-bg.png";

const MyRequests = () => {
  const { user } = useAuth();
  const userId = user?.userId;
  const [open, setOpen] = useState(false);
  const [openProposal, setOpenProposal] = useState(false);

  const [serviceRequets, setServiceRequets] = useState([
    {
      serviceName: "",
      serviceNumber: "",
      clientFirstName: "",
      clietLastName: "",
      companyName: "",
      priorityLevel: "",
      resolutionTimeFrame: "",
      locationInformation: "",
      attachments: [],
      coordinatorName: "",
      statusTracking: "",
      lastUpdateTime: "",
      followUpActions: "",
      clientFeedback: "",
      completetionDetails: "",
    },
  ]);

  const [selectedService, setSelectedService] = useState({
    attachments: "",
    client_feedback: "",
    comments_notes: "",
    company_name: "",
    completion_details: "",
    coordinator_name: "",
    country: "",
    email: "",
    first_name: "",
    follow_up_actions: "",
    last_name: "",
    last_update_datetime: "",
    location_information: "",
    mobile_number: "",
    priority_level: "",
    project_description: "",
    project_type: "",
    resolution_timeframe: "",
    service_request_id: "",
    status_tracking: "",
    service_type: "",
  });

  const [proposal, setProposal] = useState({
    area_detail_table: [
      {
        area: "",
        id: 0,
        remarks: "",
        sqft: "",
      },
      {
        grandTotal: "",
      },
    ],
    client_id: 0,
    client_location: "",
    client_name: "",
    client_organization_name: "",
    date: "",
    dear_sir_madam: "",
    edited_verification_id: 0,
    exclusions: "",
    inclusions: "",
    industry_service: "",
    organizations: "",
    payment_terms: "",
    proposal_for: "",
    proposal_id: 0,
    purpose_for: "",
    regards_from_name: "",
    regards_from_position: "",
    scope_work: "",
    service_fees: "",
    service_request_id: 0,
    status: "",
    type_of_service_to_client_name: "",
    type_of_services_proposal_table: [
      {
        client: "",
        period: "",
        project: "",
        projectArea: "",
        service: "",
      },
    ],
    type_of_services_proposal_table_name: "",
    user_id: 0,
  });

  function formatData(id, dateStr) {
    let formattedId = id.toString().padStart(3, "0");

    let dateObj = new Date(dateStr);
    let formattedDate = `${(dateObj.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${dateObj.getFullYear().toString().slice(-2)}`;

    let output = `SCS/BLR${formattedId}-${formattedDate}`;

    return output;
  }

  const getServiceRequests = async () => {
    if (!userId) return;
    await api
      .get(`/api/service_request/user_id/${userId}`)
      .then((response) => {
        setServiceRequets(response.data.service_requests);
      })
      .catch((err) => {
        console.log(err.response.data.error);
      });
  };

  const handleUpdateProposal = async (id, status) => {
    await api
      .put(`/api/client_decision/${userId}/${id}`, { client_decision: status })
      .then((response) => {
        setOpenProposal(false);
        Swal.fire({
          position: "top",
          title: `Proposal ${status} Successfully`,
          icon: "success",
        });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
  };

  const getProposals = async (reqId, clientId) => {
    await api
      .get(`/api/verified_proposals/${clientId}/${reqId}`)
      .then((response) => {
        setOpenProposal(!openProposal);
        setProposal(response.data.proposals[0]);
      })
      .catch((error) => {
        setOpenProposal(!openProposal);
        console.log(error.response.data.error);
      });
  };

  const handleOpen = (service) => {
    setSelectedService(service);
    setOpen(true);
  };

  const handleCloseProposal = () => {
    setOpenProposal(false);
    setProposal({
      area_detail_table: [
        {
          area: "",
          id: 0,
          remarks: "",
          sqft: "",
        },
        {
          grandTotal: "",
        },
      ],
      client_id: 0,
      client_location: "",
      client_name: "",
      client_organization_name: "",
      date: "",
      dear_sir_madam: "",
      edited_verification_id: 0,
      exclusions: "",
      inclusions: "",
      industry_service: "",
      organizations: "",
      payment_terms: "",
      proposal_for: "",
      proposal_id: 0,
      purpose_for: "",
      regards_from_name: "",
      regards_from_position: "",
      scope_work: "",
      service_fees: "",
      service_request_id: 0,
      status: "",
      type_of_service_to_client_name: "",
      type_of_services_proposal_table: [
        {
          client: "",
          period: "",
          project: "",
          projectArea: "",
          service: "",
        },
      ],
      type_of_services_proposal_table_name: "",
      user_id: 0,
    });
  };

  useEffect(() => {
    getServiceRequests();
  }, [userId]);
  return (
    <div>
      <Navbar />
      <div className="rounded-sm border border-stroke  bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          Service Requests
        </h4>
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-slate-500">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                  Service Name
                </th>
                <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                  Service ID
                </th>
                <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                  Category
                </th>
                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Service Status
                </th>
                {/* <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Last Name
                </th>
                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Email ID
                </th>
                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Phone Number
                </th> */}
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                  Priority Level
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Proposals
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {serviceRequets &&
                serviceRequets.length > 0 &&
                serviceRequets[0].serviceName !== "" &&
                serviceRequets.map((service, index) => (
                  <tr key={index}>
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                      <h5 className="font-medium text-black dark:text-white">
                        {service?.service_type && service?.service_type}
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                      <h5 className="font-medium text-black dark:text-white">
                        {service.service_request_id}
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                      <h5 className="font-medium text-black dark:text-white">
                        {service.category}
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="inline-flex rounded-full bg-black  dark:bg-white bg-opacity-20 py-1 px-3 text-sm font-medium text-white dark:text-black ">
                        {service.status_tracking
                          ? service.status_tracking
                          : "Pending"}
                      </p>
                    </td>
                    {/* <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {service.last_name}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {service.email}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {service.mobile_number}
                      </p>
                    </td> */}
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="inline-flex rounded-full bg-black  dark:bg-white bg-opacity-20 py-1 px-3 text-sm font-medium text-white dark:text-black ">
                        {service.priority_level
                          ? service.priority_level
                          : "Initiated"}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center space-x-3.5">
                        <button
                          className="inline-flex rounded-full bg-blue-500  dark:bg-white bg-opacity-60 py-1 px-3 text-sm font-medium text-white dark:text-black "
                          // onClick={() => handleOpen(service)}
                          onClick={() =>
                            getProposals(
                              service.service_request_id,
                              service.user_id
                            )
                          }
                        >
                          Show Proposal
                        </button>
                      </div>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center space-x-3.5">
                        <button
                          className="inline-flex rounded-full bg-blue-500  dark:bg-white bg-opacity-60 py-1 px-3 text-sm font-medium text-white dark:text-black "
                          onClick={() => handleOpen(service)}
                        >
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
            {serviceRequets.length > 0 &&
              serviceRequets[0].serviceName === "" && (
                <caption className="caption-bottom">
                  No services created
                </caption>
              )}
          </table>
        </div>
      </div>

      <Dialog open={open} handler={setOpen}>
        <DialogHeader className="flex flex-col">
          <Typography variant="h4" color="blue-gray">
            Service Details
          </Typography>
        </DialogHeader>
        <DialogBody className="max-h-[80vh] overflow-scroll">
          {Object.entries(selectedService).map(([key, value], index) => {
            // Exclude user_id, service_request_id, and selected_services_id
            if (
              [
                "user_id",
                "service_request_id",
                "selected_services_id",
              ].includes(key)
            ) {
              return null; // Skip rendering
            }

            return (
              <div key={index} className="flex gap-5">
                <h1 className="w-72">{key}</h1>
                <p>{value}</p>
              </div>
            );
          })}
        </DialogBody>
      </Dialog>

      <Dialog
        open={openProposal}
        handler={handleCloseProposal}
        size={
          proposal.client_name !== "" && proposal.proposal_for !== ""
            ? "lg"
            : "sm"
        }
      >
        <DialogHeader className="flex flex-col">
          <Typography variant="h4" color="blue-gray">
            Proposal Details
          </Typography>
        </DialogHeader>
        <DialogBody className="max-h-[80vh] p-10 overflow-scroll">
          {proposal &&
          proposal.client_name !== "" &&
          proposal.proposal_for !== "" ? (
            <div className="!font-serif">
              <div className="text-center">
                <img
                  src={logo}
                  alt="swifterz"
                  className="w-48 h-16 ml-[80%] select-none"
                />
              </div>
              <div className="p-6 bg-gray-100 border-b border-gray-300">
                <div className="text-right">
                  <div>Date: {proposal.date}</div>
                  <div>
                    Ref: {formatData(proposal.proposal_id, proposal.date)}
                  </div>
                </div>
              </div>
              <div className="mt-8 font-semibold">
                <div>Mr/Ms. {proposal.client_name},</div>
                <div>{proposal.client_organization_name},</div>
                <div>{proposal.client_location}.</div>
              </div>
              <div className="mt-6">
                <div>Dear {proposal.dear_sir_madam},</div>
                <div className="font-semibold mt-4 underline text-center">
                  Sub: Proposal for the {proposal.proposal_for}
                </div>
                <p
                  // style={{ background: `url(${swifterz})` }}
                  className="mt-4 relative whitespace-pre-line !backdrop-opacity-50 bg-contain bg-top"
                >
                  <img
                    src={swifterz}
                    alt="swifterz"
                    className="absolute -top-20 right-0 opacity-5 -z-20"
                  />
                  {`We thank you for the interest evinced in availing our engineering BIM services for the ${proposal.proposal_for} Work for your company’s ${proposal.client_organization_name} in ${proposal.client_location}.

                We also take this opportunity to express our sincere thanks to you and your team for the time spent on reviewing the BIM services being provided by our company to various projects across the world.
                
                At SWIFTERZ, we believe is providing the best customized services that suits each customer we deal with.   In the EPC industry Engineering Services as such requires unique zeal encompassing the Urge, Drive, Ambition, Skill-set and Technical Know-how.  In order to ensure that we always live up-to the expectation of our clients, we strive hard and deploy the best skill-sets for the projects that we undertake.
                
                One of the ‘USP’ of SWIFTERZ, is completing the projects within mutually agreed timeline and budgets.  Should you need any testimonials for the work executed by us, please let us know.  You may please check the details of our project portfolio at www.swifterz.co
                
                We attach herewith the commercial proposal to extend the ${proposal.proposal_for} Services to your company’s ${proposal.client_organization_name} in ${proposal.client_location}.  Considering the long-term mutual collaboration opportunities between our organizations, we are offering one of the most competitive terms to your company as a special case.
                
                We look forward to receiving positive revert on our proposal.
                `}
                </p>
              </div>
              <div className="mt-4 text-center">
                <strong className="text-center w-full underline font-medium">
                  {proposal.type_of_services_proposal_table_name}
                </strong>
              </div>
              <table className="mt-6 w-full border-collapse border">
                <tbody>
                  {proposal.type_of_services_proposal_table.map(
                    (detail, index) => (
                      <>
                        <tr key={index} className="border">
                          <td className="border text-center font-medium px-4 py-2">
                            Client
                          </td>
                          <td className="border text-center px-4 py-2">
                            {detail.client}
                          </td>
                        </tr>
                        <tr key={index} className="border">
                          <td className="border text-center font-medium px-4 py-2">
                            Service
                          </td>
                          <td className="border text-center px-4 py-2">
                            {detail.service}
                          </td>
                        </tr>
                        <tr key={index} className="border">
                          <td className="border text-center font-medium px-4 py-2">
                            Project
                          </td>
                          <td className="border text-center px-4 py-2">
                            {detail.project}
                          </td>
                        </tr>
                        <tr key={index} className="border">
                          <td className="border text-center font-medium px-4 py-2">
                            Project Area
                          </td>
                          <td className="border text-center px-4 py-2">
                            {detail.projectArea}
                          </td>
                        </tr>
                        <tr key={index} className="border">
                          <td className="border text-center font-medium px-4 py-2">
                            Period
                          </td>
                          <td className="border text-center px-4 py-2">
                            {detail.period}
                          </td>
                        </tr>
                      </>
                    )
                  )}
                </tbody>
              </table>
              <table className="mt-6 w-full border-collapse border">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border px-4 py-2">Area</th>
                    <th className="border px-4 py-2">Sqft</th>
                    <th className="border px-4 py-2">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {proposal.area_detail_table.map((detail, index) => (
                    <tr key={index} className="border">
                      <td className="border px-4 py-2">{detail.area}</td>
                      <td className="border px-4 py-2">{detail.sqft}</td>
                      <td className="border px-4 py-2">{detail.remarks}</td>
                    </tr>
                  ))}
                </tbody>
                {/* <tfoot>
                  <tr>
                    <td>Grand Total</td>
                    <td>{proposal.area_detail_table[0].grandTotal}</td>
                  </tr>
                </tfoot> */}
              </table>
              <div className="mt-8 relative">
                <img
                  src={swifterz}
                  alt="swifterz"
                  className="absolute -top-20 right-0 opacity-5 "
                />
                <div className="mt-4">
                  <strong>Scope of Work:</strong>
                  <p className="whitespace-pre-line">{proposal.scope_work}</p>
                </div>
                <div className="mt-4">
                  <strong>Inclusions:</strong>
                  <p className="whitespace-pre-line">{proposal.inclusions}</p>
                </div>
                <div className="mt-4">
                  <strong>Exclusions:</strong>
                  <p className="whitespace-pre-line">{proposal.exclusions}</p>
                </div>
                <div className="mt-4">
                  <strong>Service Fees:</strong>
                  <p className="whitespace-pre-line">{proposal.service_fees}</p>
                </div>
                <div className="mt-4">
                  <strong>Payment Terms:</strong>
                  <p className="whitespace-pre-line">
                    {proposal.payment_terms}
                  </p>
                </div>

                <div className="mt-4 text-center">
                  <strong className="text-center w-full underline font-medium">
                    Other Terms and Conditions:
                  </strong>
                </div>
                <ul className="list-disc  list-inside space-y-1 text-sm mt-4">
                  <li>
                    In the event of inordinate delay in the receipt of payments
                    (after 45 days from the date of raising the invoice),
                    SWIFTREZ will not issue any further drawings until the
                    client clears all pending payments.
                  </li>
                  <li>
                    It shall be the responsibility of the Client to provide very
                    clear instructions for preparation of the BIM Modelling
                    services for the project. All instructions shall be
                    communicated in writing. All email communications sent by
                    the authorized personal of both the parties are treated as
                    the written instructions/inputs/communication related to the
                    project on hand.
                  </li>
                  <li>
                    Any change in the scope of works need to be communicated in
                    writing and the other party need to provide the written
                    consent to the change in the work scope.
                  </li>
                  <li>
                    Any changes in the commercial terms of this proposal
                    consequent to change in scope work shall be implemented only
                    upon receipt of written approval by the client.
                  </li>
                  <li>
                    In case of extension of project period mentioned above,
                    additional charges will be applicable based on mutual
                    discussion and acceptance.
                  </li>
                  <li>
                    Terms of the proposal are valid for a maximum period of 15
                    days from the date of the proposal. Any delay in responding
                    to the proposal beyond 15 days may attract revised
                    commercial terms and conditions.
                  </li>
                </ul>
                <div className="mt-4">
                  <strong>Best Regards:</strong>
                  <p>{proposal.regards_from_name}</p>
                  <p>{proposal.regards_from_position}</p>
                </div>
              </div>
              <div className="mx-auto text-center flex mt-10 gap-16 justify-center">
                {proposal.client_decision ? (
                  proposal.client_decision == "Accepted" ? (
                    <h1 className="flex gap-2 bg-green-500 text-white p-2 rounded-md items-center justify-center">
                      <FaCheck />
                      Accepted
                    </h1>
                  ) : (
                    <h1 className="flex gap-2 bg-red-500 text-white p-2 rounded-md items-center justify-center">
                      <FaXmark />
                      Rejected
                    </h1>
                  )
                ) : (
                  <>
                    <Button
                      color="green"
                      className="flex gap-2 items-center justify-center"
                      onClick={() =>
                        handleUpdateProposal(proposal.proposal_id, "Accepted")
                      }
                    >
                      <FaCheck />
                      Accept
                    </Button>
                    <Button
                      color="red"
                      className="flex gap-2 items-center justify-center"
                      onClick={() =>
                        handleUpdateProposal(proposal.proposal_id, "Rejected")
                      }
                    >
                      <FaXmark />
                      Reject
                    </Button>
                  </>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center">No Proposals Found!</div>
          )}
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default MyRequests;
