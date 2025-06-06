"use client";

import { form } from "@/sevices/user";
import { useRouter } from "next/navigation";
import useIsLargeScreen from "@/hooks/useIsLargeScreen";
import React, { useState } from "react";
import Swal from 'sweetalert2';
import { ClipLoader } from "react-spinners";
import { motion } from "framer-motion";
const Form = () => {
    const router = useRouter();
    const isLargeScreen = useIsLargeScreen();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        Fname: "",
        Phone: "",
        Email: "",
        Location: "",
        Message: "",
        MedicalReport: null,
    });

    const handlechange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 10 * 1024 * 1024) {
                Swal.fire({
                    icon: "warning",
                    title: "File Too Large",
                    text: "Please upload a file smaller than 10MB.",
                });
                e.target.value = "";
                return;
            }
            setFormData({ ...formData, MedicalReport: file });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formDataToSend = new FormData();
        formDataToSend.append("Fname", formData.Fname);
        formDataToSend.append("Phone", formData.Phone);
        formDataToSend.append("Email", formData.Email);
        formDataToSend.append("Location", formData.Location);
        formDataToSend.append("Message", formData.Message);

        if (formData.MedicalReport) {
            formDataToSend.append("MedicalReport", formData.MedicalReport);
        }

        try {
            const response = await form(formDataToSend)
            if (response.success) {
                Swal.fire({
                    title: "Form Submitted Successfully!",
                    text: "We have received your information.",
                    icon: "success",
                });
                setFormData({
                    Fname: "",
                    Phone: "",
                    Email: "",
                    Location: "",
                    Message: "",
                    MedicalReport: null
                })
                router.push("/")
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong! Please try again later.",
                })
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Failed to submit the form. Please check your network and try again.",
            })
        }
        finally {
            setLoading(false)
        }
    };
    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.5 },
        }),
    };

    return (
        <div>
            <div className="mt-2">
                <form
                    className="bg-gray-50 px-5 py-2 shadow-lg rounded-lg" onSubmit={handleSubmit}
                >
                    <h3 className="text-xl font-semibold text-gray-700 mb-1" style={{ fontFamily: 'Oswald, sans-serif' }}>Submit Your Query</h3>
                    <motion.div
                        {...(isLargeScreen
                            ? {
                                custom: 0,
                                className:"mb-4",
                                variants: fadeUp,
                                initial: "hidden",
                                whileInView: "visible",
                                viewport: { once: false },
                            }
                            : {})}
                    >
                        <label className="block text-gray-600 mb-1" htmlFor="Fname">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="Fname"
                            name="Fname"
                            className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-blue-500 dark:text-gray-900"
                            placeholder="Enter Your Full Name"
                            value={formData.Fname}
                            onChange={handlechange}
                            required
                        />
                    </motion.div>
                    <motion.div
                        className="mb-4"
                        custom={0}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                    >
                        <label className="block text-gray-600 mb-1" htmlFor="Phone">
                            Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            id="Phone"
                            name="Phone"
                            className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-blue-500 dark:text-gray-900"
                            placeholder="Enter Your Phone Number"
                            value={formData.Phone}
                            onChange={handlechange}
                            required
                        />
                    </motion.div>
                    <motion.div
                        className="mb-4"
                        custom={0}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                    >
                        <label className="block text-gray-600 mb-1" htmlFor="Email">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="Email"
                            name="Email"
                            className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-blue-500 dark:text-gray-900"
                            placeholder="Enter Your Email Address"
                            value={formData.Email}
                            onChange={handlechange}
                            required
                        />
                    </motion.div>
                    <motion.div
                        className="mb-4"
                        custom={0}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                    >
                        <label className="block text-gray-600 mb-1" htmlFor="Location">
                            Location <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="Location"
                            name="Location"
                            className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-blue-500 dark:text-gray-900"
                            placeholder="Enter Your Location"
                            value={formData.Location}
                            onChange={handlechange}
                            required
                        />
                    </motion.div>
                    <motion.div
                        className="mb-4"
                        custom={0}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                    >
                        <label className="block text-gray-600 mb-1" htmlFor="Message">
                            Write Problem English / Hindi <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="Message"
                            name="Message"
                            className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-blue-500 dark:text-gray-900"
                            placeholder="Describe Health Problem..."
                            value={formData.Message}
                            onChange={handlechange}
                            required
                        ></textarea>
                    </motion.div>
                    <motion.div
                        className="mb-4"
                        custom={0}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                    >
                        <label className="block text-gray-600 mb-1" htmlFor="MedicalReport">
                            Upload Medical Report (Optional)
                        </label>
                        <input
                            type="file"
                            id="MedicalReport"
                            name="MedicalReport"
                            onChange={handleFileChange}
                            accept=".pdf, .doc, .docx, .xls, .xlsx, .txt, .jpg, .png, .jpeg, .avif"
                            className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-blue-500 dark:text-gray-900"

                        />
                    </motion.div>

                    <motion.div
                        className="mb-4"
                        custom={0}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                    >
                        {
                            loading ? (<div className="flex justify-center items-center w-full h-full fixed top-0 left-0 z-50 rounded-md" style={{ backgroundColor: "rgba(75, 0, 130, 0.5)" }}>
                                <ClipLoader width="60" height="60" color="#0f8f41" className="animate-spin" />
                            </div>) : (
                                <button
                                    type="submit"
                                    className="w-full bg-[#0f8f41] border-2 border-[#0f8f41] text-white py-2 px-4 cursor-pointer rounded hover:bg-white hover:text-black transition duration-200"
                                >
                                    Submit
                                </button>
                            )
                        }
                    </motion.div>
                </form>
            </div>
        </div>
    )
}

export default Form