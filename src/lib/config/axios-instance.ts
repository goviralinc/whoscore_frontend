import axios from "axios";
import { PUBLIC_API_URL } from "../env";

export const publicApi = axios.create({
  baseURL: PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" },
});

export const authApi = axios.create({
  baseURL: PUBLIC_API_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

authApi.interceptors.request.use(async (config) => {
  // append auth token to header
  // const session = useSession()

  return config;
});

authApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error);
    }
  }
);
