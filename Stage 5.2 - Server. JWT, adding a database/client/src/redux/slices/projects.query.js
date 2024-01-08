import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectsApi = createApi({
  reducerPath: "projectsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3443/api/projects/",
    prepareHeaders:(headers)=>{
      if(window.localStorage.getItem("accessToken")){
        headers.set("accessToken", `${window.localStorage.getItem("accessToken")}`)
      }
    }
  }),
  endpoints: (builder) => ({
    getProjectsList: builder.query({
      query: (search) => {
        return {
          url: `list?search=${search}`,

          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetProjectsListQuery } = projectsApi;
