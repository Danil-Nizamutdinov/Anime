import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { animeAPI } from "../api/api";

export const setAnime = createAsyncThunk("anime/setAnime", async (a) => {
  try {
    const res = await animeAPI.getAnime(a);
    return res;
  } catch (error) {
    console.error(error);
  }
});

export const setAnimeSearch = createAsyncThunk(
  "anime/setAnimeSearch",
  async (a) => {
    try {
      const res = await animeAPI.getAnime(a);
      return res;
    } catch (error) {
      console.error(error);
    }
  }
);

export const setCurrentAnime = createAsyncThunk(
  "anime/setCurrentAnime",
  async (id) => {
    try {
      const res = await animeAPI.getCurrentAnime(id);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);

export const setAnimeTop = createAsyncThunk("anime/setAnimeTop", async (a) => {
  try {
    const res = await animeAPI.getAnimeTop(a);
    return res;
  } catch (error) {
    console.error(error);
  }
});

const toolkitSlice = createSlice({
  name: "anime",
  initialState: {
    anime: [],
    animeSearch: [],
    currentAnime: {},
    animeSearchText: "",
    currentAnimePage: 1,
    fetching: true,
    togglerSearch: false,
    togglerSort: false,
    togglerAnimeTop: false,
  },
  reducers: {
    resetAnimeArray: (state) => {
      state.anime = [];
    },
    resetCurrentAnimePage: (state) => {
      state.currentAnimePage = 1;
    },
    updateAnimeSearchText: (state, action) => {
      state.animeSearchText = action.payload;
    },
    updateFetching: (state) => {
      state.fetching = true;
    },
    updateCurrentAnimePage: (state) => {
      state.currentAnimePage += 1;
    },
    updateTogglerAnimeTop: (state) => {
      state.togglerAnimeTop = !state.togglerAnimeTop;
    },

    updateTogglerSearch(state) {
      state.togglerSearch = !state.togglerSearch;
    },
    updateTogglerSort(state) {
      state.togglerSort = !state.togglerSort;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setAnime.fulfilled, (state, action) => {
      if (Array.isArray(action.payload)) {
        state.anime.push(...action.payload);
      }
      state.fetching = false;
    });
    builder.addCase(setAnimeTop.fulfilled, (state, action) => {
      if (Array.isArray(action.payload)) {
        state.anime.push(...action.payload);
      }
      state.fetching = false;
    });

    builder.addCase(setAnimeSearch.fulfilled, (state, action) => {
      state.animeSearch = action.payload;
    });
    builder.addCase(setCurrentAnime.fulfilled, (state, action) => {
      state.currentAnime = action.payload;
    });
  },
});

export const {
  updateAnimeSearchText,
  updateFetching,
  updateTogglerSearch,
  updateTogglerSort,
  updateTogglerAnimeTop,
  updateTogglerAnimeRandom,
  resetAnimeArray,
  updateCurrentAnimePage,
  resetCurrentAnimePage,
} = toolkitSlice.actions;

export default toolkitSlice.reducer;
