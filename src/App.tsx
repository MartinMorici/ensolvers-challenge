import './App.css';
import AddNote from './components/AddNote';
import Notes from './components/Notes';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className='App font-poppins flex'>
      <Sidebar/>
      <Notes/>
      <AddNote/>
    </div>
  );
}

export default App;
