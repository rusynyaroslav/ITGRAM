import React from 'react';
import './CreatePost.css';

export default function CreatePost() {
  return (
    <div className="wrapper">
      <div className="create-post-container">
        <input
          type="text"
          placeholder="Post Content"
          className="post-content-input"
        />

        <div className="publish-button-container">
          <div className="publish-button">
            <span>Опублікувати</span>
          </div>
        </div>

        <div className="add-photo-button-container">
          {}
          <label className="add-photo-button">
            <span>Додати фото</span>
            <input type="file" style={{ display: 'none' }} />
          </label>
        </div>
      </div>
    </div>
  );
}
