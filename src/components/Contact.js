import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MessageSquare,Facebook  } from 'lucide-react';
// import { Button } from './ui/button';

export default function Contact() {
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "ahmimo53@gmail.com",
      link: "mailto:ahmimo53@gmail.com",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      link: "https://www.linkedin.com/in/ahmed-mohammed-75388b244/",
      color: "from-blue-600 to-blue-400"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View GitHub Profile",
      link: "https://github.com/AhmedMohammedAbdirehman",
      color: "from-gray-700 to-gray-500"
    },
    {
      icon: Send,
      label: "Telegram",
      value: "Chat on Telegram",
      link: "https://t.me/ahmimo53",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      value: "Message on WhatsApp",
      link: "https://wa.me/+251996251918",
      color: "from-green-600 to-green-400"
    },
    {
  icon: Facebook,
  label: "Facebook",
  value: "facebook.com/ahmed.tkd", // Your Facebook username or URL
  link: "https://www.facebook.com/ahmed.tkd.636922/",
  color: "from-blue-600 to-blue-400"
}
  ];

  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8 rounded-full" />
          <p className="text-center text-slate-400 text-lg max-w-2xl mx-auto mb-16">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-all`} />
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 bg-gradient-to-br ${social.color} rounded-xl`}>
                        <social.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-200 mb-1">
                          {social.label}
                        </h3>
                        <p className="text-slate-400 text-sm">
                          {social.value}
                        </p>
                      </div>
                      <svg
                        className="w-6 h-6 text-slate-600 group-hover:text-cyan-400 transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-20" />
              <div className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                <p className="text-slate-300 text-lg mb-2">
                  Prefer traditional email?
                </p>
                <a 
                  href="mailto:ahmimo53@gmail.com"
                  className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                >
                  ahmimo53@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}