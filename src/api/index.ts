import axios from "axios";
import { BazarekType } from "../types/Types";
import { BazarekCategory } from "../types/Categories";

const getBazarekType = () =>
  axios.get<BazarekType[]>(
    "https://api-eko-bazarek.azurewebsites.net/api/products/types"
  );

const getBazarekCategories = () =>
  axios.get<BazarekCategory[]>(
    "https://api-eko-bazarek.azurewebsites.net/api/products/categories"
  );

const getProduct = (id: string) =>
  axios.get<unknown>(
    `https://api-eko-bazarek.azurewebsites.net/api/products/${id}`
  );

export { getBazarekCategories, getBazarekType, getProduct };
