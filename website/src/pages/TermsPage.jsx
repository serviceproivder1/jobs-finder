
import React from 'react';
import { Helmet } from 'react-helmet';
import { FileText, Shield, Users, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const TermsPage = () => {
  const lastUpdated = "January 15, 2024";

  const sections = [
    {
      icon: Users,
      title: "Acceptance of Terms",
      content: `
        <p>By accessing and using JobHub's services, you accept and agree to be bound by the terms and provision of this agreement. 
        If you do not agree to abide by the above, please do not use this service.</p>
        <p>These Terms of Service constitute a legally binding agreement between you and JobHub. Your use of our platform 
        indicates your acceptance of these terms.</p>
      `
    },
    {
      icon: FileText,
      title: "Use of Services",
      content: `
        <p>JobHub provides a platform for job seekers and employers to connect. You may use our services to:</p>
        <ul>
          <li>Search and apply for job opportunities</li>
          <li>Create and maintain a professional profile</li>
          <li>Receive job recommendations and alerts</li>
          <li>Communicate with potential employers</li>
        </ul>
        <p>You agree to use our services only for lawful purposes and in accordance with these Terms of Service.</p>
      `
    },
    {
      icon: Shield,
      title: "User Responsibilities",
      content: `
        <p>As a user of JobHub, you are responsible for:</p>
        <ul>
          <li>Providing accurate and truthful information</li>
          <li>Maintaining the confidentiality of your account</li>
          <li>Complying with all applicable laws and regulations</li>
          <li>Respecting the rights and privacy of other users</li>
          <li>Not engaging in fraudulent or deceptive practices</li>
        </ul>
        <p>You are solely responsible for all content you post or transmit through our platform.</p>
      `
    },
    {
      icon: AlertTriangle,
      title: "Prohibited Activities",
      content: `
        <p>You may not use our services to:</p>
        <ul>
          <li>Post false, misleading, or fraudulent information</li>
          <li>Harass, abuse, or harm other users</li>
          <li>Violate any applicable laws or regulations</li>
          <li>Attempt to gain unauthorized access to our systems</li>
          <li>Distribute spam, viruses, or malicious content</li>
          <li>Scrape or harvest data from our platform</li>
        </ul>
        <p>Violation of these terms may result in suspension or termination of your account.</p>
      `
    }
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Service - JobHub | Legal Terms & Conditions</title>
        <meta name="description" content="Read JobHub's Terms of Service to understand your rights and responsibilities when using our job search platform. Legal terms and conditions explained." />
        <meta name="keywords" content="terms of service, legal terms, conditions, jobhub terms, user agreement" />
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
              Terms of <span className="gradient-text">Service</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed mb-4"
            >
              These terms govern your use of JobHub and outline your rights and responsibilities 
              as a user of our platform.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm text-gray-500"
            >
              Last updated: {lastUpdated}
            </motion.p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="prose prose-gray max-w-none"
            >
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Welcome to JobHub. These Terms of Service ("Terms") govern your use of our website, mobile application, 
                and related services (collectively, the "Services") operated by JobHub Inc. ("we," "us," or "our").
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Please read these Terms carefully before using our Services. By accessing or using our Services, 
                you agree to be bound by these Terms. If you disagree with any part of these terms, 
                then you may not access the Services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Sections */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
                  >
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
                        <Icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                    </div>
                    <div 
                      className="prose prose-gray max-w-none"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Additional Sections */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {/* Intellectual Property */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property Rights</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    The Services and their original content, features, and functionality are and will remain the exclusive property 
                    of JobHub and its licensors. The Services are protected by copyright, trademark, and other laws.
                  </p>
                  <p>
                    You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, 
                    republish, download, store, or transmit any of the material on our Services without our prior written consent.
                  </p>
                </div>
              </motion.div>

              {/* Privacy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy Policy</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information 
                    when you use our Services. By using our Services, you agree to the collection and use of information 
                    in accordance with our Privacy Policy.
                  </p>
                  <p>
                    Please review our Privacy Policy, which also governs your use of the Services, to understand our practices.
                  </p>
                </div>
              </motion.div>

              {/* Termination */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Termination</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    We may terminate or suspend your account and bar access to the Services immediately, without prior notice 
                    or liability, under our sole discretion, for any reason whatsoever and without limitation, including but 
                    not limited to a breach of the Terms.
                  </p>
                  <p>
                    If you wish to terminate your account, you may simply discontinue using the Services or contact us 
                    to request account deletion.
                  </p>
                </div>
              </motion.div>

              {/* Disclaimer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Disclaimer</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, 
                    this Company excludes all representations, warranties, conditions and terms whether express or implied, 
                    statutory or otherwise.
                  </p>
                  <p>
                    JobHub does not guarantee the accuracy, completeness, or usefulness of any information on the Services 
                    and neither does JobHub adopt nor endorse any of the information contained therein.
                  </p>
                </div>
              </motion.div>

              {/* Changes to Terms */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                    If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                  </p>
                  <p>
                    What constitutes a material change will be determined at our sole discretion. By continuing to access 
                    or use our Services after any revisions become effective, you agree to be bound by the revised terms.
                  </p>
                </div>
              </motion.div>

              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-blue-50 rounded-xl p-8 border border-blue-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <ul>
                    <li><strong>Email:</strong> legal@jobhub.com</li>
                    <li><strong>Phone:</strong> +1 (555) 123-4567</li>
                    <li><strong>Address:</strong> 123 Business Ave, Suite 100, San Francisco, CA 94105</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsPage;
