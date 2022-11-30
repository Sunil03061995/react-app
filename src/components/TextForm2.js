
import React, {useState} from 'react'



export default function TextForm2(props) {

    const handelOnClick =()=>{
        console.log("on click event:" + lowText);
        let newText= lowText.toLowerCase();
        setText(newText);
    }

    const handelOnChange =(event)=>{
        console.log("on Click:");
        setText(event.target.value);
    }

    const[lowText, setText]=useState("Enter your text ");

    return (
        <>
            <div className="mb-3">
            <label  className="form-label">{props.Title}</label>
            <textarea className="form-control" value={lowText} onChange={handelOnChange} rows="3"></textarea>
            <button className="btn btn-primary my-3" onClick={handelOnClick}>Text To Lowercase</button>
            </div>
        </>
    )
}
