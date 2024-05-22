import React from 'react'

function Note({text,id,date,handleDeleteNote}) {
  return (
    <div  className='note'>
      <span>{text}</span>
      <div className='note-footer'>
        <small>{date}</small>
        <button onClick={()=>handleDeleteNote(id)} className='btn'>Delete</button>
      </div>
    </div>
  )
}

export default Note
