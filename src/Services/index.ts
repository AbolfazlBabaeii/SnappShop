import axios, { AxiosRequestConfig } from "axios";
import { IGetAreasResDTO } from "types/DTO/areas/res";

export const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://snappshop.vercel.app/"
      : "http://localhost:3000",
});

export const getAreas = async (
  query = "",
  options: AxiosRequestConfig = {}
) => {
  const response = await axiosInstance.get<IGetAreasResDTO>(
    `/api/areas${query && `?query=${query}`}`,
    { ...options, headers: { "Accept-Encoding": "gzip,deflate,compress" } }
  );
  await response.data.areas.forEach((area, index) => (area.order = index + 1));
  return response.data;
};
