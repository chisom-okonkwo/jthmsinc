import React, { useState, useEffect } from "react";
import { Building2, Phone, Mail, CheckCircle, TrendingUp, Users, Briefcase, LineChart, ArrowRight, Sparkles, Target, Award, ChevronRight } from "lucide-react";


export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      id: 1,
      icon: LineChart,
      title: "Strategic Planning",
      description: "Transform your vision into actionable strategies that drive sustainable growth and competitive advantage in today's dynamic market.",
      gradient: "from-blue-600 to-cyan-500",
      image: "https://www.bls.gov/careeroutlook/2018/images/blacks-in-the-labor-force_cover.jpg"
    },
    {
      id: 2,
      icon: Users,
      title: "Non-Profit Advisory",
      description: "Specialized guidance for mission-driven organizations on compliance, fundraising, and maximizing social impact.",
      gradient: "from-purple-600 to-pink-500",
      image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "Technology Edge",
      description: "Harness cutting-edge digital solutions to streamline operations, enhance efficiency, and stay ahead of industry trends.",
      gradient: "from-indigo-600 to-blue-500",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 4,
      icon: Briefcase,
      title: "Accounting Excellence",
      description: "Comprehensive financial services ensuring accuracy, regulatory compliance, and strategic financial clarity.",
      gradient: "from-emerald-500 to-teal-400",
      image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 5,
      icon: Briefcase,
      title: "Emerging Business & Startup Advisory Services",
      description: "",
      gradient: "from-rose-500 to-orange-400",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 6,
      icon: Briefcase,
      title: "Grant Writing Services",
      description: "Comprehensive financial services ensuring accuracy, regulatory compliance, and strategic financial clarity.",
      gradient: "from-yellow-500 to-amber-400",
      image: "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const stats = [
    { number: "40+", label: "Years Experience", icon: Award },
    { number: "500+", label: "Clients Served", icon: Users },
    { number: "98%", label: "Success Rate", icon: Target },
    { number: "24/7", label: "Support", icon: Sparkles }
  ];

  // changed code: apply same background image to service cards with ids 1-6
  const imageBgIds = [1, 2, 3, 4, 5, 6];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .glass {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .glass-dark {
          background: rgba(10, 31, 68, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .gradient-navy {
          background: linear-gradient(135deg, #0a1f44 0%, #1a3a6b 50%, #2563eb 100%);
        }

        .gradient-text {
          background: linear-gradient(135deg, #0a1f44 0%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 6s ease-in-out 2s infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .hover-scale {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-scale:hover {
          transform: scale(1.05) translateY(-8px);
        }

        .glow {
          box-shadow: 0 0 40px rgba(37, 99, 235, 0.3);
        }

        .glow-hover:hover {
          box-shadow: 0 0 60px rgba(37, 99, 235, 0.5);
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }

        .slide-in-left {
          animation: slideInLeft 1s ease-out;
        }

        .slide-in-right {
          animation: slideInRight 1s ease-out;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .dot-pattern {
          background-image: radial-gradient(circle, rgba(37, 99, 235, 0.15) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl gradient-navy flex items-center justify-center glow">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-[#0a1f44]">JTH Management</h1>
                <p className="text-xs text-blue-600 font-semibold">Advisory Services</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Services</a>
              <a href="#about" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">About</a>
              <a href="#contact">
                <button className="px-6 py-2.5 rounded-xl gradient-navy text-white font-semibold hover:scale-105 transition-transform glow-hover">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-50"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400 rounded-full filter blur-[120px] opacity-30 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400 rounded-full filter blur-[120px] opacity-20 animate-float-delayed"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 slide-in-left">
              <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-base md:text-lg font-semibold text-slate-700">Established 1980</span>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9]">
                  <span className="gradient-text">Business</span>
                  <br />
                  <span className="text-[#0a1f44]">Consulting</span>
                </h2>
                <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-xl">
                  Transforming businesses with <span className="font-bold text-blue-600">expert guidance</span> and proven strategies since 1980
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact">
                  <button className="group px-8 py-4 rounded-2xl gradient-navy text-white font-bold text-lg hover:scale-105 transition-all glow-hover flex items-center gap-2 w-full sm:w-auto justify-center">
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
                <a href="#services">
                  <button className="px-8 py-4 rounded-2xl glass text-[#0a1f44] font-bold text-lg hover:scale-105 transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
                    Explore Services
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-3xl md:text-4xl font-black gradient-text">{stat.number}</p>
                    <p className="text-sm text-slate-600 font-medium mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 gradient-navy rounded-[3rem] transform rotate-6 opacity-20"></div>
                <div className="relative glass rounded-[3rem] p-3 glow">
                  <img 
                    src="https://www.bls.gov/careeroutlook/2018/images/blacks-in-the-labor-force_cover.jpg?w=800&h=900&fit=crop" 
                    alt="Business Consulting"
                    className="rounded-[2.5rem] w-full h-auto"
                  />
                </div>
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 glass-dark rounded-3xl p-6 animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-black text-white">40+</p>
                    <p className="text-sm text-blue-200 font-medium">Years Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-lg font-semibold text-slate-700">Our Expertise</span>
            </div>
            <h3 className="text-5xl md:text-6xl font-black mb-6">
              <span className="gradient-text">Comprehensive</span> Services
            </h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Tailored solutions designed to elevate your business to new heights
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const useImage = !!service.image;
              return (
                <div
                  key={service.id}
                  className={`group rounded-[2.5rem] p-8 md:p-10 hover-scale cursor-pointer glow-hover transition-shadow duration-300 ${
                    useImage ? 'relative overflow-hidden shadow-md hover:shadow-2xl' : 'glass shadow-sm'
                  }`}
                  onMouseEnter={() => setActiveService(index)}
                  style={
                    useImage
                      ? {
                          backgroundImage: `url('${service.image}')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat'
                        }
                      : undefined
                  }
                >
                  {useImage && (
                    // dark overlay to keep text readable
                    <div className="absolute inset-0 bg-black/45 rounded-[2.5rem] pointer-events-none"></div>
                  )}

                  {/* Decorative gradient stripe (replaces icon) */}
                  <div className="relative z-10">
                    <div className={`mb-6 w-20 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} opacity-95`} />

                    <h4 className={`text-2xl md:text-3xl font-bold mb-4 ${useImage ? 'text-white' : 'text-[#0a1f44]'}`}>
                      {service.title}
                    </h4>
                    <p className={`${useImage ? 'text-blue-100' : 'text-slate-600'} leading-relaxed text-lg mb-6`}>
                      {service.description || 'Learn how we can help — tailored solutions for your needs.'}
                    </p>

                    <div
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all ${
                        useImage ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-white text-[#0a1f44] hover:bg-slate-50'
                      }`}
                    >
                      <span>Learn More</span>
                      <ArrowRight className={`w-4 h-4 ${useImage ? 'text-white' : 'text-[#0a1f44]'}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-navy opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                <div className="glass rounded-3xl p-3 hover-scale">
                  <img 
                    src="https://images.unsplash.com/photo-1653669487404-09c3617c2b6c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwcGVvcGxlJTIwY29uc3VsdGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500?w=400&h=400&fit=crop" 
                    alt="Team Collaboration"
                    className="rounded-2xl w-full h-full object-cover"
                  />
                </div>
                <div className="glass rounded-3xl p-3 hover-scale mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop" 
                    alt="Business Strategy"
                    className="rounded-2xl w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 glass-dark rounded-3xl px-8 py-6 animate-float">
                <p className="text-4xl font-black text-white text-center">Since 1980</p>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2">
                <Award className="w-4 h-4 text-blue-600" />
                <span className="text-lg font-semibold text-slate-700">Excellence & Trust</span>
              </div>
              
              <h3 className="text-5xl md:text-6xl font-black leading-tight">
                <span className="gradient-text">40+ Years</span>
                <br />
                <span className="text-[#0a1f44]">of Excellence</span>
              </h3>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                Since 1980, we've been guiding businesses through transformation with unmatched expertise and dedication. Our deep understanding of the modern business landscape ensures you receive cutting-edge solutions backed by decades of proven success.
              </p>

              <div className="space-y-4">
                {[
                  'Strategic Business Planning',
                  'Financial Optimization',
                  'Technology Integration',
                  'Sustainable Growth Strategies'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-lg font-semibold text-[#0a1f44]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 md:py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative glass-dark rounded-[3rem] p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500 rounded-full filter blur-[120px] opacity-30" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500 rounded-full filter blur-[120px] opacity-20" />

            <div className="relative grid md:grid-cols-2 gap-8 items-start">
              {/* Left: Contact info */}
              <div className="text-white">
                <h3 className="text-4xl md:text-5xl font-black mb-4">
                  Let's Talk Business
                </h3>
                <p className="text-blue-100 mb-6">
                  Partner with JTH Management to transform your strategy and operations. Use the form to send project details or contact us directly via phone or email.
                </p>

                <div className="space-y-4">
                  <a href="tel:+19015085027" className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-200">Call Us</p>
                      <p className="font-bold text-white">+1 (901) 508-5027</p>
                    </div>
                  </a>

                  <a href="mailto:info@jthmsinc.com" className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-200">Email</p>
                      <p className="font-bold text-white break-all">info@jthmsinc.com</p>
                    </div>
                  </a>
                </div>

                <p className="mt-6 text-sm text-blue-200">
                  Typical response time: within 24 business hours. For urgent matters please call.
                </p>
              </div>

              {/* Right: Contact form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = Object.fromEntries(new FormData(e.target));
                  console.log('contact form submission', data);
                  alert('Thank you — your message was sent. (dev only)');
                  e.currentTarget.reset();
                }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-md"
                aria-label="Contact form"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex flex-col">
                    <span className="text-sm font-medium text-slate-700 mb-1">Full name</span>
                    <input name="name" type="text" required className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Jane Doe" />
                  </label>

                  <label className="flex flex-col">
                    <span className="text-sm font-medium text-slate-700 mb-1">Email</span>
                    <input name="email" type="email" required className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="you@company.com" />
                  </label>
                </div>

                <div className="mt-4">
                  <label className="flex flex-col">
                    <span className="text-sm font-medium text-slate-700 mb-1">Phone (optional)</span>
                    <input name="phone" type="tel" className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="+1 (___) ___-____" />
                  </label>
                </div>

                <div className="mt-4">
                  <label className="flex flex-col">
                    <span className="text-sm font-medium text-slate-700 mb-1">Message</span>
                    <textarea name="message" required rows={5} className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none" placeholder="Brief description of your needs, timeline and budget." />
                  </label>
                </div>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <button type="submit" className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-br from-[#0a1f44] to-blue-600 text-white font-semibold hover:scale-[1.02] transition-transform">
                    Send Message
                    <ArrowRight className="w-5 h-5 text-white" />
                  </button>

                  <div className="text-sm text-slate-500">
                    By submitting you agree to our <a href="#privacy" className="text-blue-600 font-medium">privacy policy</a>.
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-navy flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-[#0a1f44]">JTH Management Advisory Services</p>
                <p className="text-sm text-slate-600">Excellence Since 1980</p>
              </div>
            </div>
            <p className="text-slate-600 text-sm">
              © 2024 JTH Management. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
