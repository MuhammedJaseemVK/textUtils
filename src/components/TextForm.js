import React, { useState } from 'react'

function TextForm(props) {
    const [text, setText] = useState('');

    const handleOnChange = (event) => {
        // console.log('onchange');
        setText(event.target.value);
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
        document.getSelection().removeAllRanges();
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
                    <textarea style={{ backgroundColor: props.mode === 'dark' ? '#0c5d9d' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Your text summary</h1>
                <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
            </div>
        </>
    )
}

export default TextForm