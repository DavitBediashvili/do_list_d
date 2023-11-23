import React, { useState, useEffect } from 'react';
import './dialog.css';


const Dialog = ({ handleClose, what, id }) => {
  const [note, setNote] = useState('');

  useEffect(() => {
    if (what !== 'add') {
      const existingNotes = JSON.parse(localStorage.getItem('notes'));
      setNote(existingNotes[id]);
    }
  }, [id, what]);

  const handleSaveNote = () => {
    let noteList = [];
    if(what === 'add'){
      if (localStorage.getItem('notes') === null) {
        noteList.push(note);
      } else {
        noteList = JSON.parse(localStorage.getItem('notes'));
        noteList.push(note);
      }

    }else{
      noteList = JSON.parse(localStorage.getItem('notes'));
      noteList[id] = note;
    }
    
    localStorage.setItem('notes', JSON.stringify(noteList));
    handleClose();
  };

  return (
    <div className='curtain'>
      <div className="dialog show">
        <div className="dialog-header">
          <h2>{what === 'add' ? 'New' : 'Edit'} Note</h2>
          <input id='note-input' type="text" placeholder="Input your note..." value={note} onChange={(event) => setNote(event.target.value)} />
        </div>
        <div className="dialog-footer">
          <button className='cancel-button' onClick={handleClose}>Cancel</button>
          <button className='add-button' onClick={handleSaveNote}>{what === 'add' ? 'APPLY' : 'SAVE'}</button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
