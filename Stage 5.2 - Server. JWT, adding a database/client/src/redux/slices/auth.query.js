import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3443/api/auth/",
  }),
  endpoints: (builder) => ({
    isGetAuth: builder.mutation({
      query: (arg) => {
        return {
          url: `login`,
          method: "POST",
          body: arg,
        };
      },
    }),
    register: builder.mutation({
      query: (arg)=> {
        return{
          url: `register`,
          method: "POST",
          body: arg
        }
      }
    })
  }),
});

export const { useIsGetAuthMutation, useRegisterMutation } = authApi;
