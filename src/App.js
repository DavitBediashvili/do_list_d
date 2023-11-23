import React, { useState } from 'react';
import './App.dark.css';
import Dialog from './components/dialog';
import Note from './components/note_div';
const image = require('./components/icons/Sun.png');

function App() {
  const [searchInput, setSearchInput] = useState(''); 

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    if(isDarkMode === false){
      setIsDarkMode(true); 
      // console.log(isDarkMode)
    }else{
      setIsDarkMode(false); 
      // console.log(isDarkMode)
    }
    
  };


  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  

  return (
    <div className='App flex-center'> 
    <div className="App-header flex-center">
          <h1>TODO LIST</h1>
          <div className='search-div flex-center'>
            <input className='border-radius' type="text" placeholder="Search note..." value={searchInput}onChange={(e) => setSearchInput(e.target.value)}/>
            <select id="dropdown" name="dropdown" className='heigh-38px border-radius'>
              <option className='border-radius' value="option1">ALL</option>
              <option className='border-radius' value="option2">New</option>
              <option className='border-radius' value="option3">Old</option>
            </select>
            <button id="dark-mode-bt" className="flex-center" onClick={toggleDarkMode}>
            <img src={image} />
          </button>

          </div>
        </div>
          <Note searchInput={searchInput}/>
      <div className='add-button-div flex-center'>
          <button onClick={handleOpenDialog}>+</button>
      </div>


      {openDialog && <Dialog handleClose={handleCloseDialog} what={"add"}/>}
    </div>
  );
}

export default App;
