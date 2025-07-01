"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import styles from '../../styles/registration.module.scss';
import { ToastContainer, toast } from "react-toastify";

const Registration = () => {

    const [data, setData] = useState({
        name: "",
        company_name: "",
        company_email: "",
        mobile: "",
        password: "",
        cmo_member: false
    })
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            toast.success("Sign Up Successfully");
        }
    }, [formErrors])

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const validate = (values) => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=(?:.*[A-Za-z]){5,})(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]+$/;
        if (!values.name) {
            errors.name = "Name is required"
        }
        if (!values.company_name) {
            errors.company_name = "Company Name is required"
        }

        if (!values.company_email) {
            errors.company_email = "Company Email is required"
        } else if (!emailRegex.test(values.company_email)) {
            errors.company_email = "This is not a valid email address"
        }

        if (!values.mobile) {
            errors.mobile = "Phone Number is required"
        } else if (values.mobile.length < 10 || values.mobile.length > 10) {
            errors.mobile = "Phone Number must be of 10 digits"
        }

        if (!values.password) {
            errors.password = "Password is required"
        } else if (!passwordRegex.test(values.password)) {
            errors.password = "One Uppercase, one special character, one Number and 5 letters"
        }
        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(data));
        setIsSubmit(true);
    }
    return (
        <section className={styles["form-container"]}>
            <ToastContainer position="top-right" limit={1} />
             <Link href="/" className={styles["logo-link"]}>
                <div className={styles["logo-container"]}>
                    {/* <div className={styles["logo-img"]}>
                        <img src="/logo.svg" alt="Logo" />
                    </div> */}
                     <p>Repurev</p>
                </div>
            </Link>
            
            <div className={styles["form-content"]}>
                <h2>Register</h2>
                <p>Create your account</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={styles["input-box"]}>
                    <label>Name</label>
                    {formErrors.name ?
                        <div className={styles["error-content"]}>
                           <p>{formErrors.name}</p> 
                        </div> : ""}

                    <input type='text' name="name" value={data.name} onChange={handleInputChange} />
                </div>
                <div className={styles["input-box"]}>
                    <label>Company Name</label>
                  {formErrors.company_name ?
                        <div className={styles["error-content"]}>
                           <p>{formErrors.company_name}</p> 
                        </div> : ""}
                    <input type='text' name="company_name" value={data.company_name} onChange={handleInputChange} />
                </div>
                <div className={styles["input-box"]}>
                    <label>Company Email</label>
                {formErrors.company_email ?
                        <div className={styles["error-content"]}>
                            <p>{formErrors.company_email}</p>
                        </div> : ""}
                    <input type='email' name="company_email" value={data.company_email} onChange={handleInputChange} />
                </div>
                <div className={styles["input-box"]}>
                    <label>Mobile Number</label>
                   {formErrors.mobile ?
                        <div className={styles["error-content"]}>
                            <p>{formErrors.mobile}</p>
                        </div> : ""}
                    <input type='number' name="mobile" value={data.mobile} onChange={handleInputChange} />
                </div>

                <div className={styles["input-box"]}>
                    <label>Password</label>
                    {formErrors.password ?
                        <div className={styles["error-content"]}>
                            <p>{formErrors.password}</p>
                        </div> : ""}
                    <input type='password' name="password" value={data.password} onChange={handleInputChange} />
                </div>
                <div className={styles["checkbox-box"]}>
                        <input
                            type="checkbox"
                            name="cmo_member"
                            checked={data.cmo_member}
                            onChange={handleInputChange}
                            className={styles["checkbox-input"]}
                        />
                        <label className={styles["checkbox-label"]}>  CMO Member</label>
                </div>
                <button type='submit' className={styles["sign-btn"]}>Sign Up</button>
                <p className={styles["bottom-content"]}>Already have an account? <Link href='/login'> Sign in instead</Link></p>
            </form>
        </section>
    )
}

export default Registration