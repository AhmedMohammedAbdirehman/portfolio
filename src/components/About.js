import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Mail, Phone } from 'lucide-react';

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <h2 className="text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-16 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl" />
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                <h3 className="text-3xl font-bold text-slate-200 mb-6">
                  Building Tomorrow's Technology, Today
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  I'm a passionate technologist with expertise spanning full-stack development, 
                  cybersecurity, and data science. With both a BSc in Electrical and Computer 
                  Engineering and an MSc in Computer Science, I bring a unique blend of 
                  hardware understanding and software expertise to every project.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Currently, I'm shaping the future of tech education as an instructor, 
                  teaching MERN stack development and cybersecurity while also working as 
                  an IT professional. I'm driven by the challenge of solving complex problems 
                  and the reward of seeing students and projects succeed.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <Calendar className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-200 mb-1">Born</h4>
                  <p className="text-slate-400">December 26, 1996</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-200 mb-1">Location</h4>
                  <p className="text-slate-400">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-200 mb-1">Email</h4>
                  <a 
                    href="mailto:ahmimo53@gmail.com" 
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    ahmimo53@gmail.com
                  </a>
                </div>
              </div>
            </div>
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
  <div className="flex items-start gap-4">
    <div className="p-3 bg-cyan-500/10 rounded-lg">
      {/* Changed from Mail to Phone icon */}
      <Phone className="w-6 h-6 text-cyan-400" />
    </div>
    <div>
      <h4 className="text-lg font-semibold text-slate-200 mb-1">Phone</h4>
      <div className="space-y-2">
        {/* First phone number */}
        <a 
          href="tel:+251918564780" 
          className="block text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          +251 91 856 4780
        </a>
        {/* Second phone number */}
        <a 
          href="tel:+25377054254" 
          className="block text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          +253 77 054 254
        </a>
      </div>
    </div>
  </div>
</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}