
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Building } from 'lucide-react';
import { motion } from 'framer-motion';

const JobCard = ({ job, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="job-card bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:border-blue-200"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {job.title}
          </h3>
          <div className="flex items-center space-x-2 text-gray-600 mb-2">
            <Building className="h-4 w-4" />
            <span className="text-sm font-medium">{job.company}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-500 mb-3">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{job.location}</span>
          </div>
        </div>
        <div className="ml-4">
          <img  
            className="w-12 h-12 rounded-lg object-cover border border-gray-200" 
            alt={`${job.company} logo`}
           src="https://images.unsplash.com/photo-1485531865381-286666aa80a9" />
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {job.description}
      </p>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{job.type}</span>
          </div>
          {job.salary && (
            <div className="flex items-center space-x-1">
              <DollarSign className="h-4 w-4" />
              <span>{job.salary}</span>
            </div>
          )}
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          job.featured 
            ? 'bg-blue-100 text-blue-800' 
            : 'bg-gray-100 text-gray-600'
        }`}>
          {job.featured ? 'Featured' : 'Standard'}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {job.tags.slice(0, 2).map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
          {job.tags.length > 2 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
              +{job.tags.length - 2} more
            </span>
          )}
        </div>
        <Link
          to={`/job/${job.id}`}
          className="btn-primary px-4 py-2 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-300"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default JobCard;
