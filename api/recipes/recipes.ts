import axios from "axios";

export const getRecipeList = async () => {
  try {
    const response = await axios.get("get-all-recipes");
    return response.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
};

export const getRecipeById = async (id) => {
  try {
  } catch (error) {}
};

export const getRecipeByTitle = async (title) => {
  try {
    const response = await axios.get(`/recipes/${title}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
};

export const getRandomRecipe = async () => {
  try {
    const response = await axios.get("/get-random-recipe");
    return response.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
};

export const getAllRecipeIds = async () => {
  try {
    const response = await axios.get("/get-all-recipe-ids");
    return response.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
};
