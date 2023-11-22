import React, { useState } from 'react';
import './dialog.css';

const Dialog = ({ handleClose }) => {
  const [note, setNote] = useState('');

  const handleSaveNote = () => {
    let noteList = [];

    if (localStorage.getItem('notes') === null) {
      noteList.push(note);
    } else {
      noteList = JSON.parse(localStorage.getItem('notes'));
      noteList.push(note);
    }

    localStorage.setItem('notes', JSON.stringify(noteList));
    console.log(localStorage.getItem('notes'));

    handleClose();
  };

  return (
    <div className='curtain'>
      <div className="dialog show">
        <div className="dialog-header">
          <h2>New Note</h2>
          <input id='note-input' type="text" placeholder="Input your note..." value={note} onChange={(event) => setNote(event.target.value)} />
        </div>
        <div className="dialog-footer">
          <button className='cancel-button' onClick={handleClose}>Cancel</button>
          <button className='add-button' onClick={handleSaveNote}>APPLY</button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
