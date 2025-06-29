import React from "react";
import { motion } from "framer-motion";

"use client";

const cardiologyInfo = [
    {
        title: "Heart Health",
        description: "Learn about maintaining a healthy heart and preventing cardiovascular diseases.",
        icon: "❤️",
    },
    {
        title: "Diagnostics",
        description: "Explore modern diagnostic tools like ECG, echocardiograms, and stress tests.",
        icon: "🩺",
    },
    {
        title: "Treatments",
        description: "Discover treatments including medication, lifestyle changes, and surgical options.",
        icon: "💊",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
};

const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

export default function CardiologyPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-100 to-pink-100 flex flex-col items-center justify-center p-6">
            <motion.h1
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
                className="text-4xl font-bold text-pink-700 mb-8 drop-shadow-lg"
            >
                Cardiology
            </motion.h1>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {cardiologyInfo.map((item, idx) => (
                    <motion.div
                        key={item.title}
                        whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(255,0,128,0.15)" }}
                        className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition-all"
                    >
                        <span className="text-5xl mb-4">{item.icon}</span>
                        <h2 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h2>
                        <p className="text-gray-600 text-center">{item.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </main>
    );
}