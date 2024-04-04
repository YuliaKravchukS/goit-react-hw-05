import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  // search/ movie ? include_adult = false & language=en - US & page=1'
});

export const requestMoviesTrend = async () => {
  const { data } = await instance.get("/trending/movie/day?language=en-US", {
    params: {
      accept: "application/json",
      api_key: "bb8b95351575529e9a24eb6d6f09af6f",
    },
  });
  return data.results;
};

export const requestMoviesByTittle = async (title = "") => {
  const { data } = await instance.get("/search/movie", {
    params: {
      title: title,
      headers: {
        accept: "application/json",
        api_key: "bb8b95351575529e9a24eb6d6f09af6f",
      },
    },
  });
  console.log("data: ", data);
  return data;
};
