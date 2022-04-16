import React, { useState } from "react";

export default function Textform(props) {
  const [text, settext] = useState("Enter text here");
  const handleUpClick = () => {
    console.log("Upper case was clicked");
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showalert("Converted to uppercase","success")
  };
  const handleLoClick = () => {
    let newte = text.toLowerCase();
    settext(newte);
    props.showalert("Converted to LowerCase","success")
  };

  const handleOnChange = (event) => {
    console.log("On change");
    settext(event.target.value);
  };

  const copy=()=>{
    navigator.clipboard.writeText(text);
        props.showalert("Text copied","success")
  }

  const handleExtraSpace=()=>{
    let newtexts=text.split(/[ ]+/);
    settext(newtexts.join(" "))
    props.showalert("Extra spaces removed","success")
  };
  return (
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          onChange={handleOnChange}
          name="mytext"
          value={text}
          id="mytext"
          cols="70"
          rows="10"
          style={{
            backgroundColor:props.mode==='dark'?'#151313':'white',
            color:props.mode==='dark'?'yellow':'black'
          }}
        ></textarea>
      </div>
      <button disabled={text.length===0} type="submit" className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
        Convert to Upper case
      </button>
      <button
        type="submit"
        className="btn btn-primary mx-2 my-1"
        onClick={handleLoClick}
        disabled={text.length===0}
      >
        Convert to Lower Case
      </button>

      <button disabled={text.length===0} type="Submit" className="btn btn-primary mx-2 my-1" onClick={copy}>Copy the above text</button>
      <button disabled={text.length===0} type="Submit" className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>

      <div className="container">
        <h1>Your text summary</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} Characters
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
      </div>
  );
}
