import { useEffect, useState } from "react";
import { IProducts } from "../API/Domain/IProducts";
import BASE_API from "../API/BaseAPI";
export const useGetAllItems = () => {
  const [data, setData] = useState<IProducts[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const controller = "/products";

  useEffect(() => {
    getAllItemData();
  }, []);

  const getAllItemData = async () => {
    try {
      const { data } = await BASE_API.get(controller);
      setData(data);
    } catch (Error) {
      console.log(Error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    getAllItemData,
    data,
    setData,
    isLoading,
  };
};
