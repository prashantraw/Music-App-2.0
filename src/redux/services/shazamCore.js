import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core7.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'e8a83f2739msh263d24901c0b735p1c3f88jsncfd131a23b9d');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => 'charts/get-top-songs-in-world' }),
    getSongsByGenre: builder.query({ query: (genre) => `charts/get-top-songs-in_world_by_genre?genre=${genre}&limit=${10}` }),
    getSongsByCountry: builder.query({ query: (countryCode) => `charts/get-top-songs-in-country?country_code=${countryCode}` }),
    getSongsBySearch: builder.query({ query: (searchTerm) => `search?term=${searchTerm}` }),
    getArtistDetails: builder.query({ query: (artistId) => `artist/get-details?id=${artistId}` }),
    getSongDetails: builder.query({ query: ({ songid }) => `songs/get_details?id=${songid}` }),
    getSongRelated: builder.query({ query: ({ songid }) => `songs/list-recommendations?id=${songid}` }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
  useGetArtistDetailsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = shazamCoreApi;
