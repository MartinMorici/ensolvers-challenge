import './App.css';
import Notes from './components/Notes';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className='App font-poppins flex'>
      <Sidebar/>
      <Notes/>
    </div>
  );
}

export default App;
