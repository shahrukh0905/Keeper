import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import CreateArea from "./CreateArea";


function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {

    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }


  function deleteNote(id){
      setNotes( (prevNotes) =>{
      return prevNotes.filter((noteItem,index) =>{
         return index !== id;
        })
      })
  }


  return (
    <div>
      <Header />

      <CreateArea
        onAdd={addNote}
      />
  
        {notes.map((noteItem,index) => {
        return <Note 
        title={noteItem.title} 
        content={noteItem.content} 
        onDelete = {deleteNote} 
        id = {index} 
        key = {index} />
        })}


   <Footer />
    </div>
  )
}

export default App;