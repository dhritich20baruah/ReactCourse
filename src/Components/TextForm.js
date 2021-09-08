import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Upper Case Was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase', 'success')
    }
    const handleLoClick = () =>{
        // console.log("Lower Case Was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase', 'success')
    }
    const handleClearClick = () =>{
        let newText = "";
        setText(newText);
        props.showAlert('Text Cleared', 'success')
    }
    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8" style={{backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Upper Case</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lower Case</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(' ').length} words and {text.length} characters</p>
            <p>{0.008 * text.split(' ').length} Minutes to read.</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview here"}</p>
        </div>
        </>
    )
}
