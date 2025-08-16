import { create } from "zustand";
import axios from "axios";
import { ProductState } from "../types";

const useProductStore = create<ProductState>((set) => ({
  products: [],
  loading: false,
  error: null,

  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      console.log("Base URL:", process.env.REACT_APP_API_BASE_URL);
      // refering to the api in the .env file
      const baseUrl = process.env.REACT_APP_API_BASE_URL;
      // const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/products`);

      const response = await axios.get(`${baseUrl}/products`);
      set({ products: response.data, loading: false });
      console.log(`"data-->",${response.data}`);
    } catch (error) {
      let errorMessage = "Unknown error occured";
      if (error instanceof Error) errorMessage = error.message;
      set({ error: errorMessage, loading: false });
    }
  },
}));

export default useProductStore;
