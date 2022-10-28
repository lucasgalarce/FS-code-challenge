import axios from 'axios';

const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    return {};
  }

};

export const fetchLaunches = async () => fetchData(`${process.env.SPACEX_API_URL}/launches`);
export const fetchRockets = async () => fetchData(`${process.env.SPACEX_API_URL}/rockets`);
