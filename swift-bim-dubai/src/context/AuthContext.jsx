import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../utils/api";
import Swal from "sweetalert2";
// import toast from "react-hot-toast";
// import { jwtDecode } from "jwt-decode";
// import Cookies from "js-cookie";

export const AuthContext = createContext({});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth Must be used with AuthContext ");
  }
  return context;
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    userId: "",
    role: "",
    username: "",
  });
  const [users, setUsers] = useState([
    {
      builder_type: "",
      email: "",
      firstname: "",
      id: 0,
      lastname: "",
      phone: "",
      role: "",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
    otp: "",
    confirm_password: "",
  });

  const [selectedCategory, setSelectedCategory] = useState("Design");

  const [otpEmail, setOtpEmail] = useState("");
  const [otp, setOtp] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { pathname } = useLocation();

  const [layout, page, types] = pathname.split("/").filter((el) => el !== "");

  const getProfile = async (id) => {
    await api.get(`/api/user/${Number(id)}`).then((response) => {
      setSignupData(response.data);
    });
  };

  const fetchUsers = async (role) => {
    setLoading(true);
    await api
      .get("/api/users", { params: { role, sender_id: user.userId } })
      .then((response) => {
        setLoading(false);
        setUsers(response.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.response.data.message);
      });
  };

  const login = (e) => {
    e.preventDefault();
    setLoading(true);
    api
      .post("/api/client_login", loginData)
      .then((res) => {
        // const user = jwtDecode(res.data.token);
        setUser({
          userId: res.data?.user_id,
        });

        setLoading(false);
        setLoginData({ email: "", password: "" });
        // Cookies.set("token", res.data.token);
        // const token = Cookies.get("token");
        // if (token) {
        //   sessionStorage.setItem("userData", JSON.stringify(token));
        // }
        sessionStorage.setItem("token", res.data.session_token);
        sessionStorage.setItem("user_id", res.data.user_id);

        setIsAuthenticated(true);
        navigate("/");
        // switch (user.role) {
        //   case "clients":
        //     navigate("/dashboard/home");
        //     break;
        //   case "professional":
        //     navigate("/professional-dashboard/home");
        //     break;
        //   case "vendor":
        //     navigate("/vendordashboard/home");
        //     break;
        //   case "contractor":
        //     navigate("/contractor/dashboard/home");
        //     break;

        //   default:
        //     navigate("/dashboard/home");
        //     break;
        // }
        // alert("Login successful");
        Swal.fire({
          position: "top",

          title: "Login successful",
          // text: "Submitted Succesfull, We will reach you out soon!",
          icon: "success",
        });
        // toast.success("Login Successful", { position: "bottom-right" });
      })
      .catch((err) => {
        console.log(err);

        setLoading(false);
        if (err.response?.data) {
          alert(err.response.data.error);
        } else {
          alert(err.message);
        }
      });
  };

  const signup = (e) => {
    e.preventDefault();
    setLoading(true);

    // const formData = new FormData();

    // formData.append("firstname", signupData.firstname);
    // formData.append("lastname", signupData.lastname);
    // formData.append("email", signupData.email);
    // formData.append("phone_number", signupData.phone_number);
    // formData.append("password", signupData.password);
    // formData.append("confirm_password", signupData.confirmPassword);
    // formData.append("role", signupData.role);

    api
      .post("/api/client_register", signupData)
      .then((res) => {
        setLoading(false);
        // const user = jwtDecode(res.data.token);
        setUser({
          userId: user?.user_id,
          role: user.role,
          username: user.username,
        });

        // sessionStorage.setItem("token", res.data.token);
        // sessionStorage.setItem("userId", user?.user_id);
        // sessionStorage.setItem("role", user?.role);
        // sessionStorage.setItem("username", user?.username);
        // setIsAuthenticated(true);
        setSignupData({
          firstname: "",
          lastname: "",
          email: "",
          phone_number: "",
          password: "",
          otp: "",
          confirmPassword: "",
        });
        Swal.fire({
          position: "top",

          title: res.data.message,
          // text: "Submitted Succesfull, We will reach you out soon!",
          icon: "success",
        });

        navigate("/login");

        // switch (user?.role) {
        //   case "professional":
        //     navigate("/professional-onboarding1");
        //     break;
        //   case "vendor":
        //     navigate("/vendor-onboarding1");
        //     break;
        //   case "clients":
        //     navigate("/onboarding1");
        //     break;
        //   case "contractor":
        //     navigate("/contractor-onboarding1");
        //     break;
        //   default:
        //     break;
        // }
      })
      .catch((err) => {
        setLoading(false);
        alert(err.response.data.error);
      });
  };

  const sendOtp = (e) => {
    e.preventDefault();
    setLoading(true);
    api
      .post("/api/reset_password/request", { email: otpEmail })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("email", otpEmail);
          setLoading(false);
          alert(res.data.message);
          navigate("verify-otp");
        }
      })
      .catch((err) => {
        setLoading(false);
        alert(err.response.data.error);
      });
  };

  const verifyOtp = (e) => {
    e.preventDefault();
    const otpEmail = localStorage.getItem("email");

    setLoading(true);
    api
      .post(
        "/api/verify_otp",
        { otp, email: otpEmail },
        { headers: { "Content-Type": "application/json" } }
      )

      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          alert(res.data.message);
          navigate("/reset-password");
        }
      })
      .catch((err) => {
        setLoading(false);
        alert(err.response.data.error);
      });
  };

  const resetPassword = (e) => {
    e.preventDefault();
    const otpEmail = localStorage.getItem("email");
    setLoading(true);

    api
      .post("/api/reset_password", {
        new_password: password,
        confirm_new_password: confirmPassword,
        email: otpEmail,
      })
      .then((response) => {
        setLoading(false);
        alert(response.data.message);
        navigate("/login");
      })
      .catch((error) => {
        setLoading(false);
        alert(error.response.data.error);
      });
  };

  const logout = async () => {
    // api
    //   .post("/api/client_logout", {}, { headers: { Authorization: token } })
    //   .then((response) => {
    // console.log(response.data);
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user_id");

    setIsAuthenticated(false);
    navigate("/login");
    Swal.fire({
      position: "top",
      title: "Logout successful",
      // text: "Submitted Succesfull, We will reach you out soon!",
      icon: "success",
    });
    // })
    // .catch((error) => {
    //   console.log(error.response.data);
    // });
  };

  useEffect(() => {
    const userId = sessionStorage.getItem("user_id");

    if (userId) {
      //   getProfile(Number(userId));

      setUser({ ...user, userId: userId });
    }
    const token = sessionStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, [user.userId, isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{
        signup,
        signupData,
        setSignupData,
        loading,
        login,
        loginData,
        setLoginData,
        isAuthenticated,
        selectedCategory,
        setSelectedCategory,
        user,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
