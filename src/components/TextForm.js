import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [findText, setFindText] = useState("");
  const [replaceText, setReplaceText] = useState("");

  document.title = "TextUtils";

  const handleUpperCaseClick = () => {
    // console.log("uppercase button clicked.", text);
    // setText("You clicked on uppercase button");
    const upperCaseText = text.toUpperCase();
    setText(upperCaseText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleLowerCaseClick = () => {
    // console.log("uppercase button clicked.", text);
    // setText("You clicked on uppercase button");
    const upperCaseText = text.toLowerCase();
    setText(upperCaseText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleClearClick = () => {
    // console.log("uppercase button clicked.", text);
    // setText("You clicked on uppercase button");
    const upperCaseText = "";
    setText(upperCaseText);
    props.showAlert("Text cleared", "success");
  };
  const handleTextChange = (event) => {
    // console.log("text changed");
    setText(event.target.value);
    // console.log("text changed to >>>", text);
  };
  const handleFindTextChange = (event) => {
    console.log("find text changed", event.target.value);
    setFindText(event.target.value);
    // console.log("text changed to >>>", text);
  };
  const handleReplaceTextChange = (event) => {
    console.log("find text changed", event.target.value);
    setReplaceText(event.target.value);
    // console.log("text changed to >>>", text);
  };
  const handleReplaceTextClick = () => {
    const checkText = text.includes(findText);
    if (checkText && replaceText) {
      const replaceNewText = text.replace(findText, replaceText);
      setText(replaceNewText);
    }
  };
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
            onChange={handleTextChange}
            id="myBox"
            rows="8"
          ></textarea>
          <button
            className="btn btn-primary my-2 mx-2"
            onClick={handleUpperCaseClick}
            my-3
          >
            Convert to Uppercase
          </button>
          <button
            className="btn btn-primary my-2 mx-2"
            onClick={handleLowerCaseClick}
          >
            Convert to Lowercase
          </button>
          <button
            className="btn btn-danger my-2 mx-2"
            onClick={handleClearClick}
          >
            Clear
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h6>Find</h6>
        <input onChange={handleFindTextChange}></input>
        <h6 className="my-2">Replace</h6>
        <input onChange={handleReplaceTextChange}></input>

        <button
          className="btn btn-primary my-2 mx-2"
          onClick={handleReplaceTextClick}
        >
          Replace
        </button>
      </div>

      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.length <= 0 ? 0 : text.split(" ").length} words and{" "}
          {text.length} characters
        </p>
        <p>
          {text.length <= 0 ? 0 : 0.008 * text.split(" ").length} minutes to
          read this text
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the above textbox to preview it here"}
        </p>
      </div>
    </>
  );
}
