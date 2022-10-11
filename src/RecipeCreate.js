import React, { useState } from "react";

function RecipeCreate({ formData, changeHandler, submitHandler }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  return (
    <form name="create" onSubmit={submitHandler}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <input
                  id="name"
                  type="text"
                  name="name"
                  onChange={changeHandler}
                  value={formData.name}
                  placeholder="Name"
                  require
                />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                <input
                  id="cuisine"
                  type="text"
                  name="cuisine"
                  onChange={changeHandler}
                  value={formData.cuisine}
                  placeholder="Cuisine"
                  require
                />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <input
                  id="photo"
                  type="url"
                  name="photo"
                  onChange={changeHandler}
                  value={formData.photo}
                  placeholder="Url"
                  require
                />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                <textarea
                  id="ingredients"
                  type="text"
                  name="ingredients"
                  onChange={changeHandler}
                  value={formData.ingredients}
                  placeholder="Ingredients"
                  require
                />
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                <textarea
                  id="preparation"
                  type="text"
                  name="preparation"
                  onChange={changeHandler}
                  value={formData.preparation}
                  placeholder="Preparation"
                  require
                />
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;

// import React, { useState } from "react";

/**
 * Displays the form to create a new post, which can be either an image or a text post.
 *
 * When the form is submitted, a new post is created and the form contents cleared.
 */
// function PostCreate({createPost}) {
//   const [type, setType] = useState("Text");
//   const [content, setContent] = useState("");
//   const handleTypeChange = (event) => setType(event.target.value);
//   const handleContentChange = (event) => setContent(event.target.value);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     createPost({type, content});
//     setType("Text");
//     setContent("");
//   };

//   // TODO: When the form is submitted, a new post should be created, and the form contents cleared.

//   // For the tests to pass, the form below must have:
//   // - a `name="create"` attribute
//   // - one child `<button>` with a `type="submit"` attribute
//   // - one child `<select>` with a `name="type"` attribute
//   // - one child `<textarea>` or `<input>` (not both at the same time) with a `name="content"`

// return (
//     <form name="create" onSubmit={handleSubmit}>
//       <fieldset>
//         <legend>Create</legend>
//         <div>
//           <label htmlFor="type">Type: </label>
//           <select id="type" name="type" required={true}
//              onChange={handleTypeChange}
//             value={type}
//           >
//             <option>Text</option>
//             <option>Image</option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="content">Content: </label>
//             {type === "Text" ? (
//               <textarea id="content" name="content" required={true} rows={3}
//               onChange={handleContentChange}
//               value={content}
//               />
//             ) : (
//               <input id="content" name="content" type="url" required={true}
//               onChange={handleContentChange}
//               value={content}
//               />
//             )
//             }
//         </div>
//         <div>
//           <button type="submit">Submit</button>
//         </div>
//       </fieldset>
//     </form>
//   );
// }

// export default PostCreate;
