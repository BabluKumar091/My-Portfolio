import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
    const education = [
        {
            degree: "Secondary Education (10th)",
            institution: "Bihar School Examination Board",
            year: "2018 - 2020",
            desc: "Achieved a distinguished score of 88%, placing in the top tier of students. Developed a strong fundamental understanding of science and mathematics.",
            location: "Samastipur, Bihar"
        },
        {
            degree: "Higher Secondary (12th)",
            institution: "Bihar School Examination Board",
            year: "2020 - 2022",
            desc: "Completed intermediate studies with a focus on PCM (Physics, Chemistry, Math). Maintained consistent academic performance with a score of 77%.",
            location: "Samastipur, Bihar"
        },
        {
            degree: "Bachelor of Technology (B.Tech)",
            institution: "Jodhpur Institute of Engineering and Technology",
            year: "2022 - 2026",
            desc: "Focusing on Software Development, Web Technologies, and Database Management. Building a strong foundation in modern programming paradigms.",
            location: "Jodhpur, Rajasthan"
        },
        // Add more if needed
    ];

    return (
        <section className="py-20 bg-[#191919] relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
                        Education
                    </h2>
                    <p className="text-gray-400">My academic background and qualifications</p>
                </motion.div>

                <div className="relative border-l-2 border-white/10 ml-6 md:ml-12 space-y-12">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                                <div className="absolute inset-0 bg-white opacity-40 animate-ping rounded-full" />
                            </div>

                            <div className="bg-[#202020] p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 group">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                                            <GraduationCap size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-gray-400 text-sm font-medium">
                                                {edu.institution}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:items-end gap-1 text-sm text-gray-500">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={14} />
                                            <span>{edu.year}</span>
                                        </div>
                                        {(edu.location) && (
                                            <div className="flex items-center gap-2">
                                                <MapPin size={14} />
                                                <span>{edu.location}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <p className="text-gray-400 leading-relaxed text-sm md:text-base border-t border-white/5 pt-4">
                                    {edu.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
