
import React from 'react';
import { Helmet } from 'react-helmet';
import { Shield, Eye, Lock, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const PrivacyPolicyPage = () => {
  const lastUpdated = "January 15, 2024";

  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: `
        <p>We collect information you provide directly to us, such as when you create an account, apply for jobs, or contact us. This may include:</p>
        <ul>
          <li>Personal information (name, email address, phone number)</li>
          <li>Professional information (resume, work experience, skills)</li>
          <li>Account preferences and settings</li>
          <li>Communications with us</li>
        </ul>
        <p>We also automatically collect certain information when you use our services, including:</p>
        <ul>
          <li>Device and browser information</li>
          <li>IP address and location data</li>
          <li>Usage patterns and preferences</li>
          <li>Cookies and similar technologies</li>
        </ul>
      `
    },
    {
      icon: Users,
      title: "How We Use Your Information",
      content: `
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Match you with relevant job opportunities</li>
          <li>Communicate with you about our services</li>
          <li>Personalize your experience</li>
          <li>Ensure security and prevent fraud</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p>We may also use your information for research and analytics to improve our platform and services.</p>
      `
    },
    {
      icon: Shield,
      title: "Information Sharing",
      content: `
        <p>We may share your information in the following circumstances:</p>
        <ul>
          <li><strong>With Employers:</strong> When you apply for jobs or express interest in opportunities</li>
          <li><strong>Service Providers:</strong> With third-party vendors who help us operate our platform</li>
          <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
          <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
        </ul>
        <p>We do not sell your personal information to third parties for their marketing purposes.</p>
      `
    },
    {
      icon: Lock,
      title: "Data Security",
      content: `
        <p>We implement appropriate technical and organizational measures to protect your personal information, including:</p>
        <ul>
          <li>Encryption of data in transit and at rest</li>
          <li>Regular security assessments and updates</li>
          <li>Access controls and authentication measures</li>
          <li>Employee training on data protection</li>
        </ul>
        <p>While we strive to protect your information, no method of transmission over the internet is 100% secure.</p>
      `
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - JobHub | Data Protection & Privacy</title>
        <meta name="description" content="Learn how JobHub protects your privacy and handles your personal information. Read our comprehensive privacy policy for transparency and trust." />
        <meta name="keywords" content="privacy policy, data protection, personal information, jobhub privacy, data security" />
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
              Privacy <span className="gradient-text">Policy</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed mb-4"
            >
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your personal information.
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
                At JobHub, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you use our 
                job search platform and related services.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                By using our services, you agree to the collection and use of information in accordance with this policy. 
                We encourage you to read this policy carefully and contact us if you have any questions.
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
              {/* Your Rights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights and Choices</h2>
                <div className="prose prose-gray max-w-none">
                  <p>You have certain rights regarding your personal information, including:</p>
                  <ul>
                    <li><strong>Access:</strong> You can request access to your personal information</li>
                    <li><strong>Correction:</strong> You can request correction of inaccurate information</li>
                    <li><strong>Deletion:</strong> You can request deletion of your personal information</li>
                    <li><strong>Portability:</strong> You can request a copy of your data in a portable format</li>
                    <li><strong>Opt-out:</strong> You can opt out of certain communications and data processing</li>
                  </ul>
                  <p>To exercise these rights, please contact us using the information provided below.</p>
                </div>
              </motion.div>

              {/* Cookies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>
                <div className="prose prose-gray max-w-none">
                  <p>We use cookies and similar tracking technologies to:</p>
                  <ul>
                    <li>Remember your preferences and settings</li>
                    <li>Analyze how you use our services</li>
                    <li>Provide personalized content and recommendations</li>
                    <li>Improve our platform's performance and functionality</li>
                  </ul>
                  <p>You can control cookies through your browser settings, but disabling cookies may affect your experience on our platform.</p>
                </div>
              </motion.div>

              {/* Updates */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Policy Updates</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, 
                    legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page 
                    and updating the "Last updated" date.
                  </p>
                  <p>
                    We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
                  </p>
                </div>
              </motion.div>

              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-blue-50 rounded-xl p-8 border border-blue-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                  </p>
                  <ul>
                    <li><strong>Email:</strong> privacy@jobhub.com</li>
                    <li><strong>Phone:</strong> +1 (555) 123-4567</li>
                    <li><strong>Address:</strong> 123 Business Ave, Suite 100, San Francisco, CA 94105</li>
                  </ul>
                  <p>
                    We will respond to your inquiry within a reasonable timeframe and work to address any concerns you may have.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
