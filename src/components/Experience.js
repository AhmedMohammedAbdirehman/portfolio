import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Cyber Security and Full Stack Web Development Instructor",
      company: "Techiftiin Institute of AI and Technology",
      location: "Djibouti, Djibouti",
      period: "Oct 2025 - Present",
      type: "Current",
      description: "Teaching comprehensive cybersecurity practices and MERN stack development, preparing students for modern tech challenges",
      image: "/images/techiftiin.png"
    },
    {
      title: "Full Stack Web Development (MERN) Instructor & Manager",
      company: "Mizan Institute of Technology (MiT)",
      location: "Addis Ababa, Ethiopia",
      period: "July 2023 - Oct 2025",
      type: "Past",
      description: "Led MERN stack curriculum development and instruction, managed educational programs and mentored students",
      image: "/images/mizan.png"
    },
    {
      title: "IT Personnel",
      company: "Zaafaran Foreign Employment Agent PLC",
      location: "Addis Ababa, Ethiopia",
      period: "2023 - Present",
      type: "Current",
      description: "Managing IT infrastructure and systems in a hybrid work environment, ensuring smooth operations and security",
      image: "/images/zaaf.png"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-16 rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-1 relative h-64 md:h-auto overflow-hidden">
                      <img 
                        src={exp.image} 
                        alt={exp.company}
                        className="w-full h-full object-cover opacity-25"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent" />
                      {exp.type === "Current" && (
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-cyan-500 text-slate-900 text-sm font-semibold rounded-full">
                            Current
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="md:col-span-2 p-8">
                      <h3 className="text-2xl font-bold text-slate-200 mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-cyan-400 font-semibold text-lg mb-4">
                        {exp.company}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center gap-2 text-slate-400">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      
                      <p className="text-slate-400 leading-relaxed">
                        {exp.description}
                      </p>
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