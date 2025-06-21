
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Search, MapPin, Briefcase, Users, TrendingUp, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import JobCard from '@/components/JobCard';
import { jobsData, getFeaturedJobs, searchJobs } from '@/data/jobs';
import { useToast } from '@/components/ui/use-toast';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobsData);
  const [featuredJobs, setFeaturedJobs] = useState([]);
  const { toast } = useToast();

  useEffect(() => {
    // Load featured jobs on component mount
    setFeaturedJobs(getFeaturedJobs());
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    
    if (!searchQuery.trim() && !locationQuery.trim()) {
      setFilteredJobs(jobsData);
      return;
    }

    // Simple search implementation - can be enhanced with more sophisticated filtering
    let results = searchJobs(searchQuery);
    
    if (locationQuery.trim()) {
      results = results.filter(job => 
        job.location.toLowerCase().includes(locationQuery.toLowerCase())
      );
    }

    setFilteredJobs(results);
    
    toast({
      title: "Search completed",
      description: `Found ${results.length} job${results.length !== 1 ? 's' : ''} matching your criteria.`,
    });
  };

  const stats = [
    { icon: Briefcase, label: 'Active Jobs', value: '2,500+' },
    { icon: Users, label: 'Companies', value: '500+' },
    { icon: TrendingUp, label: 'Success Rate', value: '95%' },
    { icon: Star, label: 'User Rating', value: '4.9/5' },
  ];

  return (
    <>
      <Helmet>
        <title>JobHub - Find Your Dream Job | Top Job Opportunities</title>
        <meta name="description" content="Discover thousands of job opportunities across various industries. Search and apply for jobs from top companies. Start your career journey with JobHub today." />
        <meta name="keywords" content="jobs, careers, employment, job search, hiring, recruitment, job opportunities, career development" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Find Your <span className="gradient-text">Dream Job</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Discover thousands of job opportunities from top companies worldwide. 
              Your perfect career match is just a search away.
            </motion.p>

            {/* Search Form */}
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              onSubmit={handleSearch}
              className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Job title, keywords, or company"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="City, state, or remote"
                    value={locationQuery}
                    onChange={(e) => setLocationQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full py-3 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Search Jobs
                </button>
              </div>
            </motion.form>
          </div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      {featuredJobs.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Jobs</h2>
              <p className="text-lg text-gray-600">Hand-picked opportunities from top companies</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredJobs.map((job, index) => (
                <JobCard key={job.id} job={job} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Latest Jobs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {searchQuery || locationQuery ? 'Search Results' : 'Latest Job Opportunities'}
            </h2>
            <p className="text-lg text-gray-600">
              {searchQuery || locationQuery 
                ? `${filteredJobs.length} job${filteredJobs.length !== 1 ? 's' : ''} found`
                : 'Fresh opportunities added daily'
              }
            </p>
          </div>

          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job, index) => (
                <JobCard key={job.id} job={job} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search criteria or browse all available positions.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setLocationQuery('');
                  setFilteredJobs(jobsData);
                }}
                className="btn-primary px-6 py-3 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
              >
                View All Jobs
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of professionals who found their dream jobs through JobHub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => toast({
                title: "Feature coming soon!",
                description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
              })}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
            >
              Create Job Alert
            </button>
            <button 
              onClick={() => toast({
                title: "Feature coming soon!",
                description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
              })}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Post a Job
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
