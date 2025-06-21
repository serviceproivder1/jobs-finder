
import React from 'react';
import { Helmet } from 'react-helmet';
import { AlertTriangle, Info, Shield, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const DisclaimerPage = () => {
  const lastUpdated = "January 15, 2024";

  const sections = [
    {
      icon: Info,
      title: "General Information",
      content: `
        <p>The information contained on JobHub is for general information purposes only. While we endeavor to keep the information 
        up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, 
        accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics 
        contained on the website for any purpose.</p>
        <p>Any reliance you place on such information is therefore strictly at your own risk.</p>
      `
    },
    {
      icon: ExternalLink,
      title: "External Links",
      content: `
        <p>Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with JobHub. 
        Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>
        <p>These links are provided for convenience only and do not constitute an endorsement by JobHub of the content of such external websites. 
        We have no control over the nature, content, and availability of those sites.</p>
      `
    },
    {
      icon: Shield,
      title: "Professional Advice",
      content: `
        <p>The information on this website is not intended as professional advice and should not be construed as such. 
        JobHub is not a career counseling service, employment agency, or professional advisory service.</p>
        <p>Before making any career decisions or taking any actions based on information found on our platform, 
        we recommend consulting with qualified professionals who can provide advice tailored to your specific situation.</p>
      `
    },
    {
      icon: AlertTriangle,
      title: "Limitation of Liability",
      content: `
        <p>In no event will JobHub be liable for any loss or damage including without limitation, indirect or consequential loss 
        or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, 
        the use of this website.</p>
        <p>Through this website, you are able to link to other websites which are not under the control of JobHub. 
        We have no control over the nature, content, and availability of those sites.</p>
      `
    }
  ];

  return (
    <>
      <Helmet>
        <title>Disclaimer - JobHub | Legal Disclaimer & Limitations</title>
        <meta name="description" content="Read JobHub's disclaimer to understand the limitations of our services and your responsibilities when using our job search platform." />
        <meta name="keywords" content="disclaimer, legal disclaimer, limitations, jobhub disclaimer, liability" />
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
              <span className="gradient-text">Disclaimer</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed mb-4"
            >
              Important information about the use of JobHub services and limitations of liability.
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
                This disclaimer governs your use of JobHub's website and services. By using our website, 
                you accept this disclaimer in full. If you disagree with any part of this disclaimer, 
                do not use our website.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We reserve the right to modify this disclaimer at any time. By using this website, 
                you agree to be bound by the current version of this disclaimer.
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
              {/* Job Listings */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Job Listings and Employer Information</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    JobHub serves as a platform for employers to post job opportunities and for job seekers to find employment. 
                    We do not verify the accuracy of job postings, employer information, or claims made by employers.
                  </p>
                  <p>
                    Job seekers are responsible for conducting their own due diligence when applying for positions, 
                    including verifying the legitimacy of employers and job opportunities.
                  </p>
                  <p>
                    We strongly recommend that users research potential employers independently and be cautious of 
                    any requests for personal information, money, or other suspicious activities.
                  </p>
                </div>
              </motion.div>

              {/* User Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">User-Generated Content</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    Our platform may contain content submitted by users, including resumes, profiles, reviews, and comments. 
                    This content is provided by users and does not necessarily reflect the views or opinions of JobHub.
                  </p>
                  <p>
                    We do not endorse, guarantee, or assume responsibility for any user-generated content. 
                    Users are solely responsible for the content they submit and any consequences arising from such content.
                  </p>
                  <p>
                    While we may moderate content to some extent, we cannot guarantee that all content is accurate, 
                    appropriate, or free from errors or omissions.
                  </p>
                </div>
              </motion.div>

              {/* Technical Issues */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Issues and Availability</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    While we strive to maintain the availability and functionality of our website, we cannot guarantee 
                    that the website will be available at all times or that it will be free from technical issues, 
                    interruptions, or errors.
                  </p>
                  <p>
                    We reserve the right to suspend, modify, or discontinue any aspect of our services at any time 
                    without prior notice. We will not be liable for any inconvenience or loss resulting from 
                    such actions.
                  </p>
                  <p>
                    Users are advised to maintain backup copies of any important information and not to rely 
                    solely on our platform for critical career-related activities.
                  </p>
                </div>
              </motion.div>

              {/* Third-Party Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Third-Party Services</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    Our platform may integrate with or provide access to third-party services, applications, or websites. 
                    These third-party services are governed by their own terms of service and privacy policies.
                  </p>
                  <p>
                    We do not control, endorse, or assume responsibility for any third-party services. 
                    Your use of such services is at your own risk and subject to the terms and conditions 
                    of those third parties.
                  </p>
                  <p>
                    We encourage users to review the terms and privacy policies of any third-party services 
                    before using them.
                  </p>
                </div>
              </motion.div>

              {/* Changes to Disclaimer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to This Disclaimer</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    We may update this disclaimer from time to time to reflect changes in our practices, 
                    legal requirements, or for other operational reasons. Any changes will be posted on this page 
                    with an updated revision date.
                  </p>
                  <p>
                    We encourage users to review this disclaimer periodically to stay informed about 
                    any changes. Your continued use of our services after any modifications constitutes 
                    acceptance of the updated disclaimer.
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions About This Disclaimer</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    If you have any questions about this disclaimer or need clarification on any points, 
                    please contact us:
                  </p>
                  <ul>
                    <li><strong>Email:</strong> legal@jobhub.com</li>
                    <li><strong>Phone:</strong> +1 (555) 123-4567</li>
                    <li><strong>Address:</strong> 123 Business Ave, Suite 100, San Francisco, CA 94105</li>
                  </ul>
                  <p>
                    We will do our best to address your concerns and provide clarification where needed.
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

export default DisclaimerPage;
