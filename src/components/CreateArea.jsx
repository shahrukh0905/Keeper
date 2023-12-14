import React,{useState} from "react";
// import notes from "../notes";

function CreateArea(props) {

 const [note,setNote] = useState({
  title:"",
  content:""
 });


  function handleChange(event){
      const {name,value} = event.target;
      setNote(prevValue => {
        return {
          ...prevValue,
          [name]:value
        }
      })
  }

  function submitNote(event){
    props.onAdd(note)
    event.preventDefault();
  }

  return (
    <div className="note">
      <form classname = "form">
        <input onChange = {handleChange} type="text" name = "title" placeholder="Title" value = {note.title} />
        <textarea onChange = {handleChange} type = "text" name = "content" placeholder="Take a note..." row = "3" value ={note.content}/>
      <button onClick={submitNote} type="submit">Add</button>
      </form>
      </div>
  );
}

// This is the note content
export default CreateArea;
