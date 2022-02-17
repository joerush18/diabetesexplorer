import axios from "axios";

export const api = axios.create({
  baseURL: "https://calorieninjas.p.rapidapi.com/v1/nutrition",
  headers: {
    "x-rapidapi-key": "da4b0cce76msh013da5a6a55baeap12bbd9jsn293f76613d94",
    "x-rapidapi-hos": "calorieninjas.p.rapidapi.com",
  },
});

// https://calorieninjas.p.rapidapi.com/v1/nutrition?query=Steak%20and%20Baked%20Potato

//small changes environment variables added
