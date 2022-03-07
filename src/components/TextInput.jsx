import React from "react";
import { useState } from "react";
import Button from "./Button";

export const TextInput = ({ title }) => {
  const [text, setText] = useState("some text here");

  function handleUpper() {
    let newtext = text.toUpperCase();
    setText(newtext);
  }
  function handleLower() {
    let newtext = text.toLowerCase();
    setText(newtext);
  }
  function handleClear() {
    let newtext = "";
    setText(newtext);
  }
  function handleCopy() {
    document.querySelector("textarea").select();
    document.execCommand("copy");
  }

  function handleRemove() {
    let newtext = text.replace(/\s\s+/g, " ");
    setText(newtext);
  }

  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <div className="container">
        <h1>{title}</h1>
        <div className="mb-3">
          <textarea onChange={handleChange} className="form-control" id="exampleFormControlTextarea1" value={text} rows="8"></textarea>
          <Button update={handleUpper} btntext="Uppercase" />
          <Button update={handleLower} btntext="Lowercase" />
          <Button update={handleClear} btntext="Clear Text" />
          <Button update={handleCopy} btntext="Copy Text" />
          <Button update={handleRemove} btntext="Remove Extra Spaces" />
        </div>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters.
        </p>
      </div>
    </>
  );
};
