import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [recipes, setRecipes] = useState(RecipeData);
  const [formData, setFormData] = useState({ ...initialFormState });

  const changeHandler = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setRecipes([...recipes, formData]);
    setFormData({ ...initialFormState });
  };

  const deleteRecipe = (indexToDelete) =>
    setRecipes((currentRecipe) =>
      currentRecipe.filter((recipe, index) => index !== indexToDelete)
    );
  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate
        formData={formData}
        changeHandler={changeHandler}
        submitHandler={submitHandler}
      />
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// import "./App.css";
// import PostCreate from "./PostCreate";
// import PostList from "./PostList";

// function App() {
//   const [posts, setPosts] = useState([]);
//   const createPost = (newPost) =>
//       setPosts((currentPost) => [
//       newPost,
//       ...currentPost,
//       ]);
// //   const editPost =
//   const deletePost = (indexToDelete) =>
//       setPosts((currentPost) =>
//                 currentPost.filter((post, index) => index !== indexToDelete )
//               );

//   // TODO: Add the ability for the <PostCreate /> component to create new posts.
//   // TODO: Add the ability for the <PostList /> component to delete an existing post.

//   return (
//     <div className="App">
//       <PostCreate createPost={createPost}/>
//       <PostList posts={posts} deletePost = {deletePost}/>
//     </div>
//   );
// }

// export default App;
