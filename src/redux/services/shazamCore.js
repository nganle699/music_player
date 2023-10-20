import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core7.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "6c91a832d9msh6f59cf46a7ee389p191f64jsnff25fd1942a1"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () =>
        "/charts/get-top-songs-in_world_by_genre?genre=POP&limit=100",
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => `songs/get_details?id=${songid}`,
    }),
    getSongRelated: builder.query({
      query: ({ songid }) =>
        `/songs/list-recommendations?id=${songid}&limit=50`,
    }),
    getArtistDetails: builder.query({
      query: ({ artistId }) => `/artist/get-top-songs?id=${artistId}&offset=0`,
    }),
    getSongByCountry: builder.query({
      query: (countryCode) =>
        `/charts/get-top-songs-in_country_by_genre?country_code=US&genre=POP&limit=50`,
    }),
    getSongsByGenre: builder.query({
      query: (genre) =>
        `/charts/get-top-songs-in_world_by_genre?genre=${genre}&limit=50`,
    }),
    getSongsBySearch: builder.query({
      query: (searchTerm) => `search?term=${searchTerm}&limit=25`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetSongByCountryQuery,
  useGetSongsByGenreQuery,
  useGetSongsBySearchQuery,
} = shazamCoreApi;
