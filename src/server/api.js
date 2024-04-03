import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1'
});


const options = {
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjhiOTUzNTE1NzU1MjllOWEyNGViNmQ2ZjA5YWY2ZiIsInN1YiI6IjY2MGQ0MGMzMzNhMzc2MDE2NDgxOTA1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Mt67LrcxuI54wAIUDceJG_8QUS98gWyBRoyhY3jhqgQ'
  }
}
export const fetchMovies = (options) => {
    const { data } = async instance.get();
    return data
    console.log('data: ', data);
};
