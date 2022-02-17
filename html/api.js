import axios from "axios";

export const api = axios.create({
  baseURL: "https://calorieninjas.p.rapidapi.com/v1/nutrition",
  headers: {
    "x-rapidapi-key": process.env.RAPID_KEY,
    "x-rapidapi-hos": process.env.RAPID_HOST_NAME,
  },
});

// https://calorieninjas.p.rapidapi.com/v1/nutrition?query=Steak%20and%20Baked%20Potato

//small changes environment variables added
