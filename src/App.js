import {useState} from 'react'
import {nanoid} from 'nanoid';
import './App.css';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
import {useEffect} from 'react'
function App() {
  const [notes,setNotes]=useState([
    // {
    //   id:nanoid(),
    //   text:'akash',
    //   date:'12/05/24'
    // }
])


const [searchText,setSearchText]=useState('')
const [darkMode ,setDarkMode]=useState(false);


useEffect(()=>{
  const savedNotes=JSON.parse(
      localStorage.getItem('react-notes-app-date')
  );
  if(savedNotes){
    setNotes(savedNotes)
  }
},[])
useEffect(() => {
  localStorage.setItem(
    'react-notes-app-date',
    JSON.stringify(notes)
  );
}, [notes])



const handleDeleteNote=(id)=>{
  const newNotes=notes.filter((note)=>note.id!==id)
  setNotes(newNotes)
}
const handleAddNote=(text)=>{
  const date=new Date();
  const newNote={
    id:nanoid(),
    text:text,
    date:date.toLocaleDateString()
  }
  const newNotes=[...notes,newNote];
  setNotes(newNotes);

}
  return (
   <div className={`${darkMode&&'dark-mode'}`}>
       <div className="App">
      <Header handleToggleDarkMode={setDarkMode}/>
      <Search handleSearchNote={setSearchText}/>
      <NotesList 
      notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))}
       handleAddNote={handleAddNote} 
       handleDeleteNote={handleDeleteNote}/>
    </div>
   </div>
  );
}

export default App;
