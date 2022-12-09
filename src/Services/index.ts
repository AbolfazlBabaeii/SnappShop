import axios, { AxiosRequestConfig } from "axios";
import { IGetAreasResDTO } from "types/DTO/areas/res";

export const axiosInstance = axios.create({});

export const getAreas = async (
  query = "",
  options: AxiosRequestConfig = {}
) => {
  const response = await axiosInstance.get<IGetAreasResDTO>(
    `http://192.168.1.103:3000/api/areas${query && `?query=${query}`}`,
    { ...options }
  );
  await response.data.areas.forEach((area, index) => (area.order = index + 1));
  console.log(response.data);
  return response.data;
};
