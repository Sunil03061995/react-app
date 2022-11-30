import React, {useState} from 'react'

export default function TesxtForm3(props) {

  const handleOnClick = ()=>{
      console.log("on Click" + cpas);
      let newCaps = cpas.toLocaleUpperCase();
      setCaps(newCaps);
  }

  const handleOnChange =(event)=>{
    console.log("on Change");
    setCaps(event.target.value);
  }

  const [cpas, setCaps] = useState("Enter your text");

  return (
    <>
        <div className="mb-3">
            <label  className="form-label">{props.Title}</label>
            <textarea className="form-control" value={cpas} onChange={handleOnChange} rows="3"></textarea>
            <button className="btn btn-primary my-3" onClick={handleOnClick}>Text To Capitalize</button>
        </div>
    </>
  )
}
