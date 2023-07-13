import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import SignUp from "./SignUp";
import Login from "./Login";

function App() {
  //For functional requirements
  const [notes, setNotes] = useState([]);

  //Add a note
  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  //Delete a note
  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  //User authentication
  var[currentform,setFormType] = useState("register");
  var[userValidation,setUserValidation] = useState(false);

    return(
      userValidation === true ?
      <div>
        <Header />
        <CreateArea onAdd={addNote} />
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          )}
      )}
      <Footer />
    </div>
    :
    currentform === 'register' ? 
    <div>
      <Header />
      <SignUp setFormType = {setFormType} userValidation = {setUserValidation}/>
      <Footer />
    </div>
    :
    <div>
      <Header />
      <Login setFormType = {setFormType} userValidation = {setUserValidation}/>
      <Footer />
    </div>

    )
  } 




export default App;
