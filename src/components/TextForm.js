import React, { useState } from 'react'

function TextForm(props) {
    const [text, setText] = useState('');
    const [words, setWords] = useState(0);

    const handleOnChange = (event) => {
        // console.log('onchange');
        setText(event.target.value);
        var fullStr = text + " ";
        var initial_whitespace_rExp = /^[^A-Za-z0-9]+/gi;
        var left_trimmedStr = fullStr.replace(initial_whitespace_rExp, "");
        var non_alphanumerics_rExp = /[^A-Za-z0-9]+/gi;
        var cleanedStr = left_trimmedStr.replace(non_alphanumerics_rExp, " ");
        var splitString = cleanedStr.split(" ");
        var word_count = splitString.length - 1;
        console.log(word_count);
        setWords(word_count)

    }

    const handleUpClick = () => {
        // console.log('uppercase was clicked: '+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted into uppercase", 'success');
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted into lowercase", 'success');

    }
    const handleClear = () => {
        setText('');
        props.showAlert("cleared text", 'success');

    }

    const handleCopy = () => {
        let copyText = document.getElementById('myBox');
        copyText.select();
        copyText.setSelectionRange(0, 999999);//Mobile
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("copied to clipbaord", 'success');
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("removed extra spaces", 'success');
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Your text summary</h1>
                <p>{words} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter some text to preview it here!'}</p>
            </div>
        </>
    )
}

export default TextForm