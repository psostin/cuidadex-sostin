// src/pages/api/cat-breeds.js
import axios from 'axios';

export default async function handler(req, res) {
  try {
    const { page = 0, limit = 10 } = req.query;

    const response = await axios.get(`https://api.thedogapi.com/v1/breeds?limit=${limit}&page=${page}`, {
      headers: {
        'x-api-key': process.env.DOG_API_KEY,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    if (error.response) {
      console.error("Error response data:", error.response.data);
      console.error("Error status:", error.response.status);
      console.error("Error headers:", error.response.headers);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error in setting up request:", error.message);
    }
    res.status(500).json({ error: 'Failed to fetch breed information' });
  }
}
