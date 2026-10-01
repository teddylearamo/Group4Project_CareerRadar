import { useState, useEffect } from 'react';
import { fetchJobs } from '../services/JobApi';

export const useJobs = (initialTag = '') => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(initialTag);

  const loadJobs = async (query = searchTerm) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchJobs(20, query);
      setJobs(data);
    } catch (err) {
      setError(err.message || 'Failed to load jobs from Jobicy.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadJobs(searchTerm);
  }, [searchTerm]);

  return {
    jobs,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    refetch: loadJobs
  };
};

export default useJobs;
