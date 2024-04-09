import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  // search/ movie ? include_adult = false & language=en - US & page=1'
});

export const requestMoviesTrend = async (page) => {
  const { data } = await instance.get("/trending/movie/day?language=en-US", {
    params: {
      page: page,
      accept: "application/json",
      api_key: "bb8b95351575529e9a24eb6d6f09af6f",
    },
  });
  return data;
};

export const requestMoviesByTittle = async (title = "") => {
  const { data } = await instance.get(
    `/search/movie?include_adult=false&language=en-US&page=1`,
    {
      params: {
        query: title,
        accept: "application/json",
        api_key: "bb8b95351575529e9a24eb6d6f09af6f",
      },
    }
  );
  return data.results;
};

export const requestMoviesById = async (movieId) => {
  const { data } = await instance.get(`/movie/${movieId}?language=en-US`, {
    params: {
      accept: "application/json",
      api_key: "bb8b95351575529e9a24eb6d6f09af6f",
    },
  });

  return data;
};

export const requestMoviesCast = async (movieId) => {
  console.log("movieId: ", movieId);
  const { data } = await instance.get(
    `/movie/${movieId}/credits?language=en-US`,
    {
      params: {
        accept: "application/json",
        api_key: "bb8b95351575529e9a24eb6d6f09af6f",
      },
    }
  );

  return data;
};

export const requestMovieReviews = async (movieId) => {
  const { data } = await instance.get(
    `/movie/${movieId}/reviews?language=en-US`,
    {
      params: {
        accept: "application/json",
        api_key: "bb8b95351575529e9a24eb6d6f09af6f",
      },
    }
  );

  return data;
};

export const requestMoviesVideos = async (movieId) => {
  const { data } = await instance.get(
    `/movie/${movieId}/videos?language=en-US`,
    {
      params: {
        accept: "application/json",
        api_key: "bb8b95351575529e9a24eb6d6f09af6f",
      },
    }
  );

  return data;
};
