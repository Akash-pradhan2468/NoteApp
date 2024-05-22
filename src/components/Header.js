import React from 'react'

function Header({ handleToggleDarkMode }) {
  return (
    <div className='header'>
        <h1>Notes</h1>
        <button onClick={()=>handleToggleDarkMode((previousValue)=>!previousValue)} className='btn'>
            ToggleMode
        </button>
    </div>
  )
}

export default Header
