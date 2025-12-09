import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiCheck, HiStar } from 'react-icons/hi';

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const plans = [
    {
      name: "Starter",
      price: "1,500",
      currency: "₹",
      originalPrice: "₹18",
      description: "Perfect for new freelancers wanting a clean, professional profile",
      features: [
        "Optimized Upwork headline",
        "First 200 characters SEO rewrite",
        "Overview polishing",
        "1 keyword set",
        "Improvement suggestion list"
      ],
      gradient: "from-pink-400 via-rose-400 to-orange-400"
    },
    {
      name: "Professional",
      price: "3,500",
      currency: "₹",
      originalPrice: "₹42",
      description: "For freelancers wanting higher visibility + more responses",
      popular: true,
      features: [
        "Complete profile rewrite",
        "SEO keyword optimization",
        "Skill tag optimization",
        "Fully rewritten overview",
        "2 custom proposal templates",
        "Profile improvement guide"
      ],
      gradient: "from-purple-400 via-indigo-400 to-blue-400"
    },
    {
      name: "Premium",
      price: "5,000",
      currency: "₹",
      originalPrice: "₹60",
      description: "For serious freelancers wanting premium positioning",
      features: [
        "Full Upwork profile optimization",
        "Deep SEO keyword research",
        "Category & skill optimization",
        "Complete overview rewrite",
        "Eye-catching headline",
        "Portfolio section rewrite",
        "3 custom proposal templates",
        "Personalized success strategy"
      ],
      gradient: "from-blue-400 via-cyan-400 to-teal-400"
    }
  ];

  return (
    <section id="pricing" className="section bg-dark-950">
      <div className="container-custom">
        <div ref={ref} className="space-y-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-4">
              Tailored Packages
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              Tailored packages designed to elevate your freelancing career, no matter where you are in your journey.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mx-auto rounded-full mt-4" />
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative flex"
              >
                {/* Card */}
                <div className={`relative w-full flex flex-col rounded-3xl overflow-hidden ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border-2 border-purple-500/50' 
                    : 'glass border border-dark-700'
                }`}>
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 rounded-bl-2xl rounded-tr-3xl flex items-center gap-2 font-semibold text-sm">
                      <HiStar className="text-yellow-300" />
                      Most Popular
                    </div>
                  )}

                  <div className="p-8 flex flex-col flex-grow">
                    {/* Plan Name */}
                    <div>
                      <h3 className="text-2xl font-bold text-dark-50 mb-2">{plan.name}</h3>
                      <p className="text-dark-400 text-sm leading-relaxed">{plan.description}</p>
                    </div>

                    {/* Price */}
                    <div className="py-4">
                      <div className="flex items-baseline gap-2">
                        <span className={`text-6xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                          {plan.currency}{plan.price}
                        </span>
                        <span className="text-dark-500 line-through text-lg">({plan.originalPrice})</span>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-4 mb-8 flex-grow">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center`}>
                            <HiCheck className="text-white text-sm" />
                          </div>
                          <span className="text-dark-200 text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button - Always at bottom */}
                    <button
                      onClick={scrollToContact}
                      className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 mt-auto ${
                        plan.popular
                          ? `bg-gradient-to-r ${plan.gradient} text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105`
                          : `bg-gradient-to-r ${plan.gradient} text-white shadow-lg hover:shadow-xl hover:scale-105`
                      }`}
                    >
                      Get Started →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
