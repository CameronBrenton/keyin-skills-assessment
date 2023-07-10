import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getRecipeList,
  getRecipeByTitle,
  getRandomRecipe,
} from "../../../api/recipes/recipes";

export default function IndexPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 10;
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [randomRecipe, setRandomRecipe] = useState(null);

  const queryClient = useQueryClient();

  const {
    data: recipes,
    isLoading: isRecipesLoading,
    error: recipesError,
  } = useQuery(["recipes"], getRecipeList);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes =
    searchResult.length > 0
      ? searchResult.slice(indexOfFirstRecipe, indexOfLastRecipe)
      : recipes?.slice(indexOfFirstRecipe, indexOfLastRecipe) || [];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = async () => {
    if (searchTerm !== "") {
      try {
        const result = await getRecipeByTitle(searchTerm);
        setSearchResult(result);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    } else {
      setSearchResult([]);
    }
  };

  const handleGetAllRecipesList = () => {
    setSearchTerm("");
    setCurrentPage(1);
    setSearchResult([]);
  };

  const handleGetRandomRecipe = async () => {
    const data = await getRandomRecipe();
	setRandomRecipe(data[0]);
  };

  return (
    <div>
      <h1 className="mt-8 mb-4 text-4xl font-bold text-center">Recipe World</h1>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Search by title.."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="px-4 py-2 ml-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={handleSearch}
        >
          GetRecipeByTitle
        </button>
        <button
          className="px-4 py-2 ml-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={handleGetAllRecipesList}
        >
          GetAllRecipesList
        </button>
        <button
          className="px-4 py-2 ml-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={handleGetRandomRecipe}
        >
          GetRandomRecipe
        </button>
      </div>
      <h1 className="mt-8 mb-4 text-2xl font-bold text-center">Results:</h1>
      <div className="grid grid-cols-1 gap-4 mt-8 mb-8 md:grid-cols-3">
        {isRecipesLoading ? (
          <p>Loading recipes...</p>
        ) : recipesError ? (
          <p>Error loading recipes: {recipesError.message}</p>
        ) : randomRecipe ? (
          <div key={randomRecipe.id}>
            <img src={randomRecipe.image} alt={randomRecipe.title} />
            <h3>{randomRecipe.title}</h3>
            <p>Ingredients:</p>
            <p>{randomRecipe.ingredients}</p>
            <p>Instructions:</p>
            <ul>
              {randomRecipe.instructions.map((instruction, index) => (
                <li key={index}>
                  {instruction.type}
                  {instruction.text}
                </li>
              ))}
            </ul>
            <p>Times: {randomRecipe.times}</p>
          </div>
        ) : (
          currentRecipes.map((recipe) => (
            <div key={recipe.id}>
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
              <p>Ingredients:</p>
              <p>{recipe.ingredients}</p>
              <p>Instructions:</p>
              <ul>
                {recipe.instructions.map((instruction, index) => (
                  <li key={index}>
                    {instruction.type}
                    {instruction.text}
                  </li>
                ))}
              </ul>
              <p>Times: {recipe.times}</p>
            </div>
          ))
        )}
      </div>
      <div className="mt-4">
        <h1 className="mt-8 mb-4 text-2xl font-bold text-center">Page</h1>
        {Array.from({
          length: Math.ceil(
            (searchResult.length > 0 ? searchResult : recipes || []).length /
              recipesPerPage
          ),
        }).map((_, index) => (
          <button
            className="px-2 py-2 ml-2 text-white bg-blue-500 rounded-2xl hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            key={index}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
