
import React from 'react';
import { Helmet } from 'react-helmet';
import { Users, Target, Award, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const values = [
    {
      icon: Users,
      title: 'People First',
      description: 'We believe that great careers start with great people. Our platform is designed to connect talented individuals with companies that value their potential.'
    },
    {
      icon: Target,
      title: 'Precision Matching',
      description: 'Our advanced algorithms and human expertise work together to ensure the perfect match between candidates and opportunities.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from the quality of job listings to the user experience on our platform.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We are passionate about helping people find meaningful work that aligns with their values, skills, and career aspirations.'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Jobs Posted' },
    { number: '10,000+', label: 'Companies' },
    { number: '500,000+', label: 'Job Seekers' },
    { number: '95%', label: 'Success Rate' }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - JobHub | Leading Job Search Platform</title>
        <meta name="description" content="Learn about JobHub's mission to connect talented professionals with their dream careers. Discover our story, values, and commitment to excellence in job matching." />
        <meta name="keywords" content="about jobhub, company mission, job search platform, career matching, employment services" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              About <span className="gradient-text">JobHub</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              We're on a mission to revolutionize how people find their dream careers. 
              JobHub connects talented professionals with opportunities that match their 
              skills, values, and aspirations.
            </motion.p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Founded in 2020, JobHub was born from a simple observation: the job search 
                    process was broken. Too many talented people were struggling to find 
                    opportunities that matched their potential, while companies were having 
                    difficulty finding the right candidates.
                  </p>
                  <p>
                    We set out to change that by creating a platform that goes beyond simple 
                    keyword matching. Our team of engineers, data scientists, and career experts 
                    work together to understand what makes a great job match.
                  </p>
                  <p>
                    Today, JobHub serves thousands of job seekers and hundreds of companies, 
                    facilitating meaningful connections that lead to successful careers and 
                    thriving businesses.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img  
                  className="rounded-lg shadow-lg w-full h-80 object-cover" 
                  alt="JobHub team working together"
                 src="https://images.unsplash.com/photo-1681184025442-1517cb9319c1" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
              <p className="text-lg text-gray-600">
                Numbers that reflect our commitment to connecting talent with opportunity
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                To empower every professional to find work that is meaningful, rewarding, 
                and aligned with their unique talents and aspirations. We believe that when 
                people love what they do, they create extraordinary value for themselves, 
                their companies, and society as a whole.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                >
                  Get in Touch
                </a>
                <a
                  href="/"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
                >
                  Explore Jobs
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
