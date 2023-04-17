import { useContext } from 'react';
import './App.css';
import AddNote from './components/AddNote';
import Notes from './components/Notes';
import Sidebar from './components/Sidebar';
import { NotesContext } from './context/Context';


function App() {
  const {notes, showAddNote} = useContext(NotesContext)

  return (
    <div className='App font-poppins flex'>
      <Sidebar/>
      <Notes/>
      { showAddNote && <AddNote/>}
    </div>
  );
}

export default App;
