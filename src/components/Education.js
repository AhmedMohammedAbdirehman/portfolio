import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      specialization: "Data Science Specialization",
      institution: "American College of Technology ACT",
      description: "Advanced studies in machine learning, data analytics, artificial intelligence, and statistical modeling"
    },
    {
      degree: "Bachelor of Science in Electrical and Computer Engineering",
      specialization: "Computer Engineering Focus Area",
      institution: "Jimma University",
      description: "Comprehensive foundation in computer architecture, embedded systems, software engineering, and digital design"
    }
  ];

  return (
    <section id="education" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-16 rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl">
                      <GraduationCap className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-200 mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-cyan-400 font-semibold mb-2">
                        {edu.specialization}
                      </p>
                      <p className="text-slate-400 mb-4 flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        {edu.institution}
                      </p>
                      <p className="text-slate-500 leading-relaxed">
                        {edu.description}
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