import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import ROUTES from '../../Routes';
import { object, string } from "yup";

import "./Login.scss";

const Login = () => {
    const navigate = useNavigate();

    const validationSchema = object({
        email: string().email("Invalid email").required("E-Mail Required!!!"),
        password: string().min(6, "Minimum 6 characters").required("Password Required!!!"),
    });

    const handleSubmit = async (values) => {
        try {
            const { data } = await axios.get("http://localhost:3001/allUsers");
            const user = data.find(
                (user) => user.email === values.email && user.password === values.password
            );

            if (user) {
                localStorage.setItem("authToken", "loggedIn");
                localStorage.setItem("userID", user.id);
                navigate(ROUTES.PROFILE);
            } else {
                toast.error("Invalid email or password");
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
        }
    };


    return (
        <div className="login-container">
            <div className="imgAndLogIn">
                <div className="LogInImg">
                    <p>Welcome to <h2>MyFriends!</h2> Please log in to connect with your friends, share updates, and explore all the exciting features our community has to offer. If you don't have an account yet, click on 'Register' to join the fun and start making meaningful connections today!</p>
                </div>
                <div className="login-box">
                    <h1>Login</h1>
                    <div className="icons">
                        <i class="fa-brands fa-linkedin-in icon"></i>
                        <i class="fa-brands fa-facebook-f icon"></i>
                        <i class="fa-brands fa-google icon"></i>
                    </div>
                    <p>Or</p>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        <Form>
                            <Field type="email" name="email" placeholder="Email" />
                            <ErrorMessage name="email" component="p" className="error" />
                            <Field type="password" name="password" placeholder="Password" />
                            <ErrorMessage name="password" component="p" className="error" />
                            <button type="submit">Login</button>
                        </Form>
                    </Formik>
                    <p>
                        Don't have an account?{" "}
                        <span
                            style={{ color: "blue", cursor: "pointer" }}
                            onClick={() => navigate(ROUTES.REGISTER)}
                        >
                            Register
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
