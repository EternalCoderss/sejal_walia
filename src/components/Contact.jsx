import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { HiPaperAirplane } from 'react-icons/hi';
import { personalInfo, socialLinks } from '../data/data';
import { slideUp, slideLeft, slideRight, staggerContainer, staggerItem } from '../utils/animations';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    setStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone}`
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: personalInfo.location,
      link: null
    }
  ];

  return (
    <section id="contact" className="section bg-dark-900/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={slideUp} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Let's Connect
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-6" />
            <p className="text-lg text-dark-300 max-w-2xl mx-auto">
              Ready to discuss your next project? Get in touch and let's create something amazing together
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={slideLeft}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-dark-200 font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 glass rounded-lg text-dark-50 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-dark-200 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 glass rounded-lg text-dark-50 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-dark-200 font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass rounded-lg text-dark-50 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    placeholder="How can I help you?"
                  />
                </div>

                <div>
                  <label className="block text-dark-200 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 glass rounded-lg text-dark-50 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status === 'sending'}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : status === 'success' ? (
                    <>✓ Message Sent!</>
                  ) : (
                    <>
                      Send Message
                      <HiPaperAirplane />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={slideRight} className="space-y-8">
              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      className="glass rounded-xl p-6 flex items-center gap-4 card-hover"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center text-white text-2xl flex-shrink-0 shadow-lg shadow-primary-500/30">
                        <Icon />
                      </div>
                      <div>
                        <div className="text-dark-400 text-sm font-medium">
                          {info.label}
                        </div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-dark-50 font-semibold hover:text-primary-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-dark-50 font-semibold">
                            {info.value}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="glass rounded-xl p-6">
                <h3 className="text-xl font-bold text-dark-50 mb-4">
                  Connect on Social Media
                </h3>
                <div className="flex gap-4">
                  <motion.a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center text-white text-xl hover:shadow-lg hover:shadow-primary-500/50 transition-shadow"
                  >
                    <FaLinkedin />
                  </motion.a>
                  <motion.a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center text-white text-xl hover:shadow-lg hover:shadow-primary-500/50 transition-shadow"
                  >
                    <FaTwitter />
                  </motion.a>
                  <motion.a
                    href={socialLinks.email}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center text-white text-xl hover:shadow-lg hover:shadow-primary-500/50 transition-shadow"
                  >
                    <FaEnvelope />
                  </motion.a>
                </div>
              </div>

              {/* CTA Box */}
              <div className="glass rounded-xl p-6 bg-gradient-to-br from-primary-900/20 to-transparent border-primary-500/20">
                <h3 className="text-xl font-bold gradient-text mb-2">
                  Let's Build Something Great
                </h3>
                <p className="text-dark-300 text-sm">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
