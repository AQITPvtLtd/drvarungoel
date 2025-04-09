"use client";
import React from "react";
import { motion } from "framer-motion";

const stats = [
    { title: "Total Experience", number: 10, con: "Bringing 10+ years of expertise in personalized cancer treatment." },
    { title: "Success Case", percentage: 95, con: "Achieving 95% success rate with advanced and personalized cancer treatments." },
    { title: "Happy Patients", percentage: 98, con: "Ensuring 98% patient satisfaction with compassionate and effective cancer care." },
];

const ProgressCircle = ({ percentage, title, con, delay = 0 }) => {
    return (
        <motion.div
            className="flex flex-col items-center text-center space-y-4"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay }}
            viewport={{ once: false, amount: 0.4 }}
        >
            <div className="relative w-24 h-24">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                        className="text-gray-200 stroke-current"
                        strokeWidth="8"
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                    />
                    <circle
                        className="text-[#0f8f41] stroke-current"
                        strokeWidth="8"
                        strokeLinecap="round"
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        strokeDasharray="251.2"
                        strokeDashoffset={251.2 - (251.2 * percentage) / 100}
                    />
                    <text
                        x="50%"
                        y="50%"
                        dy=".3em"
                        textAnchor="middle"
                        className="text-xl font-bold fill-current text-gray-700"
                    >
                        {percentage ? `${percentage}%` : "10+"}
                    </text>
                </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600 max-w-xs">{con}</p>
        </motion.div>
    );
};

const Statistics = () => {
    return (
        <div className="flex flex-wrap justify-center gap-10 py-5">
            {stats.map((stat, index) => (
                <ProgressCircle
                    key={index}
                    percentage={stat.percentage}
                    title={stat.title}
                    con={stat.con}
                    delay={index * 0.3} // delay to make them come one after another
                />
            ))}
        </div>
    );
};

export default Statistics;
