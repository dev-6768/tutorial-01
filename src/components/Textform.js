import React, {useState} from 'react'

function Textform() {
  return <div>
        <form>
        <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
}


function TextArea(props) {
    const [text, setText] = useState("Enter your text here")
    const [count, setCount] = useState(20)
    const [character, setCharacter] = useState(4)

    const handleUpperCaseLogic = () => {
        console.log("handleUpperCaseLogic")
        console.log(text)
        const newText = text.toUpperCase()

        setText(newText)
    }
    
    const handleLowerCaseLogic = () => {
        console.log("handleUpperCaseLogic")
        console.log(text)
        const newText = text.toLowerCase()

        setText(newText)
    }

    const handleClearLogic = () => {
        setCharacter(0)
        setCount(0)
        setText("")
    }

    const onChangedTextArea = (event) => {
        console.log("onChangedTextArea")
        let newString = event.target.value
        let newStringList = newString.split(" ")
        setText(newString)
        setCount(newString.length)
        setCharacter(newStringList.length)
    }

    return <div className="container my-3">
        <div class = "mb-3">
            <div class="form-group">
            <label for="comment"><h3>{props.title}</h3></label>
            <div class = "mb-3"></div>
                <textarea className="form-control" value={text} onChange={onChangedTextArea} rows="8" id="myTextCommentBox"></textarea>
            </div>
            <div className="pt-3"></div>

            <div>
                <button className="btn btn-primary mx-1" onClick={handleUpperCaseLogic}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowerCaseLogic}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearLogic}>Clear Text</button>
            </div> 

            <div className='container my-5'>
                <h4>Your Text Summary</h4>
                <p>{character} words and {count} characters.</p>
            </div>

        </div>
    </div>
}

function AdditionalTextSummary() {

    return
}

export {Textform, TextArea, AdditionalTextSummary}
