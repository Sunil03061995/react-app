import React, {useState} from 'react'



export default function TextForm(props) {

    const handelUpClick = ()=>{
        // console.log("Upper case was clicked" + myText);
        let newText=myText.toUpperCase();
        setText(newText);
        props.showalert("Converted to uppercase", "success");
    }
    const handelUpClick1 = ()=>{
        // console.log("Upper case was clicked" + myText);
        let newText=myText.toLowerCase();
        setText(newText);
        props.showalert("Converted to lowercase", "success");
    }

    const handleReverse =()=>{
        let splitword = myText.split("");
        let revword = splitword.reverse("");
        let joinword = revword.join("");
        setText(joinword);
        props.showalert("Text has been reverse", "warning");
    }

      const handledownload = ()=>{
        const element = document.createElement("a");
        const file = new Blob([myText], {
            type: "text/plain"
          });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        element.click();
        props.showalert("file has been downloaded", "success");
    }

    const handleBackspace = ()=>{
        let newText= myText.substring(0, myText.length - 1);
        setText(newText);
        props.showalert("removing text from the end", "danger");
    }

    const handleCpatalize =()=>{
        let words= myText.split(" ");
        let uppercaseword = ' ';
        words.forEach(element => {
            uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
         });
         setText(uppercaseword);
         props.showalert("converted to sentence case", "success");
    }

    const handleClear = ()=>{
        let newText="";
        setText(newText);
        props.showalert("text has been removed", "danger");
    }

    const handleCopy = ()=>{
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showalert("Text has been copied", "success");
    }

    const handleRemove = ()=>{
        let newText=myText.split(/ [ ]+/);
        setText(newText.join(" "));
        props.showalert("removed extraspace", "success");
    }

    const handelOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }

    // Hooks Syntax
    const [myText, setText] = useState("");

      //remove extraspace in word count
      const countword =()=>{
        if(myText.length>0){
            return myText.trim().split(/[ ]+/).length;
        }else{
            return 0;
        }
    }


    return (
        <>
            <div className="container" style={{color:props.mode ==='dark'?'#fff':'black'}}>
                <div className="mb-3 my-3">
                    <h5 className="form-label">{props.Title}</h5>
                    <textarea className="form-control" value={myText} onChange={handelOnChange} style={{backgroundColor:props.mode ==='dark'?'#557a9e':'white' , color:props.mode === 'dark'?'#fff':'black'} } id="myBox" rows="10"></textarea>
                    <button className="btn btn-primary my-3" onClick={handelUpClick}>Convert To Uperrcase</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={handelUpClick1}>Convert To Lowercase</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={handleReverse}> Reverse</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={handledownload}> Download</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={handleBackspace}> Backspace</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={handleCpatalize}> Cpatalize</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={handleClear}> Clear Text</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={handleCopy}>Copy Text</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={handleRemove}>Remove Extra Space</button>
                </div>
            </div>
            
            <div className="container" style={{color:props.mode ==='dark'?'#fff':'black'}}>
                <h5>Your Summmery</h5>
                <p>{countword()} words and {myText.length} characters.</p>
                <p>{0.008 * myText.split(" ").length} Average time to read this one</p>
                <h5>Preview</h5>
                <p>{myText.length>0? myText:"Enter something to preview"}</p>
            </div>
        </>
    )
}
