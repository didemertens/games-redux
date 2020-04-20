import axios from 'axios'

export default axios.create({
  baseURL: 'https://rawg-video-games-database.p.rapidapi.com/games',
  headers: {
		"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
		"x-rapidapi-key": process.env.REACT_APP_RAWG_KEY
	}
})