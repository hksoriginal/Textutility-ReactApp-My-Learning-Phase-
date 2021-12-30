import React, { useState } from 'react';



export default function Textform(props) {
    const handleUpclick = () => {
        console.log('Uppercase was clicked');
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "success");
    }
    const handleDownclick = () => {
        console.log('Lowercase was clicked');
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase", "success");
    }
    const handleClearclick = () => {
        console.log('Clear was clicked');
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared", "success");
    }
    const handleOnChange = (event) => {
        console.log('OnChange was clicked');
        setText(event.target.value);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed", "success");
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control " value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="mybox" rows="8" ></textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={handleUpclick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-3" onClick={handleDownclick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-3" onClick={handleClearclick}>Clear Text</button>
                <button className="btn btn-primary mx-3 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            </div>
            <div className="container my-4 " style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p><h2>{0.008 * text.length} Minute Read</h2></p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter text to preview"}</p>
            </div>
        </>
    );
}

