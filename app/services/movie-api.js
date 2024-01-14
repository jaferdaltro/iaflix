import Service from '@ember/service';

export default class MovieApiService extends Service {
  async createMovie(movieData) {
    try {
      const response = await fetch('http://localhost:3000/api/v1/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(movieData),
      });

      if (!response.ok) {
        throw new Error('Failed to create movie');
      }

      return response.json();
    } catch (error) {
      console.error('Error creating movie:', error);
      throw error;
    }
  }
}
