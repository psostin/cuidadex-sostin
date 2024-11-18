// src/pages/api/dogs/search.js
import axios from 'axios';

export default async function handler(req, res) {
  const { q } = req.query;

  try {
    const response = await axios.get('https://api.thedogapi.com/v1/breeds/search', {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.DOG_API_KEY,
      },
      params: {
        q,
        attach_image: 1, // Ensures breed images are attached if available
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching dog breeds:', error.message);
    res.status(500).json({ error: 'Failed to fetch dog breeds' });
  }
}
