import React from "react";

function RecipeList({ recipes, deleteRecipe }) {
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  // GroceryList.js

  // const rows = groceryList.map(({ quantity, item }, index) => (

  //   <tr key={index}>

  //     <td>{quantity}</td>

  //     <td>{item}</td>

  //   </tr>

  //   <td className="content_td">
  //   <p>{recipe.ingredients}</p>
  // </td>
  const rows = recipes.map((recipe, index) => (
    <tr key={index}>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img
          src={recipe.photo}
          alt="{recipe.photo}"
          width="100%"
          height="100%"
        />
      </td>
      <td>{recipe.ingredients}</td>
      <td>{recipe.preparation}</td>
      <td>
        <button name="delete" onClick={() => deleteRecipe(index)}>
          Delete
        </button>
      </td>
    </tr>
  ));
  /* <td className="content_td"><p>{(recipe.ingredients)}</p></td> */
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
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;

// import React from "react";
// import PostView from "./PostView";

// /**
//  * Diplays a list of either text or image posts.
//  *
//  */

// {recipes.map((recipe, index) => (
//   <RecipeView
//     key={index}
//     recipe={recipe}
//     deleteRecipe={() => deleteRecipe(index)}
//   />
// ))}

// function PostList({posts, deletePost}) {
//   // TODO: Diplay the list of posts.
//   // TODO: Create at least one additional component that is used by this component.
//   // TODO: Each post must have className="post" for the tests to work.
//   // TODO: Each post must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

//   return <div className="post-list">
//     <table>
//         <tbody>
//             <tr>
//                 <td>{posts.map((post,index) => (
//                     <PostView
//                         deletePost = {() => deletePost(index)}
//                         key={index}
//                         post={post}
//                     />
//                 ))}
//                 </td>
//             </tr>
//             <tr><td></td></tr>
//         </tbody>
//     </table>
//     </div>;
// }

// export default PostList;
