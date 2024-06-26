import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
import { useEffect } from "react";
// import {getLocal, setLocal} from "./utils"
import {getLocal, setLocal} from "./utils/index"


function App() {
  const [notes, setNotes] = useState([
    // {
    //   id:nanoid(),
    //   text:'akash',
    //   date:'12/05/24'
    // }
  ]);

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(getLocal("react-notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);


  const handleDeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    setLocal("react-notes-app-data", newNotes)
  };

  const handleAddNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    setLocal("react-notes-app-data", newNotes)
  };
  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="App">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={handleAddNote}
          handleDeleteNote={handleDeleteNote}
        />
      </div>
    </div>
  );
}

export default App;
