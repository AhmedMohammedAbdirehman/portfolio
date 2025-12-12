import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ExternalLink, ImageIcon } from 'lucide-react';

const experiences = [
  {
    title: "Cyber Security & Full Stack Web Development Instructor",
    company: "Techiftiin Institute of AI and Technology",
    location: "Djibouti, Djibouti",
    period: "Oct 2025 - Present",
    type: "On-site",
    description: "Teaching comprehensive courses in Cyber Security fundamentals and advanced Full Stack Web Development using the MERN stack. Developing curriculum and hands-on projects for students.",
    skills: ["Cyber Security", "MERN Stack", "Teaching", "Curriculum Development"],
  },
  {
    title: "Full Stack Web Development (MERN) Instructor & Manager",
    company: "Mizan Institute of Technology (MiT)",
    location: "Addis Ababa, Ethiopia",
    period: "July 2023 - Oct 2025",
    type: "On-site",
    description: "Led the Full Stack Development program, managing course content, student assessments, and instructor coordination. Taught MongoDB, Express.js, React, and Node.js with real-world project implementations.",
    skills: ["MongoDB", "Express.js", "React", "Node.js", "Team Management"],
  },
  {
    title: "IT Personnel",
    company: "Zaafaran Foreign Employment Agent PLC",
    location: "Addis Ababa, Ethiopia",
    period: "2023 - Present",
    type: "Hybrid",
    description: "Managing IT infrastructure, network administration, and providing technical support. Implementing and maintaining digital systems to streamline business operations.",
    skills: ["IT Support", "Network Admin", "System Management", "Technical Support"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-medium tracking-widest uppercase text-sm">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
            Work History
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="group relative bg-white rounded-3xl border border-slate-200 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                
                <div className="p-8 md:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    {/* Image placeholder */}
                    <div className="lg:w-48 flex-shrink-0">
                      <div className="w-full h-32 lg:h-40 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center border-2 border-dashed border-slate-300">
                        <div className="text-center">
                          <ImageIcon className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                          <span className="text-xs text-slate-400">Company Logo</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          exp.type === 'Hybrid' 
                            ? 'bg-amber-50 text-amber-600' 
                            : 'bg-blue-50 text-blue-600'
                        }`}>
                          {exp.type}
                        </span>
                        <span className="flex items-center gap-1 text-slate-500 text-sm">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {exp.title}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-4 text-slate-600 mb-4">
                        <span className="flex items-center gap-2 font-medium">
                          <Briefcase className="w-4 h-4 text-blue-500" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>

                      <p className="text-slate-600 leading-relaxed mb-6">{exp.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}