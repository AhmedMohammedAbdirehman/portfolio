import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Mail, Code, Database, Shield } from 'lucide-react';

const quickFacts = [
  { icon: MapPin, label: "Born in", value: "Addis Ababa, Ethiopia" },
  { icon: Calendar, label: "Birthday", value: "December 26, 1996" },
  { icon: Mail, label: "Email", value: "ahmimo53@gmail.com" },
];

const expertise = [
  { icon: Code, title: "Full Stack Development", desc: "MERN Stack Expert" },
  { icon: Database, title: "Data Science", desc: "ML & Analytics" },
  { icon: Shield, title: "Cyber Security", desc: "Security Instructor" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-medium tracking-widest uppercase text-sm">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
            Passionate Developer & Educator
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-amber-500/20 rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 md:p-10">
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  I'm a passionate Full Stack Developer and Data Scientist with a strong foundation in Computer Engineering. With an MSc in Computer Science specializing in Data Science, I bring both theoretical knowledge and practical expertise to every project.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Currently working as an instructor, I love sharing knowledge and helping others grow in the tech industry. My experience spans from IT management to teaching Full Stack Development and Cyber Security across Ethiopia and Djibouti.
                </p>

                <div className="space-y-4">
                  {quickFacts.map((fact, index) => (
                    <motion.div
                      key={fact.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                        <fact.icon className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <span className="text-slate-400 text-sm">{fact.label}</span>
                        <p className="text-slate-900 font-medium">{fact.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ x: 10 }}
                className="group p-6 rounded-2xl border border-slate-200 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 bg-white"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-4 pt-6"
            >
              {[
                { number: "3+", label: "Years Experience" },
                { number: "100+", label: "Students Taught" },
                { number: "10+", label: "Projects" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-2xl bg-slate-50">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-amber-500 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}