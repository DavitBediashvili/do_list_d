import './note_div.css';
import React, { useState } from 'react';
const trash = require('./icons/trash.png');
const pen = require('./icons/pen.png');
const empty = require('./icons/empty.png');


const Note = ({}) => {
    let notes_list = [];
    let renderedNotes;
    const notes_list_string = localStorage.getItem('notes');
    const [notesList, setNotesList] = useState([]);
    const [isHovered, setHovered] = useState(false);
    

    const handleDeleteNote = (noteIndex) => {
      const updatedNotesList = [...notes_list];
      updatedNotesList.splice(noteIndex, 1);
      localStorage.setItem('notes', JSON.stringify(updatedNotesList));
    };

    const handleToggleCheckbox = (noteIndex) => {
      const updatedNotesList = [...notesList];
      updatedNotesList[noteIndex].isStrikedThrough = !updatedNotesList[noteIndex].isStrikedThrough;
      setNotesList(updatedNotesList);
    };
    

    if(notes_list_string === null){
       renderedNotes = (
        <div className='margin-top-20'>
          <img src={empty}></img>
        </div>
      );

    }else{
      notes_list = JSON.parse(notes_list_string);

       renderedNotes = notes_list.map((note, index) => (
        <div className='notes purple-line' key={index} onMouseEnter={() => setHovered(index)} onMouseLeave={() => setHovered(null)}>
          <div className='left'>
            <input type="checkbox" id={`checkbox-${index}`} />
            <h2>{note}</h2>
          </div>
          <div className={`right ${isHovered === index ? 'visible' : ''}`}>
            <button> <img src={pen} alt="Edit" /> </button>
            <button onClick={() => handleDeleteNote(index)}> <img src={trash} alt="Delete" /> </button>
          </div>
      </div>
      ));
    }

    
    
      

    return (
      <div className='notes-container'>
        {renderedNotes}
      </div>
    );
  };
  
  export default Note;