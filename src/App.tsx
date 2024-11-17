import { useState } from 'react';
import AddData from './Components/AddData';
import Header from './Components/Header';
import NoteArea from './Components/NoteArea';
import CompletedNote from './Components/Completed.tsx';

function App() {
  const [completed, setCompleted] = useState(false);

  function changeFlow() {
    setCompleted((prevState) => {
      console.log(!prevState); 
      return !prevState;
    });
  }

  return (
    <div className="app">
      <div className="completed-task" onClick={changeFlow} >
        {!completed ? "Completed" : "Tasks"}
      </div>
      <Header />
      <AddData />
      {completed ? <CompletedNote /> : <NoteArea />}
    </div>
  );
}

export default App;
