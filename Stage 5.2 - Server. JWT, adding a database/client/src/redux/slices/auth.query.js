import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3443/api/auth/",
  }),
  endpoints: (builder) => ({
    isGetAuth: builder.mutation({
      query: (user) => {
        return {
          url: `login`,
          method: "POST",
          body: user,
        };
      },
    }),
  }),
});

export const { useIsGetAuthMutation } = authApi;
