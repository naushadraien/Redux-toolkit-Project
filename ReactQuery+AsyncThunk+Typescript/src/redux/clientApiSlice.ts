import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { clientType } from "./clientSlice";

// Define a service using a base URL and expected endpoints
export const clientApi = createApi({
  reducerPath: "clientApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://64475d2650c253374423253d.mockapi.io/",
  }),
  endpoints: (builder) => ({
    getClient: builder.query<clientType[], string>({
      query: () => `crud`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetClientQuery } = clientApi;
