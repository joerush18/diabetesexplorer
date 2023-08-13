import axios from "axios";

const URL = "http://localhost:8000/";

export const api = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// https://calorieninjas.p.rapidapi.com/v1/nutrition?query=Steak%20and%20Baked%20Potato

//small changes environment variables added
