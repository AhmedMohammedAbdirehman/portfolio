import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: "MSc in Computer Science",
    specialization: "Data Science Specialization",
    institution: "University",
    location: "Ethiopia",
    period: "Completed",
    description: "Advanced studies in machine learning, data analytics, statistical modeling, and big data technologies.",
  },
  {
    degree: "BSc in Electrical and Computer Engineering",
    specialization: "Computer Engineering Focus Area",
    institution: "Jimma University",
    location: "Jimma, Ethiopia",
    period: "Completed",
    description: "Comprehensive foundation in computer systems, software development, electronics, and engineering principles.",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-medium tracking-widest uppercase text-sm">
            Education
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
            Academic Background
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-blue-300 to-amber-500 hidden lg:block" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative grid lg:grid-cols-2 gap-8 ${index % 2 === 0 ? '' : 'lg:direction-rtl'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 top-8 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-lg -translate-x-1/2 hidden lg:block z-10" />

                <div className={`${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:col-start-2 lg:pl-16'}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100"
                  >
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div className={index % 2 === 0 ? 'lg:text-right' : ''}>
                        <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
                          {edu.period}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{edu.degree}</h3>
                    <p className="text-blue-500 font-medium mb-3">{edu.specialization}</p>
                    
                    <div className={`flex items-center gap-4 text-slate-500 text-sm mb-4 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.institution}
                      </span>
                    </div>

                    <p className="text-slate-600 leading-relaxed">{edu.description}</p>
                  </motion.div>
                </div>

                {index % 2 === 0 && <div className="hidden lg:block" />}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}