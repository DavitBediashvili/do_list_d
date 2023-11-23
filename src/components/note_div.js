import './note_div.css';
import React, { useState } from 'react';
import Dialog from './dialog';
const trash = require('./icons/trash.png');
const pen = require('./icons/pen.png');
const empty = require('./icons/empty.png');


const Note = ({searchInput}) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [dialogIndex, setDialogIndex] = useState(null);

    const handleOpenDialog = (index) => {
      setOpenDialog(true);
      setDialogIndex(index);
    };

    const handleCloseDialog = () => {
      setOpenDialog(false);
    };





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
      const filteredNotes = notes_list.filter((note) => note && note.includes(searchInput));
       renderedNotes = filteredNotes.map((note, index) => (
        <div className='notes purple-line' key={index} onMouseEnter={() => setHovered(index)} onMouseLeave={() => setHovered(null)}>
          <div className='left'>
            <input type="checkbox" id={`${index}`} />
            <h2>{note}</h2>
          </div>
          <div className={`right ${isHovered === index ? 'visible' : ''}`}>
            <button onClick={() => handleOpenDialog(index)}> <img src={pen} alt="Edit" /> </button>
            <button onClick={() => handleDeleteNote(index)}> <img src={trash} alt="Delete" /> </button>
          </div>
          {openDialog && <Dialog handleClose={handleCloseDialog} what={"edit"} id={dialogIndex} />}
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