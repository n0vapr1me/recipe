import React from "react";
import RecipeTable from "./RecipeTable"

function RecipeList({ recipes, deleteRecipe }) {
  // Display the list of recipes using the structure of table that is provided.
  // Create at least one additional component that is used by this component.
  // Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody><RecipeTable recipes={recipes} deleteRecipe={deleteRecipe}/></tbody>
      </table>
    </div>
  );
}

export default RecipeList;
