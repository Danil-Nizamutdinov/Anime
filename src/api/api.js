import axios from "axios";

const instans = axios.create({
  baseURL: "https://api.jikan.moe/v4/",
});

export const animeAPI = {
  async getAnime(a = { page: 1, q: "", limit: 12 }) {
    try {
      const res = await instans.get("anime", {
        params: {
          page: a.page,
          q: a.q,
          limit: a.limit,
        },
      });
      return res.data.data;
    } catch (error) {
      console.error(error);
    }
  },
  async getAnimeTop(page = 1) {
    try {
      const res = await instans.get("top/anime", {
        params: {
          page,
          limit: 12,
        },
      });
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  },

  async getCurrentAnime(id) {
    try {
      const res = await instans.get(`anime/${id}`);
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  },
};
