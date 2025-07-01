"use client";
import Link from 'next/link';
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import styles from '../../styles/registration.module.scss';
import users from "../../static-data/static.json";
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from "react-toastify";
import Cookies from 'js-cookie';

interface LoginData {
    email: string;
    password: string;
}

interface LoginErrors {
    email?: string;
    password?: string;
}

const Login: React.FC = () => {
    const router = useRouter();

    const [data, setData] = useState<LoginData>({
        email: "",
        password: "",
    });

    const [formErrors, setFormErrors] = useState<LoginErrors>({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [loginMessage, setLoginMessage] = useState("");

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            const matchedUser = users?.user_data?.find(
                (user) => user?.email === data?.email && user?.password === data?.password
            );

            if (matchedUser) {
                toast.success("User Logged in successfully");
                Cookies.set('user_email', matchedUser.email);
                Cookies.set('is_logged_in', 'true');

                setTimeout(() => {
                    router.push("/dashboard");
                }, 1500);
            } else {
                toast.error("Invalid Credentials");
            }
        }
    }, [formErrors, isSubmit, data, router]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const validate = (values: LoginData): LoginErrors => {
        const errors: LoginErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!values.email) {
            errors.email = "Email is required";
        } else if (!emailRegex.test(values.email)) {
            errors.email = "Email is invalid";
        }

        if (!values.password) {
            errors.password = "Password is required";
        }

        return errors;
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setFormErrors(validate(data));
        setIsSubmit(true);
    };

    return (
        <section className={styles["form-container"]}>
            <ToastContainer position="top-right" limit={1} />
            <Link href="/" className={styles["logo-link"]}>
                <div className={styles["logo-container"]}>
                    <p>Repurev</p>
                </div>
            </Link>

            {loginMessage && (
                <p className={styles["login-message"]} style={{
                    color: loginMessage === "User Logged in successfully" ? "green" : "red",
                }}>
                    {loginMessage}
                </p>
            )}

            <div className={styles["form-content"]}>
                <h2>Login to your account</h2>
            </div>

            <form onSubmit={handleSubmit}>
                <div className={styles["input-box"]}>
                    <label>Email</label>
                    {formErrors.email && (
                        <div className={styles["error-content"]}>
                            <p>{formErrors.email}</p>
                        </div>
                    )}
                    <input
                        type='text'
                        name="email"
                        value={data.email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={styles["input-box"]}>
                    <label>Password</label>
                    {formErrors.password && (
                        <div className={styles["error-content"]}>
                            <p>{formErrors.password}</p>
                        </div>
                    )}
                    <input
                        type='password'
                        name="password"
                        value={data.password}
                        onChange={handleInputChange}
                    />
                </div>

                <button type='submit' className={styles["sign-btn"]}>Log in</button>

                <p className={styles["bottom-content"]}>
                    Don't have an account? <Link href='/register'>Sign up instead</Link>
                </p>
            </form>
        </section>
    );
};

export default Login;
