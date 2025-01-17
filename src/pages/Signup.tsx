import { useState } from "react";
import { Button, Typography, Form, message } from "antd";
import { TextField } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";
import SignupImage from "../assets/Login.svg";

import "tailwindcss/tailwind.css";

interface User {
  username: string;
  email: string;
  password: string;
}
const SignupPage = () => {
  const [focusedField, setFocusedField] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleFocus = (field: string) => setFocusedField(field);

  const handleBlur = () => setFocusedField("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    const { username, email, password, confirmPassword } = credentials;

    if (!username || !email || !password || !confirmPassword) {
      return message.error("All fields are required!");
    }

    if (password !== confirmPassword) {
      return message.error("Passwords do not match!");
    }

    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = users.find((user) => user.username === username);

    if (userExists) {
      return message.error("Username already exists!");
    }

    // Save new user
    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    message.success("Sign-Up Successful! Redirecting to Login Page...");

    // Redirect to Login Page
    setTimeout(() => {
      window.location.href = "/login";
    }, 1500);
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row min-h-screen items-center justify-center bg-white px-4 sm:px-8 md:px-16">
      <div className="w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0">
        <img
          src={SignupImage}
          alt="Signup Illustration"
          className="w-full h-auto max-w-[700px] sm:max-w-[600px] object-contain transition-all duration-300"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-8 md:px-16">
        <div className="w-full max-w-md mx-auto mb-6">
          <Typography.Title
            level={2}
            className="text-left"
            style={{ color: "#F59E0B", fontWeight: "bold", marginBottom: "1.5rem" }}
          >
            Create an Account
          </Typography.Title>
        </div>
        <Form className="w-full max-w-md mx-auto">
          <Form.Item>
            <div className="flex items-center border-b-2 pb-1">
              <AccountCircleOutlinedIcon
                style={{
                  color: focusedField === "username" ? "#F59E0B" : "black",
                  fontSize: "2rem",
                  marginRight: "0.5rem",
                  transition: "color 0.3s",
                  marginTop: "1rem",
                }}
              />
              <TextField
                fullWidth
                name="username"
                label="Username"
                variant="standard"
                onFocus={() => handleFocus("username")}
                onBlur={handleBlur}
                onChange={handleChange}
                InputProps={{ disableUnderline: true }}
                sx={{
                  "& .MuiInputLabel-root": { color: "gray" },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#F59E0B" },
                  "& .MuiInput-underline:before": { borderBottom: "2px solid black" },
                  "& .MuiInput-underline:hover:before": {
                    borderBottom: "2px solid #F59E0B !important",
                  },
                  "& .MuiInput-underline:after": { borderBottom: "2px solid #F59E0B" },
                }}
              />
            </div>
          </Form.Item>
          <Form.Item>
            <div className="flex items-center border-b-2 pb-1">
              <EmailOutlinedIcon
                style={{
                  color: focusedField === "email" ? "#F59E0B" : "black",
                  fontSize: "2rem",
                  marginRight: "0.5rem",
                  transition: "color 0.3s",
                  marginTop: "1rem",
                }}
              />
              <TextField
                fullWidth
                name="email"
                label="Email"
                variant="standard"
                onFocus={() => handleFocus("email")}
                onBlur={handleBlur}
                onChange={handleChange}
                InputProps={{ disableUnderline: true }}
                sx={{
                  "& .MuiInputLabel-root": { color: "gray" },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#F59E0B" },
                  "& .MuiInput-underline:before": { borderBottom: "2px solid black" },
                  "& .MuiInput-underline:hover:before": {
                    borderBottom: "2px solid #F59E0B !important",
                  },
                  "& .MuiInput-underline:after": { borderBottom: "2px solid #F59E0B" },
                }}
              />
            </div>
          </Form.Item>
          <Form.Item>
            <div className="flex items-center border-b-2 pb-1">
              <HttpsOutlinedIcon
                style={{
                  color: focusedField === "password" ? "#F59E0B" : "black",
                  fontSize: "2rem",
                  marginRight: "0.5rem",
                  transition: "color 0.3s",
                  marginTop: "1rem",
                }}
              />
              <TextField
                fullWidth
                name="password"
                label="Password"
                type="password"
                variant="standard"
                onFocus={() => handleFocus("password")}
                onBlur={handleBlur}
                onChange={handleChange}
                InputProps={{ disableUnderline: true }}
                sx={{
                  "& .MuiInputLabel-root": { color: "gray" },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#F59E0B" },
                  "& .MuiInput-underline:before": { borderBottom: "2px solid black" },
                  "& .MuiInput-underline:hover:before": {
                    borderBottom: "2px solid #F59E0B !important",
                  },
                  "& .MuiInput-underline:after": { borderBottom: "2px solid #F59E0B" },
                }}
              />
            </div>
          </Form.Item>
          <Form.Item>
            <div className="flex items-center border-b-2 pb-1">
              <VpnKeyOutlinedIcon
                style={{
                  color: focusedField === "confirmPassword" ? "#F59E0B" : "black",
                  fontSize: "2rem",
                  marginRight: "0.5rem",
                  transition: "color 0.3s",
                  marginTop: "1rem",
                }}
              />
              <TextField
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                variant="standard"
                onFocus={() => handleFocus("confirmPassword")}
                onBlur={handleBlur}
                onChange={handleChange}
                InputProps={{ disableUnderline: true }}
                sx={{
                  "& .MuiInputLabel-root": { color: "gray" },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#F59E0B" },
                  "& .MuiInput-underline:before": { borderBottom: "2px solid black" },
                  "& .MuiInput-underline:hover:before": {
                    borderBottom: "2px solid #F59E0B !important",
                  },
                  "& .MuiInput-underline:after": { borderBottom: "2px solid #F59E0B" },
                }}
              />
            </div>
          </Form.Item>
          <div className="flex justify-end text-sm mb-4">
            <a href="/login" className="text-black hover:text-yellow-400">
              Already have an account? Login
            </a>
          </div>
          <Button
            type="primary"
            className="w-full flex items-center justify-center rounded-lg text-lg"
            style={{
              backgroundColor: "#F59E0B",
              border: "none",
              color: "white",
              height: "55px",
              fontSize: "1.1rem",
            }}
            onClick={handleSignup}
          >
            Sign Up
          </Button>
        </Form>
        <div className="mt-8 text-center">
          <Typography.Text>Or sign up with</Typography.Text>
          <div className="flex justify-center gap-4 mt-4">
            {["facebook", "google", "instagram"].map((social) => {
              const Icon =
                social === "facebook"
                  ? FaFacebookF
                  : social === "google"
                  ? FaGoogle
                  : FaInstagram;
              return (
                <Button
                  key={social}
                  shape="circle"
                  icon={<Icon size={20} />}
                  className="flex items-center justify-center social-icon"
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    width: "45px",
                    height: "45px",
                    transition: "background-color 0.3s, color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#F59E0B")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "black")
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
