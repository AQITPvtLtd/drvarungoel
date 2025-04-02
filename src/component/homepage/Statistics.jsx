import React from "react";

const stats = [
    { title: "Total Experience", number: 20, con: "Bringing 20+ years of expertise in personalized cancer treatment." },
    { title: "Success Case", percentage: 95, con: "Achieving 93% success rate with advanced and personalized cancer treatments." },
    { title: "Happy Patients", percentage: 98, con: "Ensuring 90% patient satisfaction with compassionate and effective cancer care." },
];

const ProgressCircle = ({ percentage, title, con }) => {
    return (
        <div className="flex flex-col items-center text-center space-y-4">
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
                        {percentage ? `${percentage}%` : "20+"}
                    </text>
                </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800" style={{ fontFamily: "Roboto Slab, serif" }}>{title}</h3>
            <p className="text-sm text-gray-600 max-w-xs">{con}</p>
        </div>
    );
};

const Statistics = () => {
    return (
        <div className="flex flex-wrap justify-center gap-10 py-5">
            {stats.map((stat, index) => (
                <ProgressCircle key={index} percentage={stat.percentage} title={stat.title} con={stat.con} />
            ))}
        </div>
    );
};

export default Statistics;