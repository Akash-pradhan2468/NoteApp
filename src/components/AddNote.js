import React ,{useState}from 'react'

function AddNote({handleAddNote}) {
    const charecterLimit=200;
    const [noteText,setNoteText]=useState('');
    const handleChange=(event)=>{
        if(charecterLimit-event.target.value.length>=0)
        setNoteText(event.target.value)
    }
    const handleSaveClick=()=>{

        if(noteText.trim().length>0){
            handleAddNote(noteText)
            setNoteText('')

        }
    }
  return (
    <div  className='note new'>
      <div><textarea rows='8' cols='30' placeholder='Enter your text' onChange={handleChange} value={noteText}></textarea></div>
      <div className='note-footer'>
        <small>{charecterLimit-noteText.length}remaining word count</small>
        <button onClick={handleSaveClick} className='btn'>Save</button>
      </div>
    </div>
  )
}

export default AddNote
