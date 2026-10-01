const BASE_URL = 'https://jobicy.com/api/v2/remote-jobs';

export const fetchJobs = async (count = 20, tag = '') => {
  try {
    let url = `${BASE_URL}?count=${count}`;
    if (tag.trim()) {
      url += `&tag=${encodeURIComponent(tag.trim())}`;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Server status: ${response.status}`);
    }

    const data = await response.json();
    return data.jobs || [];
  } catch (error) {
    console.error('Error fetching jobs:', error.message);
    throw error;
  }
};
