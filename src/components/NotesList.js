import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

function NotesList( {notes,handleAddNote,handleDeleteNote}) {
  return (
    <div className='notesList'>
         <AddNote  handleAddNote={handleAddNote} />
        {notes.map((note)=><Note text={note.text} id={note.id} date={note.date} handleDeleteNote={handleDeleteNote}/>)}
       
    </div>
  )
}

export default NotesList
