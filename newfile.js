import React, { useState } from "react";
import "./newfile.css";

function NewPost() {
  const [isQuestionSelected, setQuestionSelected] = useState(false);
  const [isArticleSelected, setArticleSelected] = useState(false);

  const handleQuestionSelect = () => {
    setQuestionSelected(true);
    setArticleSelected(false);
  };

  const handleArticleSelect = () => {
    setArticleSelected(true);
    setQuestionSelected(false);
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">New Post</h1>
      </div>

      <form className="options">
        <h2 className="section-title">Select post type:</h2>

        <div className="radio-group">
          <input
            type="radio"
            id="questionOption"
            name="postType"
            value="Question"
            onClick={handleQuestionSelect}
          />
          <label htmlFor="questionOption">Question</label>

          <input
            type="radio"
            id="articleOption"
            name="postType"
            value="Article"
            onClick={handleArticleSelect}
          />
          <label htmlFor="articleOption">Article</label>
        </div>
      </form>

      {isQuestionSelected && (
        <div className="post-form">
          <div className="section-title"><h3>Ask your question below:</h3></div>

          <div className="form-field">
            <label htmlFor="questionTitle">Title:</label>
            <input
              className="input-field"
              type="text"
              placeholder="Start your question here"
              name="questionTitle"
            />
          </div>

          <div className="form-field">
            <label htmlFor="questionBody">Your Question:</label>
            <textarea className="text-area" rows="8" cols="50"></textarea>
          </div>

          <div className="form-field">
            <label htmlFor="questionTags">Tags:</label>
            <input
              className="input-field"
              type="text"
              placeholder="Add up to 3 tags"
              name="questionTags"
            />
          </div>

          <div className="button">
            <button className="post-button">Post</button>
          </div>
        </div>
      )}

      {isArticleSelected && (
        <div className="post-form">
          <div className="section-title"><h3>Ask/Share Anything:</h3></div>

          <div className="form-field">
            <label htmlFor="articleTitle">Title:</label>
            <input
              className="input-field"
              type="text"
              placeholder="Start your article here"
              name="articleTitle"
            />
          </div>

          <div className="form-field">
            <label htmlFor="articleAbstract">Abstract:</label>
            <textarea
              className="text-area"
              rows="3"
              cols="50"
              placeholder="Enter a 1-paragraph abstract"
              name="articleAbstract"
            ></textarea>
          </div>

          <div className="form-field">
            <label htmlFor="articleContent">Type Article Here:</label>
            <textarea className="text-area" rows="8" cols="50" name="articleContent"></textarea>
          </div>

          <div className="form-field">
            <label htmlFor="articleTags">Tags:</label>
            <input
              className="input-field"
              type="text"
              placeholder="Add up to 3 tags"
              name="articleTags"
            />
          </div>

          <div className="button">
            <button className="post-button">Post</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewPost;
